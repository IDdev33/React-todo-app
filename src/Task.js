export const Task = (props) =>{
    return (
        <div className="">
          <h3 className='p-2'>{props.taskName}</h3>
          <button onClick={()=>{props.completeTask(props.id)}} className="btn btn-success m-1">Complete</button>
          <button onClick={() => props.deleteTask(props.id)} className="btn btn-danger m-1">Delete</button>
        </div>
      );
}