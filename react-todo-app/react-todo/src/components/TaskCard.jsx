import { useState } from "react"
const TaskCard = (props) =>{

    const [extended, setExtended] = useState(false)

    const toggleExtended = () => {
        setExtended(!extended);
      };

    return(
        <div className="taskcard-wrap">
            <div className="task-info">
                <div className="task-name">
                    <h3>{props.name}</h3>
                </div>
                <div className="task-img">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/forward.png" alt="forward" onClick={toggleExtended}/>
                </div>
            </div>
            <div className="task-desc">
                {extended && <p>{props.disc}</p>}
            </div>
        </div>
    )
}

export default TaskCard