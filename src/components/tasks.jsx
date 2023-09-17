import { GoDot } from 'react-icons/go'
import { MdDeleteSweep } from "react-icons/md"
import "../style/tasks.css"

export default function Tasks({ tasks, deleteTask }) {
    return (
        <div className="tasks">
            {tasks.map((task, index) => (
                <div className='task'>
                    <div className='task-main'>
                        <GoDot className='dot' />
                        <span className='task-text'> {task} </span>
                    </div>

                    <MdDeleteSweep className='delete' onClick={() => deleteTask(index)} />
                </div>
            ))}
        </div>
    )
}