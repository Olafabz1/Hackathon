import React from "react";
import './Mindfulness.css'




function Mindfulness() {
  return (
   <>
     
     <div className="mind-tab mt-10 sm:w-3/6 md:w-4/6 ">    
      <div className="text-center" >
         <h2 className="text-3xl font-extrabold">"Mindfulness"</h2>
      </div>

      <div className="mindfulness block md:flex lg:flex">
         <div className="w-80 text-center">
            <p>Mindfulness, the practice of focusing on the present moment without judgment, is the foundation of Take A Break approach. By becoming more aware of your thoughts and feelings, you can make conscious choices about your habits.</p>
         </div>
         <img className="ml-10 md:mt-8 mb-8 mx-auto" src="./image 8.png" alt="Frame" />
        </div>
        

        <div className="guides mt-10 sm:w-5/6 md:w-4/6 l: mx-auto my-auto ">
          <p className="text-center mt-60 w-5/6 ml-5 md:mt-0 w-6/12 ml:0 lg::mt-0 w-6/12 ml:0">Take A Break provides tools like guided meditations to cultivate this mindfulness, helping you integrate healthy habits into your life in a sustainable way.</p>
          <br/>

          <div className="section block md:flex lg:flex">
            <section className="ml-20 md:ml-0 lg:ml-0">
               <h5 className="text-l font-bold text-center mb-2">Focus on your breath</h5>
               <img  src="./image 10.png" alt="Breath" />
               <p>This is a simple yet effective way to anchor yourself in the present moment. Find a quiet spot, close your eyes if comfortable, and pay attention to your breath</p>
            </section>

             <section className="ml-20 md:ml-0 lg:ml-0">
             <h5 className="text-l font-bold text-center spa mb-2">Engage your senses</h5>
             <img src="./image 11.png" alt="Breath" />
             <p>Take a few minutes to appreciate your surroundings.Notice the sights,sounds, smells, textures,tastes around you and savor a cup of tea,</p>
            </section>
         </div>

         <div className="movement ml-10 md:ml-0">
           <h5 className="text-l text font-bold mb-2 md:text-center mt-5 w-6/12 ml-20">Mindful movement</h5>
           <img className="md:ml-60" src="./image 12.png" alt="movement" />
           <p className="mx-auto max-w-screen-lg ">Go for a short walk and focus on the feeling of your feet hitting the ground. Stretch your body gently, paying attention to how each movement feels.</p>
         </div>
       </div>
     </div>
   </>
  )
}
export default Mindfulness;