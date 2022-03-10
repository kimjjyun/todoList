function Todo({ value, toggleHandler }){
    const { id, content, isCompleted } = value;

    function clickHandler(evt){
        toggleHandler(id)
    }
    return (
        <li>
            <label>
                <input type="checkbox" 
                    checked={isCompleted}
                    onChange={clickHandler}></input>
                { content }
            </label>
            <button>삭제</button>
            
        </li>
    );
}

export default Todo;