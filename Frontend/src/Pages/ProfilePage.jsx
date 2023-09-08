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
// used react-material components 
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="profle_container flex flex-col font-signika px-2">

        <div className="heading_container flex  text-white items-center justify-between px-16 py-3 shadow-sm shadow-gray-500 ">
          <h1 className='profile_container_heading font-signika font-semibold text-gray-300 text-2xl ' >MY PROFILE SECTION</h1>
          <div className="edit_profile_box flex gap-6 items-center justify-center">
            {/* <h3 className='edit_choice text-xl' >Want to Edit Details</h3> */}
            <button className='edit_button custom-button '>EDIT</button>
          </div>
        </div>


        {/* user details strudents  */}
        <div className="user_details text-white flex flex-wrap justify-center items-center px-12 gap-3 w-full h-full py-8 shadow-sm shadow-gray-600">

          {/* images name descr social links */}
          <div className="imp_show flex flex-col items-center gap-6 px-2 py-2 min-w-[30vw]">

            {/* image name bio */}
            <div className="top_details flex flex-col items-center gap-5 px-[2vw]">

              {/* image and name */}
              <div className="name-and-image flex flex-col items-center gap-4 ">
                <img src="./Images/lokeshwar.jpg" alt="user" className='p-[0.2rem] transition-all duration-500 bg-slate-900 w-32 h-32 rounded-full cursor-pointer hover:bg-gray-400 shadow-lg shadow-blue-700' />
                <h2 className='text-3xl font-semibold opacity-90'>Lokeshwar Prasad</h2>
              </div>

              {/* bio of students */}
              <div className="bio w-full max-w-[34vw]">
                <p className='bio_detalis text-center text-xl custom-values' >ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem cumque possimus et nostrum eos voluptate sapiente alias labore. Magnam.</p>
              </div>



              {/* linlks of social media */}
              <div className="social_links flex flex-col gap-2 w-full pl-[7vw] text-xl">
                {/* no of connections */}
                <div className="user_connections flex gap-3 w-full  text-xl">
                  <Diversity1Icon />
                  <span className='custom-values' >Connections : </span>
                  <span className='custom-values' >5</span>
                </div>

                {/* linkedin link */}
                <div className="linkedin_link flex gap-3">
                  <LinkedInIcon className='' />
                  <a href="http://linkedin.com" className='custom-values' target="_blank" rel="noopener noreferrer">
                    http://linkedin.com
                  </a>
                </div>
                {/* linkedin link */}
                <div className="github_link flex gap-3">
                  <GitHubIcon className='' />
                  <a href="http://github.com" className='custom-values' target="_blank" rel="noopener noreferrer">
                    http://github.com
                  </a>
                </div>

                {/* instagram link */}
                <div className="instagram_link flex gap-3">
                  <InstagramIcon className='' />
                  <a href="http://instagram.com" className='custom-values' target="_blank" rel="noopener noreferrer">
                    http://instagram.com
                  </a>
                </div>
              </div>
            </div>

          </div>


          {/* basic details of User */}
          <div className="basic_details flex flex-col  pl-9 h-full pt-7 px-5 gap-9 text-xl min-w-[400px]">

            {/* email */}
            <div className="user_email flex items-center  gap-3">
              <span className='small_heading' >Email : </span>
              <span className='custom-values' >lokeshwar@gmail.com</span>
            </div>

            {/* Collage */}
            <div className="user_collge flex items-center  gap-3">
              <span className='small_heading opacity-95' >Collage : </span>
              <span className='custom-values' >RSR Rungta colleage Bhilai</span>
            </div>

            {/* Courses */}
            <div className="user_course flex items-center  gap-3">
              <span className='small_heading opacity-95' >Course : </span>
              <span className='custom-values' >BTech/CSE</span>
            </div>

            {/* Passout Year */}
            <div className="user_pass_year flex items-center  gap-3">
              <span className='small_heading opacity-95' >Passout Year : </span>
              <span className='custom-values' >2025</span>
            </div>

            {/* SEM/ YEAR */}
            <div className="user_year_sem flex items-center  gap-3">
              <span className='small_heading opacity-95' >Sem/Year : </span>
              <span className='custom-values' >5th Sem</span>
            </div>

            <div className="user_location flex items-center  gap-3">
              <span className='small_heading opacity-95' >Location : </span>
              <span className='custom-values' >Durg Chhattisgarh </span>
            </div>

          </div>


          {/* User skills educations */}
          <div className="user_all_skills flex items-center flex-col px-3  pt-7 gap-9  text-xl min-w-[30vw]">

            {/* technology used */}
            <div className="technologies_names flex  flex-col items-center gap-3">
              {/* technology listed options */}
              <div className="show_technologies flex gap-5 items-center justify-center">
                <span className='small_heading' >Technology : </span>
                {/* selections of technologies */}
                <select className='cursor-pointer h-5 text-[1rem] text-black' name="" id="">
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
            <div className="programming_language_names flex flex-col gap-3">
              {/* programming language listed options */}
              <div className="show_programming_language flex-2 flex-3 gap-3">
                <span className='small_heading' >Programming : </span>
                {/* selections of Programming */}
                <select className='cursor-pointer h-5 text-[1rem] text-black' name="" id="">
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



        {/* all projects container with headings  */}
        <div className="all_projects_container text-white px-16  flex flex-col items-center justify-center  w-full py-9 gap-5">
          {/* heding part */}
          <div className="disclaimers items-center flex w-full justify-center">
            <h2 className='font-signika font-semibold text-gray-300 text-2xl ' >CHECKOUT MY PROJECTS</h2>
            {/* need filter button ongoing completed */}
            {/* <Tabs  className='text-white' aria-label="icon label tabs example">
              <Tab style={{color:'white'}} label="LOGIN-ACCOUNT" />
              <Tab style={{color:'white'}} label="CREATE-ACCOUNT" />
            </Tabs> */}
          </div>

          {/* container contains all projects box */}
          <div className="projects_container flex py-4 gap-9 flex-wrap items-center justify-center ">

            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>
              <div className="project_name flex gap-3  w-full ">
                <span className='project_name small_heading text-gray-200' >PROJECT : </span>
                <span className='name_value text-xl custom-values' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center w-full">
                <span className='technology_name small_heading text-gray-200' >Technology : </span>
                <span className='technology_value text-xl custom-values' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center w-full">
                <span className='description_name small_heading text-gray-200' >Description : </span>
                <span className='description_value text-xl custom-values' >This is Group Projects of... </span>
              </div>
              <button className='custom-button relative top-2' >Goto-Project</button>
            </div>


            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>
              <div className="project_name flex gap-3  w-full ">
                <span className='project_name small_heading text-gray-200' >PROJECT : </span>
                <span className='name_value text-xl custom-values' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center w-full">
                <span className='technology_name small_heading text-gray-200' >Technology : </span>
                <span className='technology_value text-xl custom-values' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center w-full">
                <span className='description_name small_heading text-gray-200' >Description : </span>
                <span className='description_value text-xl custom-values' >This is Group Projects of... </span>
              </div>
              <button className='custom-button relative top-2' >Goto-Project</button>
            </div>


            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>
              <div className="project_name flex gap-3  w-full ">
                <span className='project_name small_heading text-gray-200' >PROJECT : </span>
                <span className='name_value text-xl custom-values' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center w-full">
                <span className='technology_name small_heading text-gray-200' >Technology : </span>
                <span className='technology_value text-xl custom-values' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center w-full">
                <span className='description_name small_heading text-gray-200' >Description : </span>
                <span className='description_value text-xl custom-values' >This is Group Projects of... </span>
              </div>
              <button className='custom-button relative top-2' >Goto-Project</button>
            </div>


            {/* projecct box */}
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-white">
              <div className="status flex justify-center gap-2 items-center">
                <span className="status text-xl text-green-500">OnGoing</span>
                <CallMissedOutgoingIcon />
              </div>
              <div className="project_name flex gap-3  w-full ">
                <span className='project_name small_heading text-gray-200' >PROJECT : </span>
                <span className='name_value text-xl custom-values' >SMART CANTEEN WEBAPP </span>
              </div>
              <div className="technology_name project_name flex gap-3 items-center w-full">
                <span className='technology_name small_heading text-gray-200' >Technology : </span>
                <span className='technology_value text-xl custom-values' >HTML,CSS,JS,REACT..</span>
              </div>
              <div className="project_name project_name flex gap-3 items-center w-full">
                <span className='description_name small_heading text-gray-200' >Description : </span>
                <span className='description_value text-xl custom-values' >This is Group Projects of... </span>
              </div>
              <button className='custom-button relative top-2' >Goto-Project</button>
            </div>





          </div>
        </div>





      </div>
    </>
  )
}

export default Profile
