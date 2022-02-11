import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Title } from '../../MyCss';
import Footer from '../Footer';
import Header from '../Header';
import Login from '../login/Login';

// Page는 컴포넌트들의 조합
// 컴포넌트 : 각각의 Page들이 재사용하면서 만들 수 있게 해줌
// 추가적으로, 데이터는 페이지에서 관리하는 것이 좋음
// 컴포넌트에서 만든 데이터를 다른 컴포넌트에서 제어할 수 없기 때문에
// 단 Redux라는 라이브러리를 사용하면 Spring처럼 IOC 관리가 가능

const LoginPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <div>
                <Title>Hello</Title>
                <Login navigate={navigate} />
            </div>
        </div>
    );
};

export default LoginPage;