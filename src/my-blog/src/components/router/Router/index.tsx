import React from 'react';
import { Routes, Route} from 'react-router-dom';

import{
    Home, 
    Post,
    Page404,
    Detail,
 } from 'components/pages';
const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/"        element={<Home/>}/>
            <Route path="/post"    element={<Post/>}/>
            <Route path="/detail"  element={<Detail/>}/>
            <Route path="/page404" element={<Page404/>}/>
        </Routes>

    );
};

export default Router;