// Timeline.tsx
import React from "react";
import { timelineData } from "../../public/datalist";

const Timeline = () => {
  return (
    <div className="px-4 sm:px-4 md:px-24 lg:px-40">
      <div className="w-3/4 mx-auto hidden sm:hidden  lg:block">
        {timelineData.map((item, index) => (
          <div className="flex flex-row w-full" key={item.id}>
            {index % 2 === 0 ? (
              // Left column
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{item.title}</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">{item.content}</div>
                </div>
              </div>
            ) : (
              // Right column
              <div className="w-2/5 px-2 py-10"></div>
            )}
            {/* Line column */}
            <div className="w-1/5  flex justify-center">
              <div className="relative flex h-full w-1 bg-accentsme items-center justify-center">
                <div className="absolute flex flex-col justify-center h-20 w-20 rounded-full border-4 border-accentsme leading-none text-center z-10 bg-white font-thin">
                  <div>{item.step}</div>
                </div>
              </div>
            </div>
            {index % 2 !== 0 ? (
              // Left column
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">{item.title}</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">{item.content}</div>
                </div>
              </div>
            ) : (
              // Right column
              <div className="w-2/5 px-2 py-10"></div>
            )}
          </div>
        ))}
      </div>
      {/* small timeline */}
      <div className="lg:hidden sm:block mb-24">
        <section>
          <div className="container max-w-5xl px-4  mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-lef mb-8 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md ">
                  <p className="text-paralight text-[16px] text-left pl-8">
                    Follow these steps one after the other, and you'll be good
                    to go.
                  </p>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 ">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]  ${
                        index % 2 === 0
                          ? ""
                          : "sm:before:left-auto sm:before:right-[-35px]"
                      }`}
                    >
                      <h3 className="text-[16px] font-semibold uppercase text-accentsme">
                        {item.title}
                      </h3>
                      <time className="text-[14px]  uppercase text-paragrapgh">
                        {item.step}
                      </time>
                      <p className="mt-3">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
