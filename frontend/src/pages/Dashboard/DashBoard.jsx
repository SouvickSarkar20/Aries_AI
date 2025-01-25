import React from 'react'
import {useMutation,useQueryClient} from "@tanstack/react-query";
import { MessageCircle,ChartNoAxesColumn,MessageCircleCode,SendHorizontal  } from 'lucide-react';
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

  // const queryClient = useQueryClient();

  // const navigate = useNavigate();

  // const mutation = useMutation({
  //   mutationFn : (text) => {
  //     return fetch(`${import.meta.env.VITE_API_URL}/api/chats`,{
  //       method : "POST",
  //       credentials : "include",
  //       headers : {
  //         "content-type" : "application/json"
  //       },
  //       body : JSON.stringify({text}),
  //     }).then((res)=>res.json());
  //   },
  //   onSuccess : (id) => {
  //     queryClient.invalidateQueries({queryKey : ["useChats"]});
  //     navigate(`/dashboard/chats/${id}`);
  //   }

  // })

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const text = e.target.text.value;
  //   if(!text) return;
  //   mutation.mutate(text);
  // };

  return (
    <div className='dashboardPage'>

      <div className='texts'>

        <div className='logo'>
          <span>LAMA AI</span>
        </div>

        <div className='options'>

          <div className='option'>
            <MessageCircle color='gray' size={16} />
            <span>create a new chat</span>
          </div>
 
          <div className='option'>
            <ChartNoAxesColumn color='gray' size={16} />
            <span>Analyze images</span>
          </div>

          <div className="option">
            <MessageCircleCode color='gray' size={16} />
            <span>Help me with my Code</span>
          </div>

        </div>
      </div>

      <div className='formContainer'>

        <form >
          <input type="text" name="text" placeholder='Ask me anything...' />
          <button>
             <SendHorizontal color='gray' size={16} />
          </button>
        </form>
         
      </div>
    </div>
  )
}

export default DashBoard