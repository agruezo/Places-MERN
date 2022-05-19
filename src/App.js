import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './user/pages/User';
import NewPlace from './place/pages/NewPlace';
import UserPlace from './place/pages/UserPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
    return (
        <BrowserRouter>
            <MainNavigation />
            <main>
                <Routes>
                    <Route element={<User />} path="/" />
                    <Route element={<UserPlace />} path="/:userId/places" />
                    <Route element={<NewPlace />} path="/places/new" />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
