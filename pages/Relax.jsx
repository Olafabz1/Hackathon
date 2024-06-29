import React from "react";
import './Relax.css'



function Relax() {
  return (
   <>
     
     <div className=" tab mt-10 sm:w-3/6 md:w-4/6 l:w-screen">    
      <div className="  text-center" >
         <h2 className="text-3xl font-extrabold">"Relax"</h2>
         <p className="mt-5 text-base">Enjoy cup of tea, blink your eyes,read and view pages of a book or magazine, take a nap , and write a journal</p>
      </div>

      <div className="image">
         <img className="w-5/6 ml-10" src="./Frame 35.png" alt="Frame" />
        </div>

      <div className="relax">
         <img src="./Group 31.png" alt="Group" />
         <p>‘Your mind will answer most questions if you learn to relax’ and wait for answer .</p>
          <img className="w-68" src="./Group 31.png" alt="Group" />
      </div>
       
       
     </div>
   </>
  )
}
export default Relax;