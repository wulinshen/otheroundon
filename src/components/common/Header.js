import React from 'react'
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/"> Home </IndexLink>
            |
            <Link to="/about"> About </Link>
            |
            <Link to="/googlemap"> GoolgeMap </Link>
        </nav>
    )
}

export default Header