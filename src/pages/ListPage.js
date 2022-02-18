import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import WritePage from './WritePage';

const ListPage = () =>{
    const StyledItemBoxDiv = styled.div`
        display: flex;
        justify-content: space-between;
        border: 1px solid black;
        padding: 10px;
        height: 100px;
        margin: 20px;
        align-items: center;
    `;

    const [posts, setPosts] = useState([
        {id: 1, title: "제목1", content: "내용1"},
        {id: 2, title: "제목2", content: "내용2"},
        {id: 3, title: "제목3", content: "내용3"},
        {id: 4, title: "제목4", content: "내용4"},
        {id: 5, title: "제목5", content: "내용5"}
    ])

    const [post, setPost] = useState({
        id: 6,
        title: "",
        content: ""
    });

    const handleWrite = ()=>{
        // ListPage의 setPosts에 입력한 input값을 담아야함
        setPost({...post, id: post.id+1}); // post가 추가될 때마다 1씩 증가
        setPosts([...posts, post]);
    };

    const handleChangeTitle = (e)=>{ // onChange가 되었을 때 변경된 이벤트가 e로 들어감
        setPost({title: e.target.value}); // setPost로 상태 변경을 하기 전까지는 변수는 변경이 되지 않기 때문에 setPost를 넣지 않으면 값이 들어가지 않음
    };
    
    const handlechangeContent = (e)=>{
        setPost({content: e.target.value});
    };

    const handleForm = (e)=>{ // 위처럼 하면 10개의 input이면 10개의 변수를 만들어야 하기 때문에 input에 name을 추가하여 하나로 관리하는 것이 좋음
        // console.log(e.target.name); // e.target.name : input 내 name 값
        //console.log(e.target.value); // e.target.value : input 내 value 값

        // computed property names 문법 (key값 동적 할당)
        
        setPost({...post, [e.target.name] : e.target.value}) // []로 묶은 값이 key값 : value 값으로 해서 name에 따른 value값을 넣어줌]
        
        console.log(post.title);
        console.log(post.content);
    }
    return (
        <div>
            <h1>글쓰기 페이지</h1>
            <hr/>
            <form>
                <input type="text" placeholder="제목을 입력하세요..." value={post.title} onChange={handleForm} name="title"/>
                <input type="text" placeholder="내용을 입력하세요..." value={post.content} onChange={handleForm} name="content"/>
                <button type="button" onClick={handleWrite}>글 쓰기</button>
            </form>
            <h1>글목록 페이지</h1>
            <hr />
            {posts.map((post)=> <StyledItemBoxDiv>
                <div>
                번호 : {post.id} // 제목 : {post.title} // 내용 : {post.content}
                </div>
                <button>삭제</button>
                </StyledItemBoxDiv>)}
        </div>
    );
};

export default ListPage;