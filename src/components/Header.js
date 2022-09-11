import React from "react";

export default function header() {
  const menus = ["Home", "Project", "Contact"];

  return (
    <header className="bg-transparent absolute top-0 left-0 mx-auto w-full z-20">
      <div className="container bg-solid-black relative z-20">
        <div className="px-6 py-4 md:px12 lg:container lg:px-6">
          <div className="flex items-center justify-between">
            <div className="relative z-20">
              <a href="/" className="font-heebo text-2xl font-black text-white">
                RAMDAN
              </a>
            </div>
            <div className="flex item-center justify-end ">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer hidden"
              />
              <label
                for="hamburger"
                className="peer-checked:hamburger block relative z-20 p-2 cursor-pointer lg:hidden "
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                />
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                />
              </label>
              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-5rem)] translate-x-[-100%] bg-greySecond-500 border-r border-black shadow-xl transition duration-300 lg:bg-transparent lg:border-l-0 lg:w-auto lg:static lg:translate-x-0">
                <div className="flex flex-col justify-between h-full lg:flex-row lg:items-center">
                  <ul className="px-8 pt-32 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                    {menus.map((val, index) => (
                      <li>
                        <a
                          href="/"
                          className="group relative text-white hover:text-yellowPrimary-500"
                        >
                          <span className="text-base">{val}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="py-8 px-8 lg:py-0 lg:px-0">
                    <div className="m-auto h-0.5 w-full rounded bg-white opacity-10 transition duration-300 lg:invisible" />
                    <a
                      href="/"
                      className="block relative bg-yellowPrimary-500 mt-8 px-6 py-3 rounded-full text-center text-base font-semibold lg:mt-0"
                    >
                      Email Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
