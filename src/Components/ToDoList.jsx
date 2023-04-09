import React, {useState} from 'react'

function ToDoList() {
    const [inputText, setInputText] = useState("")

    const handleInputText = (event) => {
        setInputText(event.target.value)
    }

    const addTask = (event) => {
        event.preventDefault()
        console.log({inputText})

        setInputText("")
    }
    return (
        <div>
            <div>
                <form onSubmit={addTask}>
                    <label htmlFor="inputText">Add Task:-</label>
                    <input 
                    type="text" 
                    id='inputText' 
                    name='inputText'
                    value={inputText}
                    onChange = {handleInputText}
                    />
                    <input type="submit" value= "Add+" />
                    <input type="reset" />
                </form>
            </div>
        </div>
    )
}

export default ToDoList
