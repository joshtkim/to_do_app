import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  let today = new Date();
  let seconds = today.getDate() + '-' + today.getMinutes() + ':' + today.getSeconds();

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: seconds,
      text: input
    })

    setInput('')
  }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (        
          <>
          <input 
          type="text" 
          placeholder="Update the todo" 
          value={input} 
          name="text" 
          className="todo-input edit"
          onChange={handleChange}
          ref={inputRef}
          />
          <button className="todo-button">Update</button>
          </>
        ) : (        
          <>
          <input 
          type="text" 
          placeholder="Add a todo" 
          value={input} 
          name="text" 
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
          </>)
        }
      </form>
    </div>
  )
}

export default TodoForm
