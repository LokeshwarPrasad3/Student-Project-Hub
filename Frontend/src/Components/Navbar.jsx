import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MessageIcon from '@mui/icons-material/Message';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';

// include css of navbar
import '../CSS/Navbar.css';

const Navbar = () => {

    // toggle navbar 
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }


    // need state : when mobile size then convert menu icons to texts
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

    useEffect(() => {
        // Update the isMobile state when the window is resized
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1100);
        };
        // when window resize then call handleResize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {/* navbar container */}
            <nav id="navbar" className='nav_container  text-white flex items-center justify-between px-60 h-16 bg-slate-800 min-w-full' >
                {/* header section left part */}
                <div className="header flex items-center gap-7">
                    <Tooltip title="Go-to-Profile " arrow>
                        <a href="/profile" className="menu_link p-[.1rem] flex rounded-full custom-transtion hover:bg-slate-700 shadow-lg shadow-blue-700">
                            <img src="./Images/lokeshwar.jpg" alt="user" className='w-9 h-9 rounded-full' srcSet="" />
                        </a>
                    </Tooltip>
                    <a href="/profile" className='user_name font-bree text-2xl hover:opacity-90 custom-transtion ' >Lokeshwar Prasad</a>
                </div>
                {/* right part */}
                <ul
                    style={{ left: showMenu ? '0%' : '100%' }}
                    className='menu_links flex items-center justify-center gap-2' >
                    <li>
                        <a href="/" className="menu_link custom-nav-link ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile ? (
                                    <>
                                        <Tooltip title="New Project" arrow className='custom-tooltip'>
                                            <CloudUploadIcon id="upload_project" />
                                        </Tooltip>
                                    </>
                                ) : (
                                    <h3 className='custom-menu-link' >Upload Project</h3>
                                )
                            }

                        </a>
                    </li>
                    <li>
                        {/* <h2 htmlFor="upload_project cursor-pointer ">PROJECT</h2> */}
                        <a href="/" className="menu_link flex items-center justify-center hover:bg-slate-700 px-3 py-2 custom-transtion hover:opacity-90 rounded-2xl ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile ? (
                                    <>
                                        <Tooltip title="Notification" arrow>
                                            <NotificationsIcon className='' />
                                        </Tooltip>
                                    </>
                                ) : (
                                    <h3 className='custom-menu-link' >Notifications</h3>
                                )
                            }

                        </a>
                    </li>
                    <li>
                        <a href="/" className="menu_link flex items-center justify-center hover:bg-slate-700 px-3 py-2 custom-transtion hover:opacity-90 rounded-2xl ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile ? (
                                    <>
                                        <Tooltip title="Message" arrow>
                                            <MessageIcon className='' />
                                        </Tooltip>
                                    </>
                                ) : (
                                    <h3 className='custom-menu-link' >My Messages</h3>
                                )
                            }

                        </a>
                    </li>
                </ul>

                {/* menu button which is visible when mobile screen */}
                <a href="/" className="menu_bar rounded-md flex custom-transtion ">

                    <MenuIcon
                        onClick={toggleMenu}
                        className="hover:opacity-80" style={{ fontSize: '2.5rem', display: showMenu ? 'none' : 'block' }} />
                    <CloseIcon
                        onClick={toggleMenu}
                        className="hover:opacity-80" style={{ fontSize: '2.5rem', display: showMenu ? 'block' : 'none' }} />

                </a>
            </nav>
        </>
    )
}

export default Navbar
