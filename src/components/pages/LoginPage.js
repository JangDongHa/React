import React from 'react';
import { Title } from '../../MyCss';
import Footer from '../Footer';
import Header from '../Header';
import Login from '../login/Login';

// Page는 컴포넌트들의 조합
// 컴포넌트 : 각각의 Page들이 재사용하면서 만들 수 있게 해줌
// 추가적으로, 데이터는 페이지에서 관리하는 것이 좋음
// 컴포넌트에서 만든 데이터를 다른 컴포넌트에서 제어할 수 없기 때문에

const LoginPage = () => {
    return (
        <div>
            <div>
                <Header />
                <Title>Hello</Title>
                <Login />
                <Footer />
            </div>
        </div>
    );
};

export default LoginPage;