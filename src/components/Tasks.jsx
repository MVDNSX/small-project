import React from "react";
import './Task.css'
import {BsFillCheckCircleFill , BsFillExclamationCircleFill} from 'react-icons/bs'
import {TiDelete} from 'react-icons/ti'
const Tasks = ({title, id, completed, deleteTask}) => {
	
	return (
		<div className="task">
			<div className="task__title">{title}</div>
			{completed ? <BsFillCheckCircleFill color='green'/> : <BsFillExclamationCircleFill color='red'/>}
			<button onClick={() => {deleteTask(id)}}><TiDelete color='gray' size='21'/></button>
		</div>
	)
}
export default Tasks