import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const CommentShow = ({ commentClose }) => {
    return (
        <>
            {/* comments container of another students */}
            <div className="comments_container absolute lg:right-[2vw]  md:right-0 bottom-[4vw] bg-slate-700 h-fit w-fit text-white rounded flex flex-col gap-[2px] font-signika px-1 py-1 shadow-sm items-center justify-center shadow-blue-100">

                {/* heading section */}
                <div className='w-full flex justify-between px-2 items-end ' >
                    <span className='text-lg font-semibold font-overpass' >Your Comments 💖</span>
                    <CloseIcon
                        className='bg-blue-800 rounded' onClick={commentClose} />
                </div>

                {/* indivisual box of comments */}
                <div className="comments_box bg-slate-800 rounded max-w-lg px-2 py-1 ">
                    <div className="profile_image flex items-center  gap-2">
                        {/* profile image first */}
                        <img src="./Images/dushyant.jpg" className="h-6 w-6 rounded-full" alt="" />
                        <h3 className='text-sm opacity-90 font-no' >Dushyant Das</h3>
                    </div>
                    <div className="comment px-8 ">
                        <h6 className='text-[0.8rem] leading-4 opacity-90 font-thin ' >
                            Facere accusamus earum ipsam nulla asperiores aspernatur quas vero perspiciatis voluptatum cum.
                        </h6>
                    </div>
                </div>

                {/* indivisual box of comments */}
                <div className="comments_box bg-slate-800 rounded max-w-lg px-2 py-1 ">
                    <div className="profile_image flex items-center  gap-2">
                        {/* profile image first */}
                        <img src="./Images/lokeshwar2.jpg" className="h-6 w-6 rounded-full" alt="" />
                        <h3 className='text-sm opacity-90 font-no' >Lokeshwar Prasad</h3>
                    </div>
                    <div className="comment px-8 ">
                        <h6 className='text-[0.8rem] leading-4 opacity-90 font-thin ' > Facere accusamus earum ipsam nulla asperiores aspernatur quas vero perspiciatis voluptatum cum.</h6>
                    </div>
                </div>

                {/* indivisual box of comments */}
                <div className="comments_box bg-slate-800 rounded max-w-lg px-2 py-1 ">
                    <div className="profile_image flex items-center  gap-2">
                        {/* profile image first */}
                        <img src="./Images/takeshwar.jpg" className="h-6 w-6 rounded-full" alt="" />
                        <h3 className='text-sm opacity-90 font-no' >Takeshwar Janghel</h3>
                    </div>
                    <div className="comment px-8 ">
                        <h6 className='text-[0.8rem] leading-4 opacity-90 font-thin ' >Lorem adipisicing elit. Facere accusamus earum ipsam nulla asperiores aspernatur quas vero </h6>
                    </div>
                </div>

                {/* indivisual box of comments */}
                <div className="comments_box bg-slate-800 rounded max-w-lg px-2 py-1 ">
                    <div className="profile_image flex items-center  gap-2">
                        {/* profile image first */}
                        <img src="./Images/puranverma.jpg" className="h-6 w-6 rounded-full" alt="" />
                        <h3 className='text-sm opacity-90 font-no' >Puran Verma</h3>
                    </div>
                    <div className="comment px-8 ">
                        <h6 className='text-[0.8rem] leading-4 opacity-90 font-thin ' > Facere accusamus earum ipsam nulla asperiores aspernatur quas vero perspiciatis voluptatum cum.</h6>
                    </div>
                </div>

                {/* indivisual box of comments */}
                <div className="comments_box bg-slate-800 rounded max-w-lg px-2 py-1 ">
                    <div className="profile_image flex items-center  gap-2">
                        {/* profile image first */}
                        <img src="./Images/khilendra.jpg" className="h-6 w-6 rounded-full" alt="" />
                        <h3 className='text-sm opacity-90 font-no' >Khilendra Dewangan</h3>
                    </div>
                    <div className="comment px-8 ">
                        <h6 className='text-[0.8rem] leading-4 opacity-90 font-thin ' > Facere accusamus earum ipsam nulla asperiores aspernatur quas vero perspiciatis voluptatum cum.</h6>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CommentShow