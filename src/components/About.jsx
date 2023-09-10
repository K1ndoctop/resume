import React from "react";

const About = () => {
  return (
    <div
      name="обо мне"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
    "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Обо мне</p>
        </div>
 
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          molestiae, magni eveniet accusantium aspernatur voluptatibus a tempora
          iusto quod. Ex voluptates dolorem est accusantium aut, vel facere at
          quidem adipisci praesentium officia voluptate provident earum
          voluptatibus non culpa veritatis? Harum ducimus nam hic optio vel.
          Sint veritatis dicta earum mollitia?
        </p>
        <br />
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          laborum minus molestias ratione fuga provident aliquid nobis illum
          autem libero dolores voluptate explicabo amet et ducimus quo enim
          quisquam repellat doloribus sit ullam voluptatem! Eos maiores animi
          aut possimus officiis. Voluptate cupiditate illum eligendi cum quia.
          Obcaecati, dicta? Recusandae, maiores?
        </p>
      </div>
    </div>
  );
};

export default About;
