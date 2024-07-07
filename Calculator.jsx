import React, { useEffect, useState } from 'react'

export default function Calculator() {
    const [sumSting,setSumString]=useState('');
    document.addEventListener('keyup',(e)=>{
        if(e.key=='Enter'){
            setSumString(eval(sumSting));
        }
    })
    function check(data1) {
        let data=data1.target.innerText;
        
            if(data=='AC'){
            setSumString('');
           }else if(data=='='){
            setSumString(eval(sumSting));
            }else if(data=='+/-'){
                setSumString(-(sumSting))
            }else if(data=='%'){
                console.log(sumSting+"/"+100)
                setSumString(eval(sumSting+"/"+100))
            }
           else{
            setSumString(sumSting+data)
          
           }
       } 
  return (
    <>
    <div className='w-[400px] bg-[#444749] mx-auto h-[450] mt-[10%]  rounded-2xl overflow-hidden backdrop-blur-sm calc'>
        <div className='bg-transparent w-full'>
            <input type="text" name="" id="" className='bg-transparent w-full p-6 text-[35px] text-white mt-3 text-right ' value={sumSting} onChange={(e)=>{
               setSumString(e.target.value);
            }}
                />
           
        </div>
        <div className='flex gap-[1px] mt-[1px]'>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >AC</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >+/-</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >%</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#FF9E0B]' >/</div>
        </div>
        <div className='flex gap-[1px] mt-[1px]'>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >7</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >8</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >9</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#FF9E0B]' >*</div>
        </div>
        <div className='flex gap-[1px] mt-[1px]'>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >4</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >5</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >6</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#FF9E0B]' >-</div>
        </div>
        <div className='flex gap-[1px] mt-[1px]'>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >1</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >2</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >3</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#FF9E0B]' >+</div>
        </div>
        <div className='flex gap-[1px] mt-[1px] '>
        <div onClick={(e)=>{check(e)}} className='w-[50%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >0</div>

        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#555859]' >.</div>
        <div onClick={(e)=>{check(e)}} className='w-[25%] h-[70px] active:scale-95 flex items-center justify-center text-white font-bold cursor-pointer  bg-[#FF9E0B]' >=</div>
        </div>
    </div>
    
    </>
  )
}
