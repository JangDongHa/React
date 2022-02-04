import logo from './logo.svg';
import "./App.css";
import { useState } from 'react';
import Sub from './Sub';

//0. React Engine = Data 변경을 감지하여 UI를 그려주는 역할
//1. 실행 과정 (index.html) react에서 page를 바꾼다라는 개념 = body의 내용을 바꾼다. (page를 변경하는 것이 아닌 하나의 페이지에서 body의 내용만 바뀜)
// = Single Page Application = SPA
// 따라서, a tag 와 같은 페이지 이동 문법은 사용 불가능
//2. JSX 문법
//3. 바벨 = ES6 문법을 ES5로 변환

// 1. return 시에는 하나의 Dom만 리턴할 수 있음 (return 주석 확인)
// 2. 변수 선언은 let 혹은 const로만 해야함 (var로 쓰면 hello scope 밖에서도 사용 가능하지만 let 사용 시 일반적인 scope와 같은 range를 가짐)
// 3. if 사용 불가능 -> 단, 삼항연산자 사용 가능
// 4. 조건부 Rendering : {a === 10 && "is 10"} // 있으면 "is 10" 출력, 없으면 자동으로 아무것도 출력하지 않음
// 삼항연산자 : {a === 10 ? "is 10" : "is not 10"} // a가 10이면 "is 10" 출력, 아니라면 "is not 10" 출력
// 삼항연산자 == vs === : == 는 값만을 검사, ===는 값과 타입을 검사

let a = 10;
const b = 20;

function App() {
  let sample = [
    {id:1, name:"test1"},
    {id:2, name:"test2"},
    {id:3, name:"test3"},
    {id:4, name:"test4"}
  ];
  const [users, setUsers] = useState(sample);
  //let number = 1;
  const num = 1;
  const [number, setNumber] = useState(num); // react 내 hooks Library (jsx 문법임). 상태값으로 설정하는 방법임(이렇게 하면 자동 렌더링 진행)
  // const [변수, 변경하려면 setNumber로 변경] = userState(시작상태값);
  const add = () => {
    setNumber(number+1); // 실제로 변경하는 것이 아니라 react에게 number값을 변경하겠다고 요청하는 것
    console.log('add', number+1); // 그러므로 log 찍을 때 number가 아닌 number+1로 해야 페이지에서 표기하는 Number와 동일한 값 출력
  };

  const download = () => {
    setUsers([...sample, {id:5, name:"test5"}]); // 같은 데이터여도 다른 레퍼런스이기 때문에 깊은 복사를 통해 Re-Rendering이 진행됨
    setNumber(number+1);
    // sample vs [...sample]
    // setUsers(sample)을 진행하면 기존의 레퍼런스가 같으면 Re-Rendering 진행 x
    // setUsers([...sample])을 진행하면 새로운 레퍼런스를 생성하는 것이기 때문에 Re-Rendering이 진행됨
    // 레퍼런스 내 값이 변해도 레퍼런스가 바뀌지 않는다면 Re-Rendering은 이루어지지 않음
    // *** 레퍼런스의 변경이 있을 때만 Re-Rendering을 진행함
    // *** 단, 시작할 때의 기존 데이터는 항상 불변의 성질을 가지고 있음 (새로고침 및 Re-Rendering을 해도 수정된 데이터가 또 수정되지 않음)
    // 예를 들어, sample = sample.concat(data); 를 넣어도 한번만 적용되고 그 이후에는 불변의 값에 똑같이 sample.concat을 진행하기 때문에 수정x
  };

  // 렌더링 시점 : 상태값 변경이 일어날 때 렌더링 진행
  return <div>
    <div>
      <h1>number : {number}</h1>
      <input type="button" value="plus" onClick={add}></input>
      <input type="button" value="download" onClick={download}></input>
      {users.map(n=> <h1>{n.id}, {n.name}</h1>)}
      {console.log("test")}
      <Sub />
    </div>
  </div>;
  // 함수형 변수를 넣을 때 add() 이런식으로 하면 바로 실행이 되기 때문에 add만 적어서 바인딩 되게 해야함
  // return <div>
  //   <div>hello {a === 10 ? "is 10" : "not 10"}</div>
  //   <h1>hi {b === 20 && "is 20"}</h1>
  //   <hr />
  // </div>; // react에서는 하나의 태그만 return 가능. 따라서 새로운 태그를 넣고 싶으면 큰 div 안에 div를 넣거나 h 태그를 넣으면 됨
}

export default App;
