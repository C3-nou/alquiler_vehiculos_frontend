import React from 'react';
import { FaSuse } from "react-icons/fa"
import './header.css';
import { Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="rounded ml-2 mr-2 p-2">
                <Navbar.Brand href="#home">
                    <h3>Home</h3>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header;
