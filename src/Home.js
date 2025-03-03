 
import Tasklist from './Tasklist';
import useFetch from './useFetch';

 
    const Home = () => {
    const {data:tasks, isPending, error} = useFetch('http://localhost:8000/tasks')
    
    return ( 
        <div className="home">
            {error && <div> Could not fetch the data for that resource </div>}
            {isPending && <div>Loading...</div>}
            {tasks && <Tasklist tasks={tasks} title="All Tasks"/>}
        </div>

     );
 }
  
 export default Home;
  