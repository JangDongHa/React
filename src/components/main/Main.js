import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import styled from 'styled-components';

// 부모로부터 받아온 데이터를 가지고 스타일링을 동적으로 하고 싶다면 (Sytled 함수를 사용하고 싶으면)
// lambda 식으로 사용하고 바로 user.username, boards.id 등으로 끌어서 사용
// 그러나 이렇게 바깥에 빼서 사용할 때는 props.user.username 이런식으로 쓰고 매개변수로 넘겨줘서 사용
// StyledComponents는 바깥에 빼서 쓰는 것이 좋다고 함
const StyledDeleteButton = styled.button`
    color: ${(props)=> props.user.username === "dong" ? "blue" : "red"}
    `;

    // Styled Extends
    // 스타일 상속이 필요한 이유 : 예를 들어, 어떤 아주 잘 만든 버튼이 있다고 가정
    // 그러나 다른 곳에 쓸 때는 버튼의 backgroundColor만 다른 것으로 바꾸고 싶음
    // 이럴 때 해당 버튼을 상속하고 backgroundColor만 수정하여 사용하면 됨
    // 상속을 사용하지 않으면 backgroundColor 빼고 똑같은 버튼을 가진 styled 변수를 하나 더 생성해야함
    // 부모의 값을 바꾸고 싶으면 바꾸고 싶은 속성을 입력하여 덮어씌우면 됨
const StyledAddButton = styled(StyledDeleteButton)`
    background-color: yellow;
    `;

const Main = (props) => {

    // 구조분할 할당
    const {boards, setBoards, number, setNumber, user} = props; // const boards = props.boards 라고 하지 않고 넘어온 변수의 이름을 {} 내에 넣으면 알아서 매핑해서 넣어줌


    return (
        <div>
            <h1>This is Main Page (username : {user.username})</h1>
            <h1> Number : {number}</h1>
            <StyledAddButton user={user} onClick={()=>setNumber(number+1)}>Increase</StyledAddButton>
            <button onClick={()=>setNumber(number-1)}>Decrease</button>
            <StyledDeleteButton user={user} onClick={()=>setBoards([])}>
            전체 삭제
            </StyledDeleteButton>
            {boards.map((board) => 
                <h3>id : {board.id} title : {board.title} content : {board.content}</h3>
            )}
        </div>
    );
};

export default Main;