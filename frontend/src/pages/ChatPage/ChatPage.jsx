import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {IKImage} from "imagekitio-react";
import Markdown from "react-markdown";
import './ChatPage.css';
import NewPromt from '../../components/newPromt/NewPromt';
import ChatList from '../../components/ChatList/ChatList';
const ChatPage = () => {
  // const path = useLocation().pathname;
  // const chatId = path.split("/").pop();

  // const {isPending,error,data} = useQuery({
  //   queryKey : ["chat",chatId],
  //   queryFn: () => 
  //     fetch(`${import.meta.env.VITE_API_URL}/api/chat/${chatId}`,{
  //       credentials : "include",
  //     }).then((res)=>res.json()),
  // });


  
  return (
    <div className='chatPage'>

      <div className='wrapper'>

        <div className='chat'>
          {/* {isPending ? "Loading..." : error ? "something went wrong" : data?.history?.map((message,i)=>(
            <>
             {message.img && (<IKImage urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT} path={message.img} height="300" width="400" transformation={[{height:300,width:400}]} loading="lazy" lqip={{active:true,quality:20}} /> )}

             <div className={message.role==="user" ? "message user" : "message"} key={i}>
                 <Markdown>{message.parts[0].text}</Markdown>
             </div>
            </>
          ))}

          {data && <NewPrompt data={data} />}
       */}
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <div className='message user '>Message from the user</div>
          <div className='message'>Message from AI</div>
          <NewPromt/>
      
        </div>
      </div>
    </div>
  )
}

export default ChatPage

