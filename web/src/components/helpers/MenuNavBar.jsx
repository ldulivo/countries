import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText } from 'reactstrap'

const MenuNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar
                color="primary"
                container="sm"
                expand="sm"
                fixed="top"
                dark
            >
                <Link to='/' className='navbar-brand' onClick={() => setIsOpen(false)}>
                
                        Countries
                
                </Link>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse navbar isOpen={isOpen}>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                    <Link to='/list' className='nav-item' onClick={() => setIsOpen(false)}>
                        List all
                    </Link>
                    </NavItem>
                </Nav>
                <NavbarText>
                    dulivo.com
                </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MenuNavBar
