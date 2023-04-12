import React, { useState } from 'react'

function ToDoListDynamic() {
    const initialInputTask = {inputText : ""}

    const [toDoList, setToDoList] = useState(initialInputTask)
    const [allToDoList, setAllToDoList] = useState([])
    const date = new Date()

    const addTask = (event) => {
        event.preventDefault()
        console.log(toDoList)
        setToDoList(initialInputTask)
        setAllToDoList([...allToDoList, {...toDoList, createdDate : date.getMilliseconds()} ])
    }

    const handleinputfield = (event) => {
        console.log(event.target.name, event.target.value)
        setToDoList({
            ...toDoList,
            [event.target.name] : event.target.value
        })
    }

    const deleteTask = (createdDate) => {
        console.log("deleted task", createdDate)
        const filteredTasks = allToDoList.filter((item,index) => item.createdDate !== createdDate )
        setAllToDoList(filteredTasks)
    }

    return (
        <div>
            <div>
                <div className='itemsContainerr'>
                    <form onSubmit={addTask}>
                        <label htmlFor="inputText">Add Task:-</label>
                        <input
                        type="text" 
                        id='inputText' 
                        name='inputText'
                        value={toDoList.inputText}
                        onChange = {handleinputfield}
                        />
                        <input className='button' type="submit" value= "Add+" />
                        <input className='button' type="reset" onClick={() => setToDoList(initialInputTask) } />
                    </form>
                </div>
                {allToDoList.map((item) => <div className='list'>
                                                    <span>
                                                    <li className='task'>{item.inputText}</li>
                                                    </span>
                                                    <button onClick={ () => deleteTask (item.createdDate)}> X </button>
                                                     </div>)}
            </div>
        </div>
    )
}

export default ToDoListDynamic
