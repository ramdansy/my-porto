import React from "react";

export default function Cover() {
  return (
    <section className="h-screen px-4 pt-24 mx-auto ">
      <div className="container flex flex-wrap w-full h-full ">
        <div className="w-full h-auto self-center px-4 text-white ">
          <h1 className="text-2xl font-semibold">
            Hello, I'm <br />
          </h1>
          <h1 className="text-yellowPrimary-500 text-4xl font-bold mt-2">
            Ramdan Syaripudin
          </h1>
          <p className="my-6 text-lg text-gray-300">
            <span className="text-yellowPrimary-500 text-bold">
              UI/UX Designer{" "}
            </span>
            Who Love to Create Something Clean and Simple Design.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="bg-yellowPrimary-500 text-solid-black px-6 py-3 rounded-full text-center text-base font-semibold hover:opacity-60 transition duration-300 ease-in-out lg:mt-0"
            >
              EMAIL ME
            </a>
          </div>
        </div>
        <div className="w-full h-auto self-end ">
          <div className=" relative mt-0">
            <img
              src={require("../../assets/img/photo.png")}
              alt="profile"
              className="max-h-96 max-w-full mx-auto"
            />
            <span className="absolute mx-auto w-full bottom-0 -z-10 flex justify-center">
              <div className="h-80 w-80 bg-gradient-to-b from-greySecond-500 to-solid-black rounded-full"></div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
