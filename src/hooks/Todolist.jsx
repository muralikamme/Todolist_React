import { useState } from "react";
import './todolist.css';

function Todolist() {
    const [a, seta] = useState("");
    const [b, setb] = useState([]);

    const Handle_Submit = (e) => {
        e.preventDefault();
        setb([...b, a]);
        seta("");
    };

    const Changing = (e) => {
        seta(e.target.value);
    };

    const del = (val) => {
        setb(b.filter((item) => item !== val));
    };

    const edi = (val, ind) => {
        const user = prompt("Change value", val);
        if (user) {
            const arr = [...b];
            arr[ind] = user;
            setb(arr);
        }
    };

    return (
        <div className="todolist-wrapper">
            <form onSubmit={Handle_Submit}>
                <input 
                    type="text" 
                    placeholder="Add Task..." 
                    onChange={Changing} 
                    value={a} 
                />
                <input type="submit" value="Add Task" />
            </form>
            <ul>
                {b.map((val, ind) => (
                    <li key={ind}>
                        {val}
                        <div>
                            <button className="edit" onClick={() => edi(val, ind)}>Edit</button>
                            <button className="delete" onClick={() => del(val)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
