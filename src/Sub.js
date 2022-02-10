import React from 'react';

let num=10;
const Sub = () => {
    // Re-Rendering 할 지 하지 않을 지 결정하는 함수 제공
    // 따라서 React는 Component 설계를 잘 해야함
    return (
        <div>
            <h1>This is Sub Page</h1>
        </div>
    );
};

export {num}; // import {num} from './Sub';
export default Sub; // Sub 함수를 외에 노출하겠다 라는 것 (import Sub from './sub'; ./는 같은 폴더에 있을 때 사용하는 것)
