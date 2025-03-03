import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = () => {
   const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); 


    
   
    const handleSubmit =  (e) =>{
     e.preventDefault();
     const task = { title, body, status};
     
     fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(task)

     }).then (() => {
        console.log('task is completed'); 
        setIsPending(false);
        //history.go(-1);
        history.push('/');
     });
    }
    return (
        <div className="create">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Add title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Add details:</label>
                <textarea
                required
                value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                    
                </textarea>
                <label>Type:</label>
                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Task">Task</option>
                    <option value="Event">Event</option>
                </select>
                {!isPending && <button>Add Task</button>}
                { isPending && <button disabled>Adding Task...</button>} 
            </form>
        </div>
    );
}
 
export default Create;