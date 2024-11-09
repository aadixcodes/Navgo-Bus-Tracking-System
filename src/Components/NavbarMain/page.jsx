// // NavbarMain.jsx
// import React, { useState } from 'react';
// import styles from './navbarmain.module.css'
// import { FaSearch, FaUser, FaBus } from "react-icons/fa";
// import Link from "next/link";
// import Sidebar from '../Sidebar/page';

// const NavbarMain = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <div className={styles.headerContainer}>
//         <div className={styles.topHeader}>
//           <div className={styles.profileLogoWrapper}>
//             <div className={styles.profile} onClick={toggleSidebar}>
//               <FaUser />
//             </div>
//             <div className={styles.logo}>
//               <h1>NAVGO</h1>
//             </div>
//           </div>
//         </div>
//         <Link href="/SearchPage">
//           <div className={styles.searchBar}>
//             <FaSearch />
//             <span>Enter destination or bus number</span>
//           </div>
//         </Link>
//       </div>
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//     </>
//   );
// };

// export default NavbarMain;

import React, { useState } from 'react';
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import Link from "next/link";
import Sidebar from '../Sidebar/page';

const NavbarMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-lg">
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Menu Button */}
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full text-black hover:bg-yellow-300 transition-colors"
              >
                <FaBars size={20} />
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-black">
                Navgo
              </h1>
            </div>

            {/* Right side - Search Bar and Profile Icon */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search bus and route no."
                  className="w-48 md:w-64 h-9 pl-9 pr-4 rounded-full text-sm 
                    border-2 border-yellow-200
                    focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors">
                <FaUser size={20} className="text-black" />
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="sm:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bus and route no."
                className="w-full h-9 pl-9 pr-4 rounded-full text-sm
                  border-2 border-yellow-200
                  focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default NavbarMain;