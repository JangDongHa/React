import logo from './logo.svg';
import "./App.css";

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

  
  return <div>
    <div>hello {a === 10 ? "is 10" : "not 10"}</div>
    <h1>hi {b === 20 && "is 20"}</h1>
    <hr />
  </div>; // react에서는 하나의 태그만 return 가능. 따라서 새로운 태그를 넣고 싶으면 큰 div 안에 div를 넣거나 h 태그를 넣으면 됨
}

export default App;
