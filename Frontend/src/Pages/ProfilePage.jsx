import React from 'react';
import '../CSS/Style.css'
import Navbar from '../Components/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CloseIcon from '@mui/icons-material/Close';
import GradeIcon from '@mui/icons-material/Grade';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="profle_container flex flex-col font-signika py-5 px-1">

        <div className="heading_container flex  text-white items-center justify-between px-16 py-6 shadow-sm shadow-gray-200 ">
          <h1 className='profile_container_heading left_heading' >MY PROFILE SECTION</h1>
          <div className="edit_profile_box flex gap-6 items-center justify-center">
            <h3 className='text-xl' >Want to Edit Details</h3>
            <button className='edit_button custom-button '>EDIT</button>
          </div>
        </div>


        {/* user details strudents  */}
        <div className="user_details text-white flex  px-5 gap-3 w-full h-full py-8">

          {/* images name descr social links */}
          <div className="imp_show flex flex-col items-center w-[32%] gap-9 px-2 py-2 min-w-[500px]">

            {/* image name bio */}
            <div className="top_details flex flex-col items-center gap-6">

              {/* image and name */}
              <div className="name-and-image flex flex-col items-center gap-4 ">
                <img src="./Images/lokeshwar.jpg" alt="user" className='p-1 bg-slate-500 shadow-md shadow-blue-500 w-32 h-32 rounded-full' />
                <h2 className='text-4xl font-semibold'>Lokeshwar Prasad</h2>
              </div>

              {/* bio of students */}
              <div className="bio w-full">
                <p className='text-center text-xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem cumque possimus et nostrum eos voluptate sapiente alias labore. Magnam.</p>
              </div>

              {/* no of connections */}
              <div className="user_connections flex gap-2 text-xl">
                <Diversity1Icon />
                <span>Connections : </span>
                <span>5</span>
              </div>
            </div>

            {/* linlks of social media */}
            <div className="social_links flex flex-col gap-2 text-xl">

              {/* linkedin link */}
              <div className="linkedin_link flex gap-2">
                <LinkedInIcon />
                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                  http://linkedin.com
                </a>
              </div>
              {/* linkedin link */}
              <div className="github_link flex gap-2">
                <GitHubIcon />
                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                  http://github.com
                </a>
              </div>

              {/* instagram link */}
              <div className="instagram_link flex gap-2">
                <InstagramIcon />
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                  http://instagram.com
                </a>
              </div>
            </div>
          </div>


          {/* basic details of User */}
          <div className="basic_details flex flex-col w-[38%] pl-9 h-full py-5 px-5 gap-9 text-xl min-w-[500px]">

            {/* email */}
            <div className="user_email flex gap-3">
              <span className='small_heading' >Email : </span>
              <span>lokeshwar@gmail.com</span>
            </div>

            {/* Collage */}
            <div className="user_collge flex gap-3">
              <span className='small_heading opacity-95' >Collage : </span>
              <span>RSR Rungta colleage Bhilai</span>
            </div>

            {/* Courses */}
            <div className="user_course flex gap-3">
              <span className='small_heading opacity-95' >Course : </span>
              <span>BTech/CSE</span>
            </div>

            {/* Passout Year */}
            <div className="user_pass_year flex gap-3">
              <span className='small_heading opacity-95' >Passout Year : </span>
              <span>2025</span>
            </div>

            {/* SEM/ YEAR */}
            <div className="user_year_sem flex gap-3">
              <span className='small_heading opacity-95' >Sem/Year : </span>
              <span>5th Sem</span>
            </div>

            <div className="user_location flex gap-3">
              <span className='small_heading opacity-95' >Location : </span>
              <span>Durg Chhattisgarh </span>
            </div>

          </div>


          {/* User skills educations */}
          <div className="user_all_skills flex items-center flex-col px-3 py-5 gap-9 w-[30%] text-xl min-w-[500px]">

            {/* technology used */}
            <div className="technologies_names flex  flex-col items-center gap-5">
              {/* technology listed options */}
              <div className="show_technologies flex gap-5 ">
                <span className='small_heading' >Technology : </span>
                {/* selections of technologies */}
                <select className='cursor-pointer text-black' name="" id="">
                  <option value="">_SELECT_Technology</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="Javascript">Javascript</option>
                  <option value="Typescript">Typescript</option>
                  <option value="Bootstrap">Bootstrap</option>
                  <option value="Talwind">Talwind</option>
                  <option value="React">React</option>
                  <option value="NodeJS">NodeJS</option>
                  <option value="Express">Express</option>
                  <option value="MySql">MySql</option>
                  <option value="PHP">PHP</option>
                  <option value="Spring">Spring</option>
                  <option value="Hybernet">Hybernet</option>
                  <option value="Django">Django</option>
                  <option value=".NET">.NET</option>
                  <option value="GO">GO</option>
                </select>

              </div>

              {/* technology which is selected */}
              <div className="selected_technology flex flex-wrap gap-1">

                {/* one selected */}
                <div className="technology_box selected_options">
                  <span>Javascript</span>
                  <CloseIcon className='selected_options_close ' />
                </div>

                {/* one selected */}
                <div className="technology_box selected_options">
                  <span>React</span>
                  <CloseIcon className='selected_options_close ' />
                </div>

                {/* one selected */}
                <div className="technology_box selected_options">
                  <span>Typescript</span>
                  <CloseIcon className='selected_options_close ' />
                </div>

              </div>

            </div>


            {/* Core Programming Lnagugae */}
            <div className="programming_language_names flex flex-col gap-5">
              {/* programming language listed options */}
              <div className="show_programming_language flex gap-3">
                <span className='small_heading' >Programming : </span>
                {/* selections of Programming */}
                <select className='cursor-pointer text-black' name="" id="">
                  <option value="">_SELECT_Language</option>
                  <option value="C">C</option>
                  <option value="C++">C++</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                </select>

              </div>

              {/* technology which is selected */}
              <div className="selected_programming_language flex gap-1">

                {/* one selected */}
                <div className="language_box selected_options">
                  <span>Java</span>
                  <CloseIcon className='selected_options_close custom-transition' />
                </div>

                {/* one selected */}
                <div className="language_box selected_options">
                  <span>Python</span>
                  <CloseIcon className='selected_options_close custom-transition' />
                </div>

                {/* one selected */}
                <div className="language_box selected_options">
                  <span>C++</span>
                  <CloseIcon className='selected_options_close custom-transition' />
                </div>
              </div>
            </div>


            {/* my rating */}
            <div className="user_rating flex items-center justify-center gap-3">
              <span className='small_heading'>My Rating :-</span>
              <div className="rating_box">
                <GradeIcon className='grade_icon' />
                <GradeIcon className='grade_icon' />
                <GradeIcon className='grade_icon' />
                <GradeIcon className='grade_icon' />
                <GradeIcon className='grade_icon' />
              </div>
            </div>

            {/* send message to user */}
            <div className="send_message_button">
              <button className="send_message custom-button">SEND MESSAGE</button>
            </div>
          </div>
        </div>



        {/* show my projects */}
        <div className="all_projects_container text-white flex flex-col items-center w-full py-8">
          {/* heding part */}
          <div className="disclaimers items-center flex py-4">
            <h2 className='left_heading' >Checkout My Project</h2>
            {/* need filter button ongoing completed */}
          </div>

          {/* container contains all projects box */}
          <div className="projects_container flex gap-5 flex-wrap items-center justify-center ">

            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">Completed</span>
                <FactCheckIcon />
              </div>

              <div className="project_name flex gap-3 items-center ">
                <span className='small_heading' >PROJECT : </span>
                <span className='text-xl' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center">
                <span className='small_heading' >Technology : </span>
                <span className='text-xl' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center">
                <span className='small_heading' >Description : </span>
                <span className='text-xl' >This is Group Projects of... </span>
              </div>
              <button className='custom-button' >Goto-Project</button>
            </div>


            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>

              <div className="project_name flex gap-3 items-center ">
                <span className='small_heading' >PROJECT : </span>
                <span className='text-xl' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center">
                <span className='small_heading' >Technology : </span>
                <span className='text-xl' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center">
                <span className='small_heading' >Description : </span>
                <span className='text-xl' >This is Group Projects of... </span>
              </div>
              <button className='custom-button' >Goto-Project</button>
            </div>


            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>

              <div className="project_name flex gap-3 items-center ">
                <span className='small_heading' >PROJECT : </span>
                <span className='text-xl' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center">
                <span className='small_heading' >Technology : </span>
                <span className='text-xl' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center">
                <span className='small_heading' >Description : </span>
                <span className='text-xl' >This is Group Projects of... </span>
              </div>
              <button className='custom-button' >Goto-Project</button>
            </div>


            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>

              <div className="project_name flex gap-3 items-center ">
                <span className='small_heading' >PROJECT : </span>
                <span className='text-xl' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center">
                <span className='small_heading' >Technology : </span>
                <span className='text-xl' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center">
                <span className='small_heading' >Description : </span>
                <span className='text-xl' >This is Group Projects of... </span>
              </div>
              <button className='custom-button' >Goto-Project</button>
            </div>



          </div>
        </div>


        {/* show all projects */}


      </div>
    </>
  )
}

export default Profile
