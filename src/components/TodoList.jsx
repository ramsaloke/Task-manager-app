/* eslint-disable react/prop-types */
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png'
 
 const TodoList = ({text ,id , isComplete, del, tog}) => {
   return (
     <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{tog(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-5'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through": ""}`}>
              {text}</p>
        </div>

        <div>
            <img onClick={()=>{del(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>
        </div>
     </div>
   )
 }
 
 export default TodoList