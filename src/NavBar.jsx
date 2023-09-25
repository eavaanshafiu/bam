import React from 'react';
import logo from './Assets/stone-logo.svg'

const NavBar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <nav className="border-b bg-sidebar">
            <div className="container relative max-w-screen-lg mx-auto flex justify-between h-14">
                {/* Brand */}
                <a href="#" className="flex items-center cursor-pointer hover:bg-purple-50 px-2 ml-3">
                    {/* Logo */}
                    <div className="rounded bg-white text-white font-bold w-10 h-10 flex justify-center text-3xl pt-0.5">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 124.72 124.72"
                            style={{ enableBackground: 'new 0 0 124.72 124.72' }}
                            xmlSpace="preserve"
                        >
                            <style type="text/css">{`.st0{fill:#4E738A;}`}</style>
                            <path className="st0" d="M121.45,62.09c6.62-10.42-0.67-27.22-13.53-29.58c-5.82-1.61-12.51-0.73-18.04,1.31
	c-8.53,3.06-14.3,7.28-22.69,8.13c-6.39,0.72-12.43-2.58-15.35-8.85C46.91,22.77,52.78,9.85,63.2,6.8c1.41,1.59,2.49,3.44,3.06,5.46
	c2.29,7.32-0.66,16.98,7.83,21.49c7.44,3.85,16.35-2.58,17.85-10.22c0.96-4.23,0.02-8.36-1.72-12.04C85.55,2,73.22-1.11,63.81,2.54
	c-0.59,0.22-1.15,0.48-1.72,0.74C51.67-3.34,34.88,3.95,32.52,16.8c-1.61,5.82-0.73,12.51,1.31,18.04
	c3.06,8.53,7.28,14.3,8.13,22.69c0.72,6.39-2.58,12.43-8.85,15.35C22.77,77.81,9.85,71.94,6.8,61.52c1.59-1.41,3.44-2.49,5.46-3.06
	c7.32-2.29,16.98,0.66,21.49-7.83c3.85-7.44-2.58-16.35-10.22-17.85c-4.23-0.96-8.36-0.02-12.04,1.72C2,39.17-1.11,51.51,2.54,60.91
	c0.22,0.59,0.48,1.15,0.74,1.72C-3.34,73.05,3.95,89.85,16.8,92.2c5.82,1.61,12.51,0.73,18.04-1.31c8.53-3.06,14.3-7.28,22.69-8.13
	c6.39-0.72,12.43,2.58,15.35,8.85c4.93,10.33-0.94,23.25-11.37,26.31c-1.41-1.59-2.49-3.44-3.06-5.46
	c-2.29-7.32,0.66-16.98-7.83-21.49c-7.44-3.85-16.35,2.58-17.85,10.22c-0.96,4.23-0.02,8.36,1.72,12.04
	c4.67,9.47,17.01,12.59,26.41,8.94c0.59-0.22,1.15-0.48,1.72-0.74c10.42,6.62,27.22-0.67,29.57-13.53
	c1.61-5.82,0.73-12.51-1.31-18.04c-3.06-8.53-7.28-14.3-8.13-22.69c-0.72-6.39,2.58-12.43,8.85-15.35
	c10.33-4.93,23.25,0.94,26.31,11.37c-1.59,1.41-3.44,2.49-5.46,3.06c-7.32,2.29-16.98-0.66-21.49,7.83
	c-3.85,7.44,2.58,16.35,10.22,17.85c4.23,0.96,8.36,0.02,12.04-1.72c9.47-4.67,12.59-17.01,8.94-26.41
	C121.97,63.22,121.71,62.66,121.45,62.09z M68.93,6.4c5.01,0.1,10.33,2.26,13.42,6.18c2.18,2.69,3.45,6.75,2.87,10.08
	c-0.58,3.96-4.64,8.25-8.86,7.05c-6.96-2.82-4.52-12.14-7.45-18.05c-0.73-1.9-1.83-3.63-3.18-5.11C66.76,6.4,67.83,6.34,68.93,6.4z
	 M6.4,55.8c0.1-5.01,2.26-10.33,6.18-13.42c2.69-2.18,6.75-3.45,10.08-2.87c3.96,0.58,8.25,4.64,7.05,8.86
	c-2.82,6.96-12.14,4.52-18.05,7.45c-1.9,0.73-3.63,1.83-5.11,3.18C6.4,57.96,6.34,56.9,6.4,55.8z M55.8,118.32
	c-5.01-0.1-10.33-2.26-13.42-6.18c-2.18-2.69-3.45-6.75-2.87-10.08c0.58-3.96,4.64-8.25,8.86-7.05c6.96,2.82,4.52,12.14,7.45,18.05
	c0.73,1.9,1.83,3.63,3.18,5.11C57.96,118.32,56.9,118.38,55.8,118.32z M90.5,48.79c-11.39,3.22-17.6,13.49-16.05,25.11
	c1.11,9.58,7.53,17.35,10.1,26.2c1.98,6.53,0.8,14.55-5.51,18.33c-4.02,2.69-9.56,3.41-14.09,1.7c9.56-6.17,14.07-18.7,10.98-29.63
	c-3.22-11.39-13.49-17.6-25.11-16.05c-9.58,1.11-17.35,7.53-26.2,10.1c-6.53,1.98-14.55,0.8-18.33-5.51
	c-2.69-4.02-3.41-9.56-1.7-14.09c6.17,9.56,18.7,14.06,29.63,10.97c11.39-3.22,17.6-13.49,16.05-25.11
	c-1.11-9.58-7.53-17.35-10.1-26.2c-1.98-6.53-0.8-14.55,5.51-18.33c4.02-2.69,9.56-3.41,14.09-1.7
	c-9.56,6.17-14.06,18.7-10.97,29.63c3.22,11.39,13.49,17.6,25.11,16.05c9.58-1.11,17.35-7.53,26.2-10.1
	c6.53-1.98,14.55-0.8,18.33,5.51c2.69,4.02,3.41,9.56,1.7,14.09C113.96,50.21,101.43,45.7,90.5,48.79z M118.32,68.93
	c-0.1,5.01-2.26,10.33-6.18,13.42c-2.69,2.18-6.75,3.45-10.08,2.87c-3.96-0.58-8.25-4.64-7.05-8.86c2.82-6.96,12.14-4.52,18.05-7.45
	c1.9-0.73,3.63-1.83,5.11-3.18C118.32,66.76,118.38,67.83,118.32,68.93z"/>
                        </svg>
                    </div>
                    <div className="text-gray-700 font-semibold ml-2">Brand Asset Manager</div>
                </a>
                {/* Navbar Toggle Button */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="block md:hidden text-gray-700 p-2 rounded hover:border focus:border focus:bg-gray-100 my-2 mr-5"
                    type="button"
                    aria-controls="navbar-main"
                    aria-expanded={showMenu}
                    aria-label="Toggle navigation"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* Nav Links */}
                <ul className={`md:flex text-gray-700 text-base mr-3 origin-top z-10 ${showMenu ? 'block absolute top-14 border-b bg-white w-full p-2' : 'hidden'}`} id="navbar-main">
                    <li className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${showMenu && 'py-1'}`}>
                        <a href="#"></a>
                    </li>
                    <li className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${showMenu && 'py-1'}`}>
                        <a href="#">Vacancy</a>
                    </li>
                    <li className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${showMenu && 'py-1'}`}>
                        <a href="#">Requirements</a>
                    </li>
                    <li className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${showMenu && 'py-1'}`}>
                        <a href="#">Social Media Post</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
