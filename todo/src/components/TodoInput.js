import {useState} from 'react';

function TodoInput(){
    const [userInput, setUserInput] = useState('');

    function handleChange(event){
        event.preventDefault();
        setUserInput(event.currentTarget.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        setUserInput('');
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <input value={userInput}
                    onChange={handleChange}
                    type="text" 
                    placeholder="New TODO"></input>
            </form>
    )
}

export default TodoInput;