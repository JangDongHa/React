import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
            <li><Link to="/write">글 쓰기</Link></li>
            <li><Link to="/list">글 목록</Link></li>
            </ul>            
        </div>
    );
};

export default Navigation;