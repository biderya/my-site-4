import Image from "next/image";
import React, { useState } from "react";

function Nuur8() {
  return (
    <>
      <div className="space-y-20 pt-20 text-center container w-1/2 ">
        <h1 className="">
          {`"`}Easy to use, fair pricing,
          <span className=" text-blue-500">quality</span> workmanship &
          guarantees! What{`'`}s not to love?{`"`}
        </h1>
        <p>Brian Wilson, Realtor, eXp Realty</p>
      </div>
      <div>
        <Image
          src={"/footer-mask.webp"}
          alt="Picture of the author"
          width={1900}
          height={200}
          layout={'responsive'}
        />
        <div className=" top-0 bg-[#3a66ff]">
          <div className="container p-32 my-0">
            <h1 className="text-white flex flex-col text-7xl py-10">
              Kick the stress out of
              <span className="text-black">home repairs</span>
            </h1>
            <div className="">
              <button className="bg-[#1A2A55] h-16 rounded-full p-4 px-16 text-white font-bold hover:bg-white hover:text-black overflow-hidden  ">
                <div className="transform hover:-translate-y-16 transition duration-500 ease-in-out flex flex-col">
                  <span className="">Get a free estimate</span>
                  <span className=" pt-10">Get a free estimate</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nuur8;
