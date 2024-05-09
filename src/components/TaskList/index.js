import React from 'react'
import Task from '../Task'

function TaskList({tasks, onEditTask, onDeleteTask, onToggleTaskCompletion}) {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleTaskCompletion={onToggleTaskCompletion}
        />
      ))}
    </ul>
  )
}

export default TaskList
