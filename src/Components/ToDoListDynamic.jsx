import React, { useState } from 'react'

function ToDoListDynamic() {
    const initialInputTask = {inputText : ""}

    const [ToDoList, setToDoList] = useState(initialInputTask)
    const [allToDoList, setAllToDoList] = useState(
        []
    )

    const addTask = (event) => {
        event.preventDefault()
        console.log(ToDoList)
        setToDoList(initialInputTask)
        setAllToDoList([...allToDoList, ToDoList])
    }

    const handleinputfield = (event) => {
        console.log(event.target.name, event.target.value)
        setToDoList({
            ...ToDoList,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={addTask}>
                        <label htmlFor="inputText">Add Task:-</label>
                        <input 
                        type="text" 
                        id='inputText' 
                        name='inputText'
                        value={ToDoList.inputText}
                        onChange = {handleinputfield}
                        />
                        <input type="submit" value= "Add+" />
                        <input type="reset" />
                    </form>
                    {allToDoList.map((item,index) => <h1>task:-{item.inputText}</h1> )}
                </div>
            </div>
        </div>
    )
}

export default ToDoListDynamic
