import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function Header() {
  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]
  return (
    <div className="text-white">
      <Popover>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-between"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link href="/">
                  <h1
                    style={{ color: '#7462E1' }}
                    className="px-3 cursor-pointer py-3 text-center text-xl font-bold sm:text-2xl "
                  >
                    Abdul Basit
                  </h1>
                </Link>

                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-600 hover:bg-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden cursor-pointer md:ml-10 md:flex md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <p className="font-bold text-gray-400 hover:border-b-2  active:border-b-2 active:border-indigo-500  sm:transition sm:duration-300 sm:hover:border-indigo-500">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-gray-800  shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div></div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-700 p-2 text-gray-500 hover:bg-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-900">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3 ">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <p className="block rounded-md px-3 py-2 text-base font-bold text-white  hover:bg-gray-900">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Header
