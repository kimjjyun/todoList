import {useEffect, useState} from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useAxios from './tools/useAxios';
import axios from "axios";

const initialList = [
  { id: 1, content: "상쾌하게 기상하기",     isCompleted: true },
  { id: 2, content: "엘리스 이론 강의 듣기", isCompleted: true },
  { id: 3, content: "간지나게 점심 먹기",    isCompleted: true },
  { id: 4, content: "엘리스 실습 강의 듣기", isCompleted: false },
  { id: 5, content: "고풍스럽게 저녁 먹기",  isCompleted: false },
  { id: 6, content: "누구보다도 꿀잠 자기",  isCompleted: false }
];


function App() {
  const [ toDoList, setToDoList ] = useState(initialList)
  
  useEffect(()=>{
    useAxios.setup();
    async function fetch() {
      const resp = await axios.get("/")

      return resp.data.records;
    }

    fetch().then((v) => {
      const fetchedList = v.map((v) => {
        return {
          id: v.id,
          content: v.fields.Name,
          isCompleted: v.fields.isCompleted || false,
        }
      });
      setToDoList(fetchedList);
    })
  }, []);

  function handlerToggle(id){
    const mapped = toDoList.map((todo) => {
      if (todo.id === id)
        return {...todo, isCompleted: !todo.isCompleted}
      else
        return {...todo};
    });

    setToDoList(mapped);
  }
 async function handleSubmit(content){
    await axios.post("/", { records: [
      { fields: {
        Name: content,
        isCompleted: ,
      }}
    ]})

    let copied = [...toDoList];
    copied.push({
      id: 0,
      content,
      isCompleted: false
    });

    setToDoList(copied);
  }
  return (
    <div>
      <TodoInput submitHandler={handleSubmit}></TodoInput>
      <TodoList toDoList={toDoList} toggleHandler={handlerToggle}></TodoList>
    </div>
  );
}

export default App;
