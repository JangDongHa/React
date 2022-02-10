import React from 'react';
import { useState } from 'react/cjs/react.development';

const Main = (props) => {


    // 구조분할 할당
    const {boards, test, setBoards, number, setNumber} = props; // const boards = props.boards 라고 하지 않고 넘어온 변수의 이름을 {} 내에 넣으면 알아서 매핑해서 넣어줌

    console.log(boards);

    return (
        <div>
            <h1>This is Main Page</h1>
            <h1> Number : {number}</h1>
            <button onClick={()=>setNumber(number+1)}>Increase</button>
            <button onClick={()=>setNumber(number-1)}>Decrease</button>
            <button onClick={()=>setBoards([])}>전체 삭제</button>
            {boards.map((board) => 
                <h3>id : {board.id} title : {board.title} content : {board.content}</h3>
            )}
        </div>
    );
};

export default Main;