import React, { useState } from 'react';
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
import LinkIcon from '@mui/icons-material/Link';
// used react-material components 
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

const Profile = () => {

  // when choosing technologies in options then store
  const [selectedTechnology, setSelectedTechnology] = useState([]);

  // handle when selected more options
  const addTechnologies = (event) => {
    const selectedValue = event.target.value;
    // checkout previous values not store
    if (!selectedTechnology.includes(selectedValue)) {
      setSelectedTechnology([...selectedTechnology, selectedValue]);
    }
    console.log(selectedTechnology);
  }


  // when choosing Programming language in options then store
  const [selectedProgramming, setSelectedProgramming] = useState([]);

  // handle when selected more options
  const addProgrammings = (event) => {
    const selectedValue = event.target.value;
    // checkout previous values not store
    if (!selectedProgramming.includes(selectedValue)) {
      setSelectedProgramming([...selectedProgramming, selectedValue]);
    }
    console.log(selectedTechnology);
  }

  // when clicked to close then remove
  const handleRemoveOption = (name, state, setState) => {
    const filteredOptions = state.filter((currName) => currName !== name);
    setState(filteredOptions);
  }


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
        <div className="user_details text-white flex flex-wrap justify-center items-center px-0 gap-3 w-full h-full py-8 shadow-sm shadow-gray-600">

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
              <div className="social_links flex flex-col gap-2 w-full pl-[5vw] text-xl">
                {/* no of connections */}
                <div className="user_connections flex gap-3 w-full  text-xl">
                  <Diversity1Icon />
                  <span className='custom-values' >Connections : </span>
                  <span className='custom-values' >5</span>
                </div>

                {/* My Website link */}
                <div className="website_link flex gap-3">
                  <LinkIcon className='' />
                  <a href="https://lokeshwar-creatives.netlify.app/" className='custom-values' target="_blank" rel="noopener noreferrer">
                    {/* https://lokeshwar-creatives.netlify.app/ */}
                    https://netlify.app/
                  </a>
                </div>
                {/* linkedin link */}
                <div className="linkedin_link flex gap-3">
                  <LinkedInIcon className='' />
                  <a href="https://linkedin.com/in/lokeshwar-prasad-dewangan-7b2163211/" className='custom-values' target="_blank" rel="noopener noreferrer">
                    {/* linkedin.com/in/lokeshwar-prasad-dewangan-7b2163211/ */}
                    https://linkedin.com/
                  </a>
                </div>
                {/* linkedin link */}
                <div className="github_link flex gap-3">
                  <GitHubIcon className='' />
                  <a href="https://github.com/LokeshwarPrasad3" className='custom-values' target="_blank" rel="noopener noreferrer">
                    {/* https://github.com/LokeshwarPrasad3 */}
                    https://github.com/
                  </a>
                </div>

                {/* instagram link */}
                <div className="instagram_link flex gap-3">
                  <InstagramIcon className='' />
                  <a href="https://www.instagram.com/Lokeshwarprasad1/" className='custom-values' target="_blank" rel="noopener noreferrer">
                    {/* https://www.instagram.com/Lokeshwarprasad1/ */}
                    https://www.instagram.com/
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
            <div className="technologies_names flex max-w-[82%] flex-col items-center gap-3">
              {/* technology listed options */}
              <div className="show_technologies flex gap-5 items-center justify-center">
                <span className='small_heading' >Technology : </span>
                {/* selections of technologies */}
                <select
                  value={selectedTechnology}
                  onChange={addTechnologies}
                  multiple={false}
                  className='cursor-pointer h-5 text-[1rem] text-black' name="" id="">
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
              <div className="selected_technology max-w-[450px] flex flex-wrap gap-1 select-none">


                {/* show all technologies which is selected by selectedTechnology state */}
                {
                  selectedTechnology.map((name) => {
                    return (
                      <>
                        {/* one selected */}
                        <div className="technology_box selected_options " key={name}>
                          <span>{name}</span>
                          <CloseIcon
                            onClick={() => {
                              const filteredOptions = selectedTechnology.filter((currName) => currName !== name);
                              setSelectedTechnology(filteredOptions);
                            }}
                            className='selected_options_close ' style={{ height: '1.2rem', width: '1.2rem' }} />
                        </div>
                      </>
                    )
                  })
                }

              </div>

            </div>


            {/* Core Programming Lnagugae */}
            <div className="programming_language_names flex flex-col gap-3">
              {/* programming language listed options */}
              <div className="show_programming_language   flex-2 flex-3 gap-3">
                <span className='small_heading' >Programming : </span>
                {/* selections of Programming */}
                <select
                  value={selectedProgramming}
                  onChange={addProgrammings}
                  multiple={false}
                  className='cursor-pointer h-5 text-[1rem] text-black' name="" id="">
                  <option value="">_SELECT_Language</option>
                  <option value="C">C</option>
                  <option value="C++">C++</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                </select>

              </div>

              {/* technology which is selected */}
              <div className="selected_programming_language max-w-[450px] flex gap-1">


                {/* show all prpogramming lang which is selected by selectedTechnology state */}
                {
                  selectedProgramming.map((name) => {
                    return (
                      <>
                        {/* one selected */}
                        <div className="language_box selected_options" key={name}>
                          <span>{name}</span>
                          <CloseIcon
                            onClick={() => {
                              const filteredOptions = selectedProgramming.filter((currName) => currName !== name);
                              setSelectedProgramming(filteredOptions);
                            }}
                            className='selected_options_close custom-transition' style={{ height: '1.2rem', width: '1.2rem' }} />
                        </div>
                      </>
                    )
                  })
                }

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
        <div className="all_projects_container text-white px-16  flex flex-col items-center justify-center w-full py-9 gap-5 shadow-sm shadow-gray-600">
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
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-gray-200 ">
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
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-gray-200">
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
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-gray-200">
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
            <div className="project_box flex flex-col items-center bg-slate-600 rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-md shadow-gray-200">
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
