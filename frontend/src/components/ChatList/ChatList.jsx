import React from 'react'
import './ChatList.css'
import { Link } from 'react-router-dom'
import './ChatList.css';

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className='title'>DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore LAMA AI</Link>
      <Link to="/">Contact</Link>
      <hr/>
      <div className='list'>
        <Link to="/dashboard/chats/:id">My Chat </Link>
        <Link to="/dashboard/chats/:id">My Chat </Link>
        <Link to="/dashboard/chats/:id">My Chat </Link>
        <Link to="/dashboard/chats/:id">My Chat </Link>
        <Link to="/dashboard/chats/:id">My Chat </Link>
      </div>
      <hr/>
    </div>
  )
}

export default ChatList