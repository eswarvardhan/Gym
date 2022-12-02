import React from "react";

const WorkoutContainer= ({workout}) =>{
    return(
<div className="workout">
    <div>
      <p>Rs {workout.cost}/-</p>
    </div>
    <div>
        <img src={workout.image} alt={workout.subscription}/>
    </div>
    <div>
        <span>{workout.subscription}</span>
        <h3>{workout.description}</h3>
    </div>
</div>



    );
}

export default WorkoutContainer;