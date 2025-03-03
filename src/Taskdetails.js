//import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`http://localhost:8000/tasks/${id}`);
    const history = useHistory(); 
    
    const handleDelete = () => {
    fetch(`http://localhost:8000/tasks/${id}`, {
    method: 'DELETE'
    }).then(()=> {
    history.push('/'); 
    })
    } 

const handleComplete = () => {
    const updatedTask = {...data, status: 'completed'}
    fetch(`http://localhost:8000/tasks/${id}`, {
        method: 'PATCH',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(updatedTask)

     }).then (() => {
        console.log('new task loaded'); 
        
        //history.go(-1);
        history.push('/');
     });
}
    return (  
        <div className="task-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            { data && (
                <article>
                    <h2>{ data.title }</h2>
                    <div>{ data.body }</div>
                    <div>{ data.status }</div>
                    <button onClick={handleDelete}>delete</button>
                    <button onClick={handleComplete}>Complete</button>
                
                </article>
            )}
        </div>  
    );
}

 
export default TaskDetails;
