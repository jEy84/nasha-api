import React from "react";
import logo from "../assets/s75-31690.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


function Navbar() {
  const navigation = [
    { name: 'Home', to: '/', current: true },
    { name: 'Earth', to: '/earth', current: false },
    { name: 'Mars', to: '/mars', current: false },
    { name: 'About', to: '/about', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + query);
  }

  return (<>
    <Disclosure as="nav" className="sticky">
      {({ open }) => (
        <>
            <div className="mx-auto max-w-9xl py-1 ">
              <div class="relative flex h-13 items-center justify-between">

                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* <!-- Mobile menu button--> */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-mauve focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ml-3">
                    <img class="block  h-8 w-auto lg:hidden rounded-sm" src={logo} alt="..." />
                    <img class="hidden h-8 w-auto lg:block rounded-sm" src={logo} alt="..." />
                  </div>

                  <div class="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white font-medium tracking-wide' : 'text-gray-300  hover:bg-hovery hover:text-hoeverin font-medium tracking-wide',
                            'px-3 py-2 rounded-md text-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    {/* search input */}
                    <form onSubmit={submitHandler} className="flex">
                      <input onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                        type="text"
                        placeholder=" rover landing.."
                        className="h-8 ml-1 w-9/12 rounded-lg p-2 "
                        value={query}
                      />
                      <button className="ml-3 p-1 rounded-md bg-btnnss hover:text-russianviolet" type= "submit">
                           search
                      </button>
                    </form>
                    </div>

                  </div>
                </div>


              </div>

          </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      as="a"
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <div className="">
                  <form onSubmit={submitHandler}>
                      <input onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                        type="text"
                        placeholder=" rover landing.."
                        className="h-8 ml-1 w-1/2 rounded-lg"
                        value={query}
                      />
                      <button className="bg-blue-500 ml-3 p-1 rounded-lg" type="submit">
                        {/* <FiSearch className="h-8 hover:bg-indigo-300 rounded-2xl w-5 "/> */}
                        search

                      </button>
                    </form>
                  </div>
                </div>
              </Disclosure.Panel>
              </>
      )}
    </Disclosure>
    </>
  )}

            export default Navbar;
