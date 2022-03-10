import Todo from "./Todo";

function TodoList({ toDoList, toggleHandler }){
    return(
        <ul>
            {toDoList.map((v) =>
                <Todo value={v} toggleHandler={toggleHandler}></Todo>
            )}
        </ul>
    );
}

export default TodoList;