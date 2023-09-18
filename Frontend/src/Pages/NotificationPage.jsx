import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
// used react-material components 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const CommentShow = ({ onClose }) => {

    // TEMPORARY data for render notification user image namd
    const [userNotificationData, setNotificationData] = useState([
        { id: 0, name: "Dushyant Das", img: './Images/dushyant.jpg' },
        { id: 1, name: "Lokeshwar Prasad", img: './Images/lokeshwar1.jpg' },
        { id: 2, name: "Takeshwar Janghel", img: './Images/takeshwar.jpg' },
        { id: 3, name: "Puran Verma", img: './Images/puranverma.jpg' },
        { id: 4, name: "Khilendra Kumar", img: './Images/khilendra.jpg' },
    ]);


    // Show login and create user when user toggle
    const [toggleMode, setToggleMode] = useState(true);

    //PreDefine Material-UI Component code to changing tabs of login and create user
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // Cetegories Notificatino and render that categories
    const renderCategories = () => {
        if (value === 0) {
            return (

                <>

                    <div className="comments_container  bg-slate-700 text-white rounded flex flex-col gap-[3px] font-overpass px-1 py-1 shadow-sm shadow-blue-100">

                        {
                            userNotificationData.map((user) => {
                                return (
                                    <React.Fragment key={user.id}>
                                        {/* indivisual box of comments */}
                                        <div className="comments_box bg-slate-800 rounded  w-[25rem] sm:w-[28rem] md:w-[30rem] lg:w-[32rem]  flex justify-between items-center px-2 py-1 ">
                                            <div className="profile_image flex items-center  gap-2">
                                                {/* profile image first */}
                                                <img src={user.img} className="h-8 w-8 rounded-full shadow-sm shadow-blue-400 " alt={user.name} />
                                                <h3 className='text-[0.9rem] font-500 opacity-90 font-no' >{user.name}</h3>
                                            </div>
                                            <div className="comment px-8 flex justify-center gap-4 items-center">
                                                <button className='text-[0.8rem] leading-4 opacity-90 rounded-sm shadow-sm shadow-blue-400 border-none hover:scale-105 active:scale-95 custom-transition bg-green-500 px-1 py-[1px] pt-[2px] text-black font-semibold' >Accept</button>
                                                <button className='text-[0.8rem] leading-4 opacity-90 rounded-sm shadow-sm shadow-blue-400 border-none hover:scale-105 active:scale-95 custom-transition bg-green-500 px-1 py-[1px] pt-[2px] text-black font-semibold' >Decline</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }


                    </div>

                </>
            );
        } else if (value === 1) {
            return (

                <>

                    <div className="comments_container  bg-slate-700 text-white rounded flex flex-col gap-[3px] font-overpass px-1 py-1 shadow-sm shadow-blue-100">

                        {
                            userNotificationData.map((user) => {
                                return (
                                    <React.Fragment key={user.id}>
                                        {/* indivisual box of comments */}
                                        <div className="comments_box bg-slate-800 rounded w-[25rem] sm:w-[28rem] md:w-[30rem] lg:w-[32rem]  px-2 py-1 ">
                                            <div className="profile_image flex items-center  gap-2">
                                                {/* profile image first */}
                                                <img src={user.img} className="h-8 w-8 rounded-full" alt="" />
                                                <h3 className='text-sm opacity-90 font-no' >{user.name}</h3>
                                            </div>
                                            <div className="comment pl-10 px-8 ">
                                                <h6 className='text-[0.8rem] leading- opacity-90 text-blue-100 font-thin ' >
                                                    Hello! {user.name} What are you doing?
                                                </h6>

                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                        {/* <div className="comments_box bg-slate-800 rounded max-w-lg px-2 py-1 ">
                            <div className="profile_image flex items-center  gap-2">
                                <img src="./Images/takeshwar.jpg" className="h-6 w-6 rounded-full" alt="" />
                                <h3 className='text-sm opacity-90 font-no' >Takeshwar Janghel</h3>
                            </div>
                            <div className="comment px-8 ">
                                <h6 className='text-[0.8rem] leading-4 opacity-90 font-thin ' >Lorem adipisicing elit. Facere accusamus earum ipsam nulla asperiores aspernatur quas vero </h6>
                            </div>
                        </div>  */}

                    </div>

                </>
            );
        } else if (value === 2) {
            return (

                <>

                    <div className="comments_container  bg-slate-700 text-white rounded flex flex-col gap-[3px] font-overpass px-1 py-1 shadow-sm shadow-blue-100">

                        {
                            userNotificationData.map((user) => {
                                return (
                                    <React.Fragment key={user.id}>
                                        {/* indivisual box of comments */}
                                        <div className="comments_box bg-slate-800 rounded  w-[25rem]   sm:w-[28rem] md:w-[30rem] lg:w-[32rem]  flex justify-between items-center px-2 py-1 ">
                                            <div className="profile_image flex items-center  gap-2">
                                                {/* profile image first */}
                                                <img src={user.img} className="h-8 w-8 rounded-full shadow-sm shadow-blue-400 " alt={user.name} />
                                                <h3 className='text-[0.9rem] font-500 opacity-90 font-no' >{user.name}</h3>
                                            </div>
                                            <div className="comment px-8 flex justify-center gap-4 items-center">
                                                <button className='text-[0.8rem] leading-4 opacity-90 rounded-sm shadow-sm shadow-blue-400 border-none hover:scale-105 active:scale-95 custom-transition bg-green-500 px-1 py-[1px] pt-[2px] text-black font-semibold' >Accept</button>
                                                <button className='text-[0.8rem] leading-4 opacity-90 rounded-sm shadow-sm shadow-blue-400 border-none hover:scale-105 active:scale-95 custom-transition bg-green-500 px-1 py-[1px] pt-[2px] text-black font-semibold' >Decline</button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }


                    </div>

                </>
            );
        }
    }


    return (
        <>



            {/* comments container of another students */}
            <div className="notification_body flex flex-col mt-10 w-full gap-2 justify-center items-center">
                <h1 className='text-white font-overpass uppercase text-xl mb-4 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-2 py-1 rounded text-center' >Your - all - Notification</h1>

                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                    <Tab icon="" label="Connections"
                        style={{ color: value === 0 ? 'white' : '#cbafaf', fontWeight: 'bold', fontFamily: 'overpass' }}
                        onClick={() => setValue(0)}
                    />
                    <Tab icon="" label="Message"
                        onClick={() => setValue(1)}
                        style={{ color: value === 1 ? 'white' : '#cbafaf', fontWeight: 'bold', fontFamily: 'overpass' }}
                    />
                    <Tab icon="" label="Collaboration"
                        onClick={() => setValue(2)}
                        style={{ color: value === 2 ? 'white' : '#cbafaf', fontWeight: 'bold', fontFamily: 'overpass' }}
                    />
                </Tabs>

                {renderCategories()}



            </div>
        </>
    )
}

export default CommentShow
