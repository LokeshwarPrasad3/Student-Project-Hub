import React, { useState } from 'react';
import '../CSS/Profile.css'
import Navbar from '../Components/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GradeIcon from '@mui/icons-material/Grade';
import ProjectCard from '../Components/ProjectComponents/ProjectCard';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

  const studentName = "Lokeshwar Prasad Dewangan";
  const studentBio = "ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem cumque possimus et nostrum eos voluptate sapiente alias labore. Magnam.";
  const studentWebsite = "https://netlify.com";
  const studentLinkedin = "https://linkedin.com";
  const studentGithub = "https://github.com";
  const studentInstagram = "https://instagram.com";
  const studentEmail = "lokeshwar@gmail.com";
  const studentCollege = "RSR Rungta college bhilai";
  const studentCourse = "BTech/CSE";
  const studentPassYear = 2025;
  const studentCurrentSemYear = "5th Sem";
  const studentLocation = "Durg Chhattisgarh"

  const navigate = useNavigate();

  // when choosing technologies in options then store
  // eslint-disable-next-line
  const [selectedTechnology, setSelectedTechnology] = useState(["React", "Typescript", "Javascript"]);

  // when choosing Programming language in options then store
  // eslint-disable-next-line
  const [selectedProgramming, setSelectedProgramming] = useState(["Java", "Python"]);

  // edit button handle
  const handleEdit = (e) => {
    navigate('/edit-profile')
  }



  return (
    <>
      <Navbar />

      <div className="profle_container flex flex-col font-signika px-2">

        <div className="heading_container flex  text-white items-center justify-between px-16 py-3 shadow-sm shadow-gray-500 ">
          <h1 className='profile_container_heading font-signika font-semibold text-gray-300 text-2xl ' >MY PROFILE SECTION</h1>
          <div className="edit_profile_box flex gap-6 items-center justify-center">

            {/* if user edit then show save and cancel button */}
            <button className='edit_button custom-button '
              onClick={handleEdit}
            >EDIT</button>
          </div>
        </div>


        {/* user details strudents  */}
        <div className="user_details text-white flex flex-wrap justify-center items-center px-0 gap-3 w-full h-full py-8 shadow-sm shadow-gray-600">

          {/* images name descr social links changed from 30vw */}
          <div className="imp_show flex flex-col items-center gap-6 px-2 py-2 min-w-[25vw]">

            {/* image name bio */}
            <div className="top_details flex flex-col items-center gap-5 px-[0vw]">

              {/* image and name */}
              <div className="name-and-image flex flex-col items-center gap-4 ">
                <div className="image_box ">
                  <img src="./Images/lokeshwar1.jpg" alt="user" className='p-[0.2rem] transition-all duration-500 bg-slate-900 w-32 h-32 rounded-full cursor-pointer hover:bg-gray-400 shadow-xl shadow-blue-700 overflow-hidden' />
                </div>

                <h2 className='text-3xl font-semibold opacity-90'>
                  {studentName.split(' ').slice(0, 2).join(' ')}
                </h2>
              </div>

              {/* bio of students */}
              <div className="bio w-full max-w-[34vw]">
                <p className='bio_details text-center text-xl custom-values' >
                  {studentBio.split(' ').slice(0, 20).join(' ')}
                </p>


              </div>



              {/* linlks of social media */}
              <div className='social_links flex flex-col gap-2 w-full pl-[5vw] text-xl'>
                {/* no of connections */}

                <div className="user_connections flex gap-3 w-full  text-xl">
                  <Diversity1Icon />
                  <span className='custom-values' >Connections : </span>
                  <span className='custom-values' >5</span>
                </div>

                {/* My Website link */}
                <div className="website_link flex gap-3">
                  <LinkIcon className='' />
                  <Link to={studentWebsite} className='custom-values' target="_blank" rel="noopener noreferrer">
                    {studentWebsite}
                  </Link>
                </div>
                {/* linkedin link */}
                <div className="linkedin_link flex gap-3">
                  <LinkedInIcon className='' />
                  <Link to={studentLinkedin} className='custom-values' target="_blank" rel="noopener noreferrer">
                    {studentLinkedin}
                  </Link>
                </div>
                {/* github link */}
                <div className="github_link flex gap-3">
                  <GitHubIcon className='' />
                  <Link to={studentGithub} className='custom-values' target="_blank" rel="noopener noreferrer">
                    {studentGithub}
                  </Link>
                </div>

                {/* instagram link */}
                <div className="instagram_link flex gap-3">
                  <InstagramIcon className='' />
                  <Link to={studentInstagram} className='custom-values' target="_blank" rel="noopener noreferrer">
                    {studentInstagram}
                  </Link>
                </div>
              </div>

            </div>

          </div>


          {/* basic details of User */}
          <div className="basic_details flex flex-col  pl-9 h-full pt-7 px-0 gap-3 text-xl min-w-[400px]">

            {/* email */}
            <div className="user_email flex items-center  gap-3">
              <span className='small_heading' >Email : </span>
              <span className='custom-values' >{studentEmail}</span>
            </div>

            {/* Collage */}
            <div className="user_collge flex items-center  gap-3">
              <span className='small_heading opacity-95' >Collage : </span>
              <span className='custom-values' >{studentCollege}</span>
            </div>

            {/* Courses */}
            <div className="user_course flex items-center  gap-3">
              <span className='small_heading opacity-95' >Course : </span>
              <span className='custom-values' >{studentCourse}</span>
            </div>

            {/* Passout Year */}
            <div className="user_pass_year flex items-center  gap-3">
              <span className='small_heading opacity-95' >PassYear : </span>
              <span className='custom-values' >{studentPassYear}</span>
            </div>

            {/* SEM/ YEAR */}
            <div className="user_year_sem flex items-center  gap-3">
              <span className='small_heading opacity-95' >Sem/Year : </span>
              <span className='custom-values' >{studentCurrentSemYear}</span>
            </div>

            <div className="user_location flex items-center  gap-3">
              <span className='small_heading opacity-95' >Location : </span>
              <span className='custom-values' >{studentLocation} </span>
            </div>

          </div>


          { }
          <div className="user_all_skills flex items-center flex-col px-3  pt-7 gap-1  text-xl ">

            {/* technology used */}
            <div className="technologies_names flex max-w-[82%] flex-col items-center gap-3">
              {/* technology listed options */}
              <div className='show_technologies flex flex-col gap-1 items-center justify-center'>
                <span className='small_heading' >Technology : </span>

                {/* selections of technologies */}
                <div className="selected_technology  flex  flex-wrap items-center justify-center gap-1 w-full">

                  {
                    selectedTechnology.map((name) => {
                      return (
                        <React.Fragment key={name}>
                          {/* one selected */}
                          <div className="technology_box selected_options px-1">
                            <span>{name}</span>
                          </div>
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              </div>
            </div>


            {/* Core Programming Lnagugae */}
            <div className="programming_language_names flex flex-col gap-3">
              {/* programming language listed options */}
              <div className='show_programming_language flex-col flex-2 flex-3 gap-1'>
                <span className='small_heading' >Programming : </span>

                {/* selections of Programming */}
                <div className="selected_programming_language flex justify-center items-center gap-1">
                  {
                    selectedProgramming.map((name) => {
                      return (
                        <React.Fragment key={name}>
                          {/* one selected */}
                          <div className="language_box selected_options px-1" >
                            <span>{name}</span>
                          </div>
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              </div>
            </div>


            {/* my rating */}
            <div className="user_rating flex items-center my-1 justify-center gap-3 ">
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
            <div className="send_message_button my-1">
              <button className="send_message custom-button">SEND MESSAGE</button>
            </div>
          </div>
        </div>

        {/* all projects container with headings  */}

        <ProjectCard />

      </div>
    </>
  )
}

export default Profile
