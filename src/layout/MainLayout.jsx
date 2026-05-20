
import Books from '../paiges/books/Books';
import Navbar from '../compunents/shared/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;