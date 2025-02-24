import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../../assets/LibroMate-logo.png';
import { icons } from '../../constants/icons.ts';

interface SidebarProps {
  currentRoute: string; // Define the prop for the current route
}

function Sidebar({ currentRoute }: SidebarProps) {
  // Determine the active button based on the current route
  const getActiveButton = () => {
    if (currentRoute === '/') return 'dashboard';
    if (currentRoute === '/books') return 'books';
    if (currentRoute === '/add-book') return 'add-book';
    if (currentRoute.startsWith('/edit-book')) return 'edit-book';
    if (currentRoute.startsWith('/view-book')) return 'view-book';
    return '';
  };

  const activeButton = getActiveButton();

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <div className="flex justify-center items-center py-5">
              <img src={logo} alt="" className="w-45" />
            </div>

            <li>
              <Link
                to="/"
                style={{ backgroundColor: activeButton === 'dashboard' ? 'var(--primary-color)' : '' }}
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 
                  }`}
              >
                <img
                  src={activeButton === 'dashboard' ? icons.dashboardW : icons.dashboardBl}
                  alt="dashboard icon"
                  className="w-6"
                />
                <span className={`ms-3 ${activeButton === 'dashboard' ? 'text-white' : ''}`}>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                style={{ backgroundColor: activeButton === 'books' ? 'var(--primary-color)' : '' }}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
              >
                <img src={activeButton === 'books' ? icons.booksW : icons.booksBl} alt="book icon" className="w-6" />
                <span className={`ms-3 ${activeButton === 'books' ? 'text-white' : ''}`}>Manage Books</span>
              </Link>
            </li>
            <li>
              <Link
                to="/add-book"
                style={{ backgroundColor: activeButton === 'add-book' ? 'var(--primary-color)' : '' }}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <img src={activeButton === 'add-book' ? icons.addBookW : icons.addBookBl} alt="add book icon" className="w-6" />
                <span className={`ms-3 ${activeButton === 'add-book' ? 'text-white' : ''}`}>Add a book</span>
              </Link>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                {/* <Link
                to="/help"
                style={{ backgroundColor: activeButton === 'help' ? 'var(--primary-color)' : '' }}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              > */}
                <img src={icons.helpBl} alt="settings icon" className="w-6" />
                <span className="flex-1 ms-3 color-[--primary-color]" style={{ color: 'var(--primary-color)' }}>Help and support</span>
                {/* </Link> */}
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;