import React from 'react';
import Navbar from '../Components/Navbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

const MessagePage = () => {
    return (
        <>
            <Navbar />


            <div className="communication_message_container text-white font-signika flex items-center justify-center w-full  min-h-full ">

                {/* contact message list  */}
                <div className="all_person_list flex flex-col  min-h-[80vh] min-w-[25rem] max-w-[50rem] gap-1 shadow-sm shadow-blue-600 rounded" >
                    {/* three filters connect group */}
                    <div className="person_filters flex justify-center gap-3 items-center py-2 h-16 shadow-sm shadow-blue-900">
                        <button className='fav_button ' >All</button>
                        <button className='fav_button ' >Connect</button>
                        <button className='fav_button ' >Group</button>
                    </div>

                    {/* list of persons */}
                    <div className="person_list flex flex-col gap-[4px] px-1 py-1 bg-slate-800 h-full ">

                        {/* card of particular person */}
                        <div className="person_details cursor-pointer rounded hover:bg-slate-600 flex custom-transition justify-between bg-slate-700 px-5 items-center">
                            <div className="person_box flex gap-3  py-1 items-center">
                                <img className='h-10 w-10 rounded-full' src="./Images/dushyant.jpg" alt="lokeshwar" />
                                <h3 className='text-lg opacity-90' >Dushyant Das</h3>
                            </div>
                            <span className='opacity-85' >Monday</span>
                        </div>

                        {/* card of particular person */}
                        <div className="person_details cursor-pointer rounded hover:bg-slate-600 flex custom-transition justify-between bg-slate-700 px-5 items-center">
                            <div className="person_box flex gap-3  py-1 items-center">
                                <img className='h-10 w-10 rounded-full' src="./Images/khilendra.jpg" alt="lokeshwar" />
                                <h3 className='text-lg opacity-90' >Khilendra Kumar</h3>
                            </div>
                            <span className='opacity-85' >Monday</span>
                        </div>


                    </div>
                </div>

                {/* mesage person and all messages */}
                <div className="messages_container flex flex-col py-2 min-h-[80vh] justify-between  rounded  shadow-sm shadow-blue-600 min-w-[60vw]">
                    {/* receiver details */}
                    <div className="receiver_box flex items-center justify-between h-14 shadow-sm shadow-blue-900 py-2 ">
                        <div className="receiver_details flex items-center gap-2  px-3">
                            <img className='h-11 w-11 rounded-full' src="./Images/takeshwar.jpg" alt="" srcSet="" />
                            <div className="person_online flex flex-col justify-center ">
                                <h3>Takeshwar Janghel</h3>
                                <span className='text-sm' >Online</span>
                            </div>
                        </div>
                        <MoreVertIcon className="cursor-pointer hover:bg-slate-500 custom-transition  rounded-full" />
                    </div>
                    {/* messages adn send message box */}
                    <div className=' h-full bg-slate-800  p-2 px-4 flex flex-col justify-between gap-3' >
                        <div className="messagesb_box_container">
                            {/* show first date */}
                            <div className="date_show flex items-center justify-center py-1">
                                <div className="date bg-slate-600 px-2 py-[1px] rounded-md">
                                    <p>24 July 2023</p>
                                </div>
                            </div>

                            {/* particular message box */}

                            {/* left messae receiver messae */}
                            <div className="message_box_left w-full my-2">
                                <div className="message bg-green-800 px-2 py-[1px] w-fit max-w-[70%] rounded-md rounded-tl-none">
                                    <p className='message_name' >
                                        Good Morning Bro!
                                    </p>
                                </div>
                            </div>

                            {/* right sender messae */}
                            <div className="message_box_right w-full flex justify-end my-2">
                                <div className="message bg-green-800 px-2 py-[1px] w-fit max-w-[70%] rounded-md rounded-tr-none">
                                    <p className='message_name' >
                                        Good Morning Bro!
                                    </p>
                                </div>
                            </div>


                            {/* left messae receiver messae */}
                            <div className="message_box_left w-full my-2">
                                <div className="message bg-green-800 px-2 py-[1px] w-fit rounded-md rounded-tl-none">
                                    <p className='message_name' >
                                        Good Morning Bro!
                                    </p>
                                </div>
                            </div>

                            {/* right sender messae */}
                            <div className="message_box_right w-full flex justify-end my-2">
                                <div className="message bg-green-800 px-2 py-[1px] w-fit rounded-md rounded-tr-none">
                                    <p className='message_name' >
                                        Good Morning Bro!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="send_message_container flex justify-between items-center gap-1 my-1 bg-slate-800">
                            <input className='w-full bg-slate-700 border-gray-500 px-2 py-1 border-[1px] rounded  focus:outline-none' type="text" name="" id="input_message " placeholder='Enter Message' />
                            <SendIcon style={{ fontSize: '2.1rem' }} className='text-green-400 hover:bg-slate-500 rounded hover:text-green-200 custom-transition cursor-pointer p-[1px] px-1' />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MessagePage
