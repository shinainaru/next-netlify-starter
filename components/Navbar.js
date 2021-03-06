import { useState } from "react"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"

export default function Navbar() {
  const [showNav, setShowNav] = useState(true)
  function handleToggle(e) {
    setShowNav(prevState => !prevState);
  }
  const hide = () => setshowNav(false);
  const show = () => setshowNav(true);
  const navigation = [
    { link: '/genres', text: 'Genres' },
    { link: '/', text: 'Home'},
    { link: '/search', text: 'Search' },
  ].sort(function(a, b){
    var nameA = a.text.toLowerCase(), nameB = b.text.toLowerCase();
    if (nameA < nameB)
      return -1;
    if (nameA > nameB)
      return 1;
    return 0;
  });

  const GenerateNav = ({ value }) => {
    return (
      <div class="hidden md:block">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          {navigation.map(nav => (
            <li key={nav.text}>
              <Link href={nav.link} passHref>
                <a class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800 dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" class="flex items-center">
            <img src="/logo.jpg" class="mr-3 h-6 sm:h-10" alt="Kinda SUS logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">I'am SUS</span>
          </a>
          <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={handleToggle}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
            <div class="w-full md:block md:w-auto" id="mobile-menu">
            {showNav ? <GenerateNav value={navigation} /> : <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {navigation.map(nav => (
                <li key={nav.text}>
                  <Link href={nav.link} passHref>
                    <a onClick={handleToggle}
                   class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                  {nav.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
            }
          </div>
        </div>
      </nav>
    </>
  )
}
