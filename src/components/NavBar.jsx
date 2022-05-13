import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='links'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/users' className='link'>Users</Link>
            <Link to='/quotes' className='link'>Quotes</Link>
        </div>
    )
}

export default NavBar
