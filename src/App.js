import React from "react";
import WorkoutContainer from "./WorkoutContainer";
import './App.css';
//import SearchIcon from './search.svg';

const Cardioworkout={
  "cost" : "1600",
  "image": "https://w0.peakpx.com/wallpaper/560/825/HD-wallpaper-bodybuilder-gym-hard-healthy-life-happy.jpg",
  "subscription": "Cardio + Strength",
  "description": "Weight Loss + Muscle Gain"
}
const Strengthworkout={
  "cost" : "1400",
  "image": "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80",
  "subscription": "Strength",
  "description": "Muscle Gain"
}

const PersonalTraining={
  "cost" : "4000",
  "image": "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  "subscription": "Personal Trainer",
  "description": "Let's get trained"
}

const App = () =>{
   // const [workout, setWorkout] = useState([]);

  return (
    <div className="app">
    <h1>My Fitness</h1>

    <div className="container">
    <WorkoutContainer workout={Cardioworkout}/>
    <WorkoutContainer workout={Strengthworkout}/>
    <WorkoutContainer workout={PersonalTraining}/>
    </div>
    <div>
      <h3 style={{color:"white"}}>Contact Details</h3>
      <div>
      <p style={{color:"rgb(159, 113, 76)"}}><strong> Mohan <br/>
      8143335140</strong></p>
      <p style={{color:"rgb(159, 113, 76)"}}><strong> Eswar <br/>
      7780711297</strong></p>
      </div>
    </div>    
    </div>
    
  );
}

export default App;