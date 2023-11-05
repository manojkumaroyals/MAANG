import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div class="in">
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)} class="delete">Delete</button></h5>
            </div>)}
        </div>
    )
}

export default TodoList;