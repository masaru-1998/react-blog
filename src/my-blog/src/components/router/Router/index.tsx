import React from 'react';
import { Routes, Route} from 'react-router-dom';

import{
    Home, 
    Page404,
    AdominPost,
    AdominEdit,
    Detail,
 } from 'components/pages';
const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/blog" >
                <Route path="home"     element={<Home/>}/>
                <Route path="detail"   element={<Detail/>}/>
                <Route path="*"  element={<Page404/>}/>
            </Route>
            <Route path="/admin">
                <Route path="posts" element={<AdominPost/>}/>
                <Route path="edit" element={<AdominEdit/>}/>
                <Route path="*" element={<Page404/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
        </Routes>

    );
};

export default Router;