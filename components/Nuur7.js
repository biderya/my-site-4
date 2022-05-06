import React from "react";
import { TabGroup } from "@statikly/funk";
import Image from "next/dist/client/image";

function Nuur7() {
  return (
    <>
      <div className="container py-20">
        <div className="flex justify-center ">
          <h1 className="text-center w-2/3 py-10">
            Designed to help you move forward with ease
          </h1>
        </div>
        <div className="px-20">
          <div className="flex flex-col justify-center items-center">
            <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
              <TabGroup.TabList className="grid grid-cols-4 w-full">
                <TabGroup.Tab
                  index={0}
                  className="h-12 px-12 transition-colors duration-350 border-b-2 border-gray-400 mx-4"
                  activeClassName="text-black border-b-4 border-gray-800 "
                  inactiveClassName="text-black"
                >
                  Sellers
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={1}
                  className="h-12 px-12 transition-colors duration-350 border-b-2 border-gray-400 mx-4"
                  activeClassName="text-black border-b-4 border-gray-800"
                  inactiveClassName="text-black"
                >
                  Buyers
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={2}
                  className="h-12 px-12 transition-colors duration-350 border-b-2 border-gray-400 mx-4"
                  activeClassName=" text-black border-b-4 border-gray-800"
                  inactiveClassName="text-black"
                >
                  Realtors
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={3}
                  className="h-12 px-12 transition-colors duration-350 border-b-2 border-gray-400 mx-4"
                  activeClassName="text-black border-b-4 border-gray-800 duration-350"
                  inactiveClassName="text-black"
                >
                  Enterprise
                </TabGroup.Tab>
              </TabGroup.TabList>
              <TabGroup.TabPanel
                index={0}
                className="p-12 transition-all transform h-48"
                activeClassName="opacity-100 duration-500 translate-x-0"
                inactiveClassName="absolute opacity-0 -translate-x-2"
              >
                <div className="grid md:grid-cols-2">
                  <div className="py-10 pl-10">
                    <h2>Sellers</h2>
                    <p className="w-1/2 py-10">
                      Close without the hassle with our fast estimates, quality
                      repairs, and deferred payment options.
                    </p>
                    <button className=" border-b-2 border-blue-800">
                      learn more
                    </button>
                  </div>
                  <Image
                    src={"/home-tabs-2.webp"}
                    alt="Picture of the author"
                    width={500}
                    height={350}
                  />
                </div>
              </TabGroup.TabPanel>
              <TabGroup.TabPanel
                index={1}
                className="p-12 transition-all transform h-48 flex flex-col"
                activeClassName="opacity-100 duration-500 translate-x-0"
                inactiveClassName="absolute opacity-0 -translate-x-2"
              >
                <div className="grid md:grid-cols-2">
                  <div className="py-10 pl-10">
                    <h2>Sellers</h2>
                    <p className="w-1/2 py-10">
                      Close without the hassle with our fast estimates, quality
                      repairs, and deferred payment options.
                    </p>
                    <button className=" border-b-2 border-blue-800">
                      learn more
                    </button>
                  </div>
                  <Image
                    src={"/home-tabs-2.webp"}
                    alt="Picture of the author"
                    width={500}
                    height={350}
                  />
                </div>
              </TabGroup.TabPanel>
              <TabGroup.TabPanel
                index={2}
                className="p-12 transition-all transform h-48"
                activeClassName="opacity-100 duration-500 translate-x-0"
                inactiveClassName="absolute opacity-0 -translate-x-2"
              >
                <div className="grid md:grid-cols-2">
                  <div className="py-10 pl-10">
                    <h2>Sellers</h2>
                    <p className="w-1/2 py-10">
                      Close without the hassle with our fast estimates, quality
                      repairs, and deferred payment options.
                    </p>
                    <button className=" border-b-2 border-blue-800">
                      learn more
                    </button>
                  </div>
                  <Image
                    src={"/home-tabs-2.webp"}
                    alt="Picture of the author"
                    width={500}
                    height={350}
                  />
                </div>
              </TabGroup.TabPanel>
              <TabGroup.TabPanel
                index={3}
                className="p-12 transition-all transform h-48"
                activeClassName="opacity-100 duration-500 translate-x-0"
                inactiveClassName="absolute opacity-0 -translate-x-2"
              >
                <div className="grid md:grid-cols-2">
                  <div className="py-10 pl-10">
                    <h2>Sellers</h2>
                    <p className="w-1/2 py-10">
                      Close without the hassle with our fast estimates, quality
                      repairs, and deferred payment options.
                    </p>
                    <button className=" border-b-2 border-blue-800">
                      learn more
                    </button>
                  </div>
                  <Image
                    src={"/home-tabs-2.webp"}
                    alt="Picture of the author"
                    width={500}
                    height={350}
                  />
                </div>
              </TabGroup.TabPanel>
            </TabGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nuur7;
