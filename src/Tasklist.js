import { Link } from "react-router-dom";
const Tasklist = ({tasks, titles}) => {

    

return ( 
        <div className="tasklist">
            <h2>All Added Tasks :) { titles }</h2>
        {tasks.map((tasks) => (
            <div className="task-preview" key={tasks.id}>
                <Link to={`/tasks/${tasks.id}`}>
                  <h2>{ tasks.title }</h2>
                
                </Link>   
            </div>
        ))}
        </div>   
             
     ); 
}
 
export default Tasklist; 