import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../main/Main';

// Http 요청을 할 때 jquery의 ajax, fetch(순수한 js), axios(외부 라이브러리) 를 사용
// jquery는 사용하지 못함

const MainPage = () => {
    const [boards, setBoards] = useState([]); // 상태변수들은 컴포넌트에서 처리하는 것보다 Page에서 처리하는 것이 좋음 (추가 설명 : LoginPage)
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({});

    useEffect(() => {
        //실제 download를 받는 것으로 가정 (fetch, axios, ajax)

        let data = [
            {id: 1, title: "title 1", content: "content 1"},
            {id: 2, title: "title 2", content: "content 2"},
            {id: 3, title: "title 3", content: "content 3"},
            {id: 4, title: "title 4", content: "content 4"}
        ];

        // 현재는 가정이지만 실제로는 let data 내부의 값이 통신을 통해 다운을 받아야 하는데
        // 다운을 받기도 전에 setBoards가 실행이 되어 내부에는 빈 값이 들어가버림
        // 이후에 다운을 다 받으면 boards가 수정되었으므로 다시 재실행되어 통신을 통해 받은 값이 들어감
        // 따라서 무엇가를 통신을 통해 받아오는 변수들은 상태 변수로 반드시 정의해야함
        setBoards([...data]);
        setUser({id: 1, username: "dong"})
    }, [])

    // <Main boards={boards} /> 로 데이터를 넘긴 데이터를 props라고 함 (여러 개 넘길 수 있음)
    // 단, boards의 원래 주인은 계속해서 MainPage이기 때문에 함부로 컴포넌트에서 삭제하거나 수정할 수 없음
    // 따라서 컴포넌트에게 수정이나 삭제의 권한을 주기 위해선 setBoards도 함께 넘겨줘야함
    return (
        <div>
            <Main boards={boards} setBoards={setBoards} number={number} setNumber={setNumber} user={user}/>
        </div>
    );
};

export default MainPage;