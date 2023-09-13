import React, { useState } from 'react';
import '../CSS/Style.css'
import Navbar from '../Components/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CloseIcon from '@mui/icons-material/Close';
import GradeIcon from '@mui/icons-material/Grade';
import ProjectCard from '../Components/ProjectComponents/ProjectCard';
import EditCustomInput from '../Components/CustomInput/EditCustomInput';
// used react-material components 
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

const Profile = () => {

  const myName = "Lokeshwar Prasad Dewangan";
  const bio = "ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem cumque possimus et nostrum eos voluptate sapiente alias labore. Magnam.";
  const website = "https://netlify.com";
  const linkedin_link = "https://linkedin.com";
  const github_link = "https://github.com";
  const instagram_link = "https://instagram.com";
  const email = "lokeshwar@gmail.com";
  const college = "RSR Rungta college bhilai";
  const course = "BTech/CSE";
  const passYear = 2025;
  const semYear = "5th Sem";
  const location = "Durg Chhattisgarh"

  // STUDENT DETAILS STORE
  const [studentName, setStudentName] = useState(myName);
  const [studentBio, setStudentBio] = useState(bio);
  const [studentWebsite, setStudentWebsite] = useState(website)
  const [studentLinkedin, setStudentLinkedin] = useState(linkedin_link)
  const [studentGithub, setStudentGithub] = useState(github_link)
  const [studentInstagram, setStudentInstagram] = useState(instagram_link)
  const [studentEmail, setStudentEmail] = useState(email)
  const [studentCollege, setStudentCollege] = useState(college)
  const [studentCourse, setStudentCourse] = useState(course)
  const [studentPassYear, setStudentPassYear] = useState(passYear)
  const [studentCurrentSemYear, setStudentCurrentSemYear] = useState(semYear)
  const [studentLocation, setStudentLocation] = useState(location)

  // when clicking edit button then convert text to input
  const [showEditBox, setShowEditBox] = useState(true);

  // when choosing technologies in options then store
  const [selectedTechnology, setSelectedTechnology] = useState(["React", "Typescript", "Javascript"]);

  // when choosing Programming language in options then store
  const [selectedProgramming, setSelectedProgramming] = useState(["Java", "Python"]);

  // handle when selected more options
  const addTechnologies = (event) => {
    const selectedValue = event.target.value;
    // checkout previous values not store
    if (!selectedTechnology.includes(selectedValue)) {
      setSelectedTechnology([...selectedTechnology, selectedValue]);
    }
    console.log(selectedTechnology);
  }

  // handle when selected more options
  const addProgrammings = (event) => {
    const selectedValue = event.target.value;
    // checkout previous values not store
    if (!selectedProgramming.includes(selectedValue)) {
      setSelectedProgramming([...selectedProgramming, selectedValue]);
    }
    console.log(selectedTechnology);
  }


  // edit button handle
  const handleEdit = (e) => {
    setShowEditBox(false);
  }

  // handle saved
  const handleSaveEdit = () => {
    // console.log("saved button");
    setShowEditBox(true);

  }

  // handle cancel when edit 
  const handleCancelEdit = () => {
    // console.log("Cancel button");
    setShowEditBox(true);
  }




  return (
    <>
      <Navbar />

      <div className="profle_container flex flex-col font-signika px-2">

        <div className="heading_container flex  text-white items-center justify-between px-16 py-3 shadow-sm shadow-gray-500 ">
          <h1 className='profile_container_heading font-signika font-semibold text-gray-300 text-2xl ' >MY PROFILE SECTION</h1>
          <div className="edit_profile_box flex gap-6 items-center justify-center">

            {/* if user edit then show save and cancel button */}
            {
              showEditBox ? (
                <button className='edit_button custom-button '
                  onClick={handleEdit}
                >EDIT</button>
              ) : (
                <>
                  <button className='edit_button custom-button '
                    onClick={handleSaveEdit}
                  >SAVE</button>
                  <button className='edit_button custom-button '
                    onClick={handleCancelEdit}
                  >CANCEL</button>
                </>
              )
            }

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
                  <input type="file" name="" id="profile_file" className='hidden ' />
                  <label htmlFor="profile_file" className='relative top-[-1.6rem] left-4 pb-1 px-1 rounded-lg text-[0.9rem] text-white bg-purple-950 ' >Change Image</label>
                </div>

                <h2 className='text-3xl font-semibold opacity-90'>
                  {
                    !showEditBox ?
                      (
                        <input
                          onChange={(e) => setStudentName(e.target.value)}
                          type="text" className='bg-gray-700 text-lg pl-2 text-gray-200 font-normal rounded w-64 border-[1px]  border-gray-400 focus:border-blue-600 placeholder:Enter Your Name' name="" value={studentName} id="" />
                      ) : (
                        studentName.split(' ').slice(0, 2).join(' ')
                      )
                  }

                </h2>
              </div>

              {/* bio of students */}
              <div className="bio w-full max-w-[34vw]">
                <p className='bio_details text-center text-xl custom-values' >
                  {
                    !showEditBox ?
                      (
                        <EditCustomInput
                          type="textarea"
                          value={studentBio}
                          onChange={(e) => setStudentBio(e.target.value)}
                          placeholder="Your Bio"
                        />) : (
                        studentBio.split(' ').slice(0, 20).join(' ')
                      )
                  }
                </p>


              </div>



              {/* linlks of social media */}
              <div className={`social_links flex flex-col gap-2 w-full ${showEditBox ? 'pl-[5vw]' : ""} text-xl`}>
                {/* no of connections */}

                <div className="user_connections flex gap-3 w-full  text-xl">
                  <Diversity1Icon />
                  <span className='custom-values' >Connections : </span>
                  <span className='custom-values' >5</span>
                </div>

                {/* My Website link */}
                <div className="website_link flex gap-3">
                  <LinkIcon className='' />
                  {
                    !showEditBox ? (
                      <EditCustomInput
                        type="input"
                        value={studentWebsite}
                        onChange={(e) => setStudentWebsite(e.target.value)}
                        placeholder="Your Website"
                      />
                    ) : (
                      <EditCustomInput
                        type="link"
                        value={studentWebsite}
                      />
                    )
                  }
                </div>
                {/* linkedin link */}
                <div className="linkedin_link flex gap-3">
                  <LinkedInIcon className='' />
                  {
                    !showEditBox ?
                      (
                        <EditCustomInput
                          type="input"
                          value={studentLinkedin}
                          onChange={(e) => setStudentLinkedin(e.target.value)}
                          placeholder="Linkedin Link"
                        />) : (
                        <EditCustomInput
                          type="link"
                          value={studentLinkedin}
                        />
                      )
                  }
                </div>
                {/* github link */}
                <div className="github_link flex gap-3">
                  <GitHubIcon className='' />
                  {
                    !showEditBox ?
                      (
                        <EditCustomInput
                          type="input"
                          value={studentGithub}
                          onChange={(e) => setStudentGithub(e.target.value)}
                          placeholder="Github Link"
                        />) : (
                        <EditCustomInput
                          type="link"
                          value={studentGithub}
                        />
                      )
                  }
                </div>

                {/* instagram link */}
                <div className="instagram_link flex gap-3">
                  <InstagramIcon className='' />
                  {
                    !showEditBox ?
                      (
                        <EditCustomInput
                          type="input"
                          value={studentInstagram}
                          onChange={(e) => setStudentInstagram(e.target.value)}
                          placeholder="Instagram Link"
                        />) : (
                        <EditCustomInput
                          type="link"
                          value={studentInstagram}
                        />
                      )
                  }
                </div>
              </div>

            </div>

          </div>


          {/* basic details of User */}
          <div className="basic_details flex flex-col  pl-9 h-full pt-7 px-0 gap-3 text-xl min-w-[400px]">

            {/* email */}
            <div className="user_email flex items-center  gap-3">
              <span className='small_heading' >Email : </span>
              {
                !showEditBox ?
                  (
                    <EditCustomInput
                      type="input"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      placeholder="Your Email"
                    />
                  ) : (
                    <span className='custom-values' >{studentEmail}</span>
                  )
              }
            </div>

            {/* Collage */}
            <div className="user_collge flex items-center  gap-3">
              <span className='small_heading opacity-95' >Collage : </span>
              {
                !showEditBox ?
                  (
                    <EditCustomInput
                      type="input"
                      value={studentCollege}
                      onChange={(e) => setStudentCollege(e.target.value)}
                      placeholder="Your Collage"
                    />
                  ) : (
                    <span className='custom-values' >{studentCollege}</span>
                  )
              }
            </div>

            {/* Courses */}
            <div className="user_course flex items-center  gap-3">
              <span className='small_heading opacity-95' >Course : </span>
              {
                !showEditBox ?
                  (
                    <EditCustomInput
                      type="input"
                      value={studentCourse}
                      onChange={(e) => setStudentCourse(e.target.value)}
                      placeholder="Your Couse"
                    />) : (
                    <span className='custom-values' >{studentCourse}</span>
                  )
              }
            </div>

            {/* Passout Year */}
            <div className="user_pass_year flex items-center  gap-3">
              <span className='small_heading opacity-95' >PassYear : </span>
              {
                !showEditBox ?
                  (
                    <EditCustomInput
                      type="input"
                      value={studentPassYear}
                      onChange={(e) => setStudentPassYear(e.target.value)}
                      placeholder="Your Course"
                    />) : (
                    <span className='custom-values' >{studentPassYear}</span>
                  )
              }
            </div>

            {/* SEM/ YEAR */}
            <div className="user_year_sem flex items-center  gap-3">
              <span className='small_heading opacity-95' >Sem/Year : </span>
              {
                !showEditBox ?
                  (
                    <EditCustomInput
                      type="input"
                      value={studentCurrentSemYear}
                      onChange={(e) => setStudentCurrentSemYear(e.target.value)}
                      placeholder="Your Sem/Year"
                    />) : (
                    <span className='custom-values' >{studentCurrentSemYear}</span>
                  )
              }
            </div>

            <div className="user_location flex items-center  gap-3">
              <span className='small_heading opacity-95' >Location : </span>
              {
                !showEditBox ?
                  (
                    <EditCustomInput
                      type="input"
                      value={studentLocation}
                      onChange={(e) => setStudentLocation(e.target.value)}
                      placeholder="Your Location"
                    />) : (
                    <span className='custom-values' >{studentLocation} </span>
                  )
              }
            </div>

          </div>


          { }
          <div className="user_all_skills flex items-center flex-col px-3  pt-7 gap-1  text-xl ">

            {/* technology used */}
            <div className="technologies_names flex max-w-[82%] flex-col items-center gap-3">
              {/* technology listed options */}
              <div className={`show_technologies flex ${showEditBox ? 'flex-col' : ""}  gap-1 items-center justify-center`}>
                <span className='small_heading' >Technology : </span>

                {/* selections of technologies */}
                {
                  !showEditBox ? (
                    <select
                      value={selectedTechnology.length > 0 ? selectedTechnology[0] : ''}
                      onChange={addTechnologies}
                      multiple={false}
                      className='cursor-pointer h-5 text-[1rem] text-black w-[75px]'
                      name=""
                      id=""
                    >
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
                  ) : (
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
                  )
                }


              </div>

              {/* technology which is selected */}
              <div className="selected_technology mb-2 flex  flex-wrap gap-1 select-none">


                {/* show all technologies which is selected by selectedTechnology state */}
                {
                  !showEditBox ? (

                    selectedTechnology.map((name, index) => {
                      return (
                        <React.Fragment key={name}>
                          {/* one selected */}
                          <div className="technology_box selected_options ">
                            <span>{name}</span>
                            <CloseIcon
                              onClick={() => {
                                const filteredOptions = selectedTechnology.filter((currName) => currName !== name);
                                setSelectedTechnology(filteredOptions);
                              }}
                              className='selected_options_close ' style={{ height: '1.2rem', width: '1.2rem' }} />
                          </div>
                        </React.Fragment>
                      )
                    })
                  ) : ""
                }

              </div>

            </div>


            {/* Core Programming Lnagugae */}
            <div className="programming_language_names flex flex-col gap-3">
              {/* programming language listed options */}
              <div className={`show_programming_language ${showEditBox ? 'flex-col' : ""} flex-2 flex-3 gap-1`}>
                <span className='small_heading' >Programming : </span>

                {/* selections of Programming */}
                {
                  !showEditBox ? (
                    <>
                      <select
                        value={selectedProgramming.length > 0 ? selectedProgramming[0] : ''}

                        onChange={addProgrammings}
                        multiple={false}
                        className='cursor-pointer h-5 text-[1rem] text-black w-[75px]' name="" id="">
                        <option value="">_SELECT_Language</option>
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                      </select>
                    </>
                  ) : (
                    <>

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
                    </>
                  )
                }

              </div>

              {/* technology which is selected */}
              <div className="selected_programming_language mb-2  max-w-[450px] flex gap-1">


                {/* show all prpogramming lang which is selected by selectedTechnology state */}
                {
                  !showEditBox ? (
                    selectedProgramming.map((name) => {
                      return (
                        <React.Fragment key={name}>
                          {/* one selected */}
                          <div className="language_box selected_options" >
                            <span>{name}</span>
                            <CloseIcon
                              onClick={() => {
                                const filteredOptions = selectedProgramming.filter((currName) => currName !== name);
                                setSelectedProgramming(filteredOptions);
                              }}
                              className='selected_options_close custom-transition' style={{ height: '1.2rem', width: '1.2rem' }} />
                          </div>
                        </React.Fragment>
                      )
                    })
                  ) : ""
                }

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


      </div >
    </>
  )
}

export default Profile
