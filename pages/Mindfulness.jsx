

import React from "react";
import './Mindfulness.css';

function Mindfulness() {
  return (
    <>
      <div className="mt-10 mx-auto sm:w-5/6 md:w-4/6 lg:w-3/4">
        <div className="text-center">
          <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Mindfulness</q>
        </div>

        <div className="block md:flex lg:flex w-full mx-auto mt-10">
          <div className="text-white text-center bg-blue-600 p-10 rounded-tl-custom rounded-bl-custom md:w-1/2 lg:w-[500px]font-be-vietnam-pro">
            <p className="text-base sm:text-lg md:text-[24px]">
              Mindfulness, the practice of focusing on the present moment without judgment, is the foundation of Take A Break approach. By becoming more aware of your thoughts and feelings, you can make conscious choices about your habits.
            </p>
          </div>
          <img className="w-full md:w-1/2 lg:w-[500px] mx-auto mt-5 md:mt-0" src="./image 8.png" alt="Mindfulness" />
        </div>

        <div className="mt-10">
          <div className="block md:flex lg:flex">
            <section className="mx-auto md:mx-0 lg:mx-0 mb-10 md:mb-0 lg:mb-0">
              <h5 className="text-[24px] sm:text-2xl md:text-[24px] text-center mb-2">Focus on your breath</h5>
              <img className="w-full md:w-[400px] h-[300px] mx-auto mt-8 " src="./image 10.png" alt="Breath" />
              <p className="text-[16px] sm:text-lg md:text-[16px] w-full md:w-[350px] mx-auto mt-2">
                This is a simple yet effective way to anchor yourself in the present moment. Find a quiet spot, close your eyes if comfortable, and pay attention to your breath.
              </p>
            </section>

            <section className="mx-auto md:ml-14 lg:ml-14 mb-10 md:mb-0 lg:mb-0">
              <h5 className="text-[24px] sm:text-xl md:text-[24px] text-center mb-2">Engage your senses</h5>
              <img className="w-full md:w-[400px] h-[300px] mx-auto mt-8 " src="./image 11.png" alt="Senses" />
              <p className="text-[16px] sm:text-lg md:text-[16px] w-full md:w-[350px] mx-auto mt-2">
                Take a few minutes to appreciate your surroundings. Notice the sights, sounds, smells, textures, tastes around you and savor a cup of tea.
              </p>
            </section>
          </div>

          <div className="h-auto mt-10">
            <h5 className="text-center text-[24px] sm:text-xl md:text-[24px]  font-be-vietnam-pro">Mindful movement</h5>
            <img className="w-full md:w-[400px] h-[300px] mx-auto mt-5" src="./image 12.png" alt="Movement" />
            <p className="text-[16px] sm:text-lg md:text-[16px] w-full md:w-[350px] mx-auto mt-5">
              Go for a short walk and focus on the feeling of your feet hitting the ground. Stretch your body gently, paying attention to how each movement feels.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mindfulness;
