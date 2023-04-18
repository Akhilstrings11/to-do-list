import React, { useState } from "react";

function ToDoListDynamic() {
  const initialInputTask = { inputText: "", completed: false };

  const [toDoList, setToDoList] = useState(initialInputTask);
  const [allToDoList, setAllToDoList] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const date = new Date();

  const addTask = (event) => {
    event.preventDefault();
    console.log(toDoList);
    setToDoList(initialInputTask);
    setAllToDoList([
      ...allToDoList,
      { ...toDoList, createdDate: date.getTime() },
    ]);
  };

  const handleinputfield = (event) => {
    // console.log(event.target.name, event.target.value);
    setToDoList({
      ...toDoList,
      [event.target.name]: event.target.value,
    });
  };

  const deleteTask = (createdDate) => {
    console.log("deleted task", createdDate);
    const filteredTasks = allToDoList.filter(
      (item, index) => item.createdDate !== createdDate
    );
    setAllToDoList(filteredTasks);
  };

  const handleMarkTodo = (event,todoItem) => {
    console.log(todoItem, event.target.checked)
    if(event.target.checked){
        const markedTodos = allToDoList.map((item,index) => {
          if(item.createdDate === todoItem.createdDate){
            return {
              ...item,
              completed : true
            }
          } else {
            return item
          }
        } )
        setAllToDoList(markedTodos)
    } else {
      const markedTodos = allToDoList.map((item,index) => {
        if(item.createdDate === todoItem.createdDate){
          return {
            ...item,
            completed : false
          }
        } else {
          return item
        }
      } )
      setAllToDoList(markedTodos)
    }
  }

  const handleCompleteTodos = () => {
    
    const unCompletedTodos =  allToDoList.filter((item,index) => item.completed === false )
    setAllToDoList(unCompletedTodos)

    const checkcompletedTodos = allToDoList.filter((item,index) => item.completed === true )
    setCompletedTodos([...completedTodos,...checkcompletedTodos])
  }

  const valid = allToDoList.some((item,index) => item.completed === true )

  return (
    <div>
      {console.log(completedTodos)}
      <div>
        <div className="itemsContainerr">
          <form onSubmit={addTask}>
            <label htmlFor="inputText">Add Task:-</label>
            <input
              type="text"
              id="inputText"
              name="inputText"
              value={toDoList.inputText}
              onChange={handleinputfield}
            />
            <input className="button" type="submit" value="Add+" />
            <input
              className="button"
              type="reset"
              onClick={() => setToDoList(initialInputTask)}
            />
          </form>
        </div>
        {allToDoList.map((item) => (
          <div className="list" key = {item.createdDate} >
            <input type="checkbox" onChange={(event) => handleMarkTodo(event,item) } checked = {item.completed} />
            <span>
              <li className="task">{item.inputText}</li>
            </span>
            <button onClick={() => deleteTask(item.createdDate)}> X </button>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "center" }}>
          { valid && <button onClick={() => handleCompleteTodos()} >Mark Complete</button>}
        </div>
        <div style={{ display: "flex", alignItems: "center", flexDirection : "column" }} >
          {completedTodos.map((item,index) => <div key={item.createdDate} > <h2> {item.inputText} </h2> </div> )}
        </div>
      </div>
    </div>
  );
}

export default ToDoListDynamic;
