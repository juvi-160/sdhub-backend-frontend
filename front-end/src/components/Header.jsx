import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='flex gap-4 p-4 bg-gray-200 justify-center'>
        <Link to='/'>All Users</Link>
        <Link to='/add'>Add User</Link>
        <Link to='/update'>Update User</Link>
    </div>
  )
}

export default Header