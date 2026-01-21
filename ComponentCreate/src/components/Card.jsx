import React, { useState } from 'react'

const Card = ({title="content title", content=" "}) => {
  // console.log(title+" "+content);
  const [update, setUpdate]=useState(false);
  return (
    <>
      <div className="h-fit bg-gray-800 rounded-2xl border-gray-500 p-4 shadow-sm hover:shadow-xl border transition-all duration-300 ">
        <h2 className="font-bold text-2xl m-1 line-clamp-1">{title}</h2>

        <p className="mt-4 py-1 text-gray-400 line-clamp-4">{content}</p>
          {/* OPERATIONAL BUTTONS FOR READ MORE, DELETE AND UPDATE */}
        <div className="mt-2 flex justify-between items-center">
          <button className="mt-1 py-1 cursor-pointer hover:text-neutral-400 transition-all duration-300">
            Read more
          </button>
          <div>
            <button className="mr-2 bg-green-600 py-1 px-2 rounded-l rounded-r-sm hover:bg-green-700">
              EDIT
            </button>
            <button className="bg-red-600 p-1 rounded-l rounded-r-sm hover:bg-red-700">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card