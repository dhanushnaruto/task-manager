import React, {useState} from 'react'
import './index.css'

function Task({task, onEditTask, onDeleteTask, onToggleTaskCompletion}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEditTask({...task, title: editedTitle})
    setIsEditing(false)
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(task.id)}
          />
          <span
            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
          >
            {task.title}
          </span>
          <div className="button-container">
            <button
              className="button"
              style={{backgroundColor: '#60c42d'}}
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="button"
              style={{backgroundColor: '#c9263c', color: '#ffffff'}}
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default Task
