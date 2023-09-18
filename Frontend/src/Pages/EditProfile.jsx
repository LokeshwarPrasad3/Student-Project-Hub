import Navbar from '../Components/Navbar'
import React, { useState } from 'react';
import '../CSS/Profile.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import CustomSelection from '../Components/CustomInput/CustomSelection';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
// circular progress
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const EditProfile = () => {


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

    // Array for technologies Custom-Selection props
    const listTechnologies = [
        "HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "NodeJS", "ExpressJS", "MongoDB"
    ];
    const listProgramming = [
        "C", "C++", "JAVA", "Python"
    ];

    // state for loading to upload picture of user
    const [loading, setLoading] = useState(false);


    // STUDENT onChange saved on that state DETAILS STORE
    const [studentName, setStudentName] = useState(myName);
    const [studentBio, setStudentBio] = useState(bio);
    const [studentWebsite, setStudentWebsite] = useState(website);
    const [studentLinkedin, setStudentLinkedin] = useState(linkedin_link);
    const [studentGithub, setStudentGithub] = useState(github_link);
    const [studentInstagram, setStudentInstagram] = useState(instagram_link);
    const [studentEmail, setStudentEmail] = useState(email);
    const [studentCollege, setStudentCollege] = useState(college);
    const [studentCourse, setStudentCourse] = useState(course);
    const [studentPassYear, setStudentPassYear] = useState(passYear);
    const [studentCurrentSemYear, setStudentCurrentSemYear] = useState(semYear);
    const [studentLocation, setStudentLocation] = useState(location);
    const [pic, setPic] = useState("https://shorturl.at/hxUXY");

    //✅👉 Post data of that state when clicked to save then it saved all indivisual above state 
    // eslint-disable-next-line
    const [studentDetails, setStudentDetails] = useState([]);

    // Set Technologies Student known
    const [technologiesList, setTechnologiesList] = useState(["HTML", "CSS", "Javascript"]);
    // Set programming languages Student known
    const [programmingList, setProgrammingList] = useState(["Java"]);

    // when choosing technologies in options then store
    // eslint-disable-next-line
    const [selectedTechnology, setSelectedTechnology] = useState(["React", "Typescript", "Javascript"]);

    // when choosing Programming language in options then store
    // eslint-disable-next-line
    const [selectedProgramming, setSelectedProgramming] = useState(["Java", "Python"]);

    // useNavigate used to redirect in router
    const navigate = useNavigate();

    // Saved data if user clicked saved button
    const handleSaveEdit = () => {
        setStudentDetails([studentName,
            studentBio,
            studentWebsite,
            studentLinkedin,
            studentGithub,
            studentInstagram,
            studentEmail,
            studentCollege,
            studentCourse,
            studentPassYear,
            studentCurrentSemYear,
            studentLocation
        ]);
        toast.success("Saved Successfully!");
        setTimeout(() => {
            navigate('/profile');
        }, 2000);
    }

    // handle cancel when edit (managing by main data)
    const handleCancelEdit = () => {
        navigate('/profile');
    }

    // when clicked to choose file for image then post request to cloudinay with payload image to get image-link
    const getImageDetails = async (pic) => { // pics is user entered image
        // when upload picture then load button
        setLoading(true); // when loading starts
        // if pics is undefined then popup error
        if (pic === undefined) {
            toast.warn("Please Select an Image");
            return; // no move forward
        }

        // if type is jpeg and png only then only upload
        if ((pic.type === "image/jpeg") || (pic.type === "image/png")) {

            // using formData of JS for sending post request to cloudinary api

            const picData = new FormData();

            // FormData JS object used for data format when sending body in HTTP requests, 
            // often used in web applications for tasks like file uploads.

            picData.append("file", pic);
            picData.append("upload_preset", "chat-app");
            picData.append("cloud_name", "hackethon-users-image");

            try {
                // desctructured data is giving all details about uploaded image
                const { data } = await axios.post("https://api.cloudinary.com/v1_1/hackethon-users-image/image/upload"
                    , picData) // send payLoad
                console.log(data);
                console.log(data.url);
                // Picture is setted
                setPic(data.url.toString());
                setLoading(false);
            }
            catch (error) {
                toast.error("Failed to upload image");
                setLoading(false);
            }

        } else {
            toast.warn("Please select image");
            setLoading(false);
            return;
        }
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
                            onClick={handleSaveEdit}
                        >SAVE</button>
                        <button className='edit_button custom-button '
                            onClick={handleCancelEdit}
                        >CANCEL</button>

                    </div>
                </div>


                {/* user details strudents  */}
                <div className="user_details text-white flex flex-wrap justify-center items-center px-0 gap-20 w-full  py-8 shadow-sm shadow-gray-600">

                    {/* images name descr social links changed from 30vw */}
                    <div className="imp_show flex flex-col items-center gap-6 px-2 py-2 min-w-[25vw]">

                        {/* image name bio */}
                        <div className="top_details flex flex-col items-center gap-5 px-[0vw]">

                            {/* image and name */}
                            <div className="name-and-image flex flex-col items-center gap-4 ">
                                <div className="image_box bg-slate-900 w-32 h-32 rounded-full cursor-pointer hover:bg-gray-400 shadow-xl shadow-blue-700 ">
                                    {/* button content is changing to circluar progress when upload image */}
                                    {loading ?
                                        (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: '3rem' }}>
                                            <CircularProgress color="inherit" size={28} />
                                        </Box>
                                        ) : (
                                            <>
                                                <img src={pic} alt="user" className='p-[0.2rem] transition-all duration-500 bg-slate-900 w-32 h-32 rounded-full cursor-pointer hover:bg-gray-400 shadow-xl shadow-blue-700 overflow-hidden' />
                                                <input
                                                    accept='image/*'
                                                    // input image handle by getImageDetails method
                                                    onChange={(e) => getImageDetails(e.target.files[0])}
                                                    type="file"
                                                    id="profile_file" className='hidden ' />
                                                <label htmlFor="profile_file" className='relative top-[-1.6rem] left-4 pb-1 px-1 rounded-lg text-[0.9rem] text-white bg-purple-950 ' >Change Image</label>
                                            </>
                                        )}
                                </div>

                                <h2 className='text-3xl font-semibold opacity-90'>

                                    <input
                                        onChange={(e) => setStudentName(e.target.value)}
                                        type="text" className='bg-gray-700 text-lg pl-2 text-gray-200 font-normal rounded w-64 border-[1px]  border-gray-400 focus:border-blue-600 placeholder:Enter Your Name' name="" value={studentName} id="" />
                                </h2>
                            </div>

                            {/* bio of students */}
                            <div className="bio w-full max-w-[34vw]">
                                <p className='bio_details text-center text-xl custom-values' >
                                    <textarea
                                        className='textarea_bio min-h-[100px] min-w-[30vw]  text-lg pl-2 py-1 bg-gray-700 text-gray-200 font-normal rounded  border-[1px]  border-gray-400 focus:border-blue-600'
                                        placeholder="Your bio"
                                        onChange={(e) => setStudentBio(e.target.value)}
                                    >
                                    </textarea>
                                </p>


                            </div>



                            {/* linlks of social media */}
                            <div className="social_links flex flex-col gap-2 w-full pl-[5vw] text-xl">

                                {/* My Website link */}
                                <div className="website_link flex gap-3">
                                    <LinkIcon className='' />
                                    <input
                                        onChange={(e) => setStudentWebsite(e.target.value)}
                                        type="text"
                                        className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                        placeholder="Your Website"
                                        name=""
                                    />
                                </div>
                                {/* linkedin link */}
                                <div className="linkedin_link flex gap-3">
                                    <LinkedInIcon className='' />
                                    <input
                                        onChange={(e) => setStudentLinkedin(e.target.value)}
                                        type="text"
                                        className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                        placeholder="Linkedin Link"
                                        name=""
                                    />
                                </div>
                                {/* github link */}
                                <div className="github_link flex gap-3">
                                    <GitHubIcon className='' />
                                    <input
                                        onChange={(e) => setStudentGithub(e.target.value)}
                                        type="text"
                                        className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                        placeholder="Github Link"
                                        name=""
                                    />
                                </div>

                                {/* instagram link */}
                                <div className="instagram_link flex gap-3">
                                    <InstagramIcon className='' />
                                    <input
                                        onChange={(e) => setStudentInstagram(e.target.value)}
                                        type="text"
                                        className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                        placeholder="Instagram Link"
                                        name=""
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="background_info flex flex-col justify-center items-center gap-4">

                        {/* basic details of User */}
                        <div className="basic_details flex flex-col pt-7 px-0 gap-4 text-xl">

                            {/* email */}
                            <div className="user_email flex items-center gap-3">
                                <span className='small_heading' >Email &nbsp; &nbsp; &nbsp; : </span>

                                <input
                                    onChange={(e) => setStudentEmail(e.target.value)}
                                    type="email"
                                    className=" bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                    placeholder="Your Email"
                                    name=""
                                />
                            </div>

                            {/* Collage */}
                            <div className="user_collge flex items-center  gap-3">
                                <span className='small_heading opacity-95' >Collage  &nbsp; : </span>

                                <input
                                    onChange={(e) => setStudentCollege(e.target.value)}
                                    type="text"
                                    className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                    placeholder="Your College"
                                    name=""
                                />
                            </div>

                            {/* Courses */}
                            <div className="user_course flex items-center  gap-3">
                                <span className='small_heading opacity-95' >Course  &nbsp; &nbsp; : </span>


                                <input
                                    onChange={(e) => setStudentCourse(e.target.value)}
                                    type="text"
                                    className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                    placeholder="Your Course"
                                    name=""
                                />
                            </div>

                            {/* Passout Year */}
                            <div className="user_pass_year flex items-center  gap-3">
                                <span className='small_heading opacity-95' >PassYear &nbsp;: </span>


                                <input
                                    onChange={(e) => setStudentPassYear(e.target.value)}
                                    type="text"
                                    className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                    placeholder="Your PassYear"
                                    name=""
                                />
                            </div>

                            {/* SEM/ YEAR */}
                            <div className="user_year_sem flex items-center  gap-3">
                                <span className='small_heading opacity-95' >Sem/Year :</span>

                                <input
                                    onChange={(e) => setStudentCurrentSemYear(e.target.value)}
                                    type="text"
                                    className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                    placeholder="Your Sem/Year"
                                    name=""
                                />
                            </div>

                            <div className="user_location flex items-center  gap-3">
                                <span className='small_heading opacity-95' >Location &nbsp;: </span>

                                <input
                                    onChange={(e) => setStudentLocation(e.target.value)}
                                    type="text"
                                    className="bg-gray-700 text-lg pl-2 text-gray-200  font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600"
                                    placeholder="Your Location"
                                    name=""
                                />
                            </div>

                        </div>


                        <div className="user_all_skills  flex items-center flex-col  gap-2 text-xl ">

                            {/* technology used */}
                            <div className="technologies_names flex w-full  flex-col items-center ">
                                {/* technology listed options */}
                                <div className="show_technologies flex w-full items-center gap-3 ">
                                    <div className='small_heading' >Technology : </div>

                                    {/* selections of technologies */}
                                    {/* <select
                                        onChange={addTechnologies}
                                        multiple={false}
                                        className='cursor-pointer h-5 text-[1rem] text-black max-w-[100px]'
                                        name=""
                                        id=""
                                    >
                                        <option value="">_SELECT_</option>
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
                                    </select> */}

                                    <CustomSelection listValues={listTechnologies} values={technologiesList} setValues={setTechnologiesList} />


                                </div>


                            </div>
                            {/* technology which is selected */}
                            <div className=" my-2 flex flex-wrap max-w-[20rem] justify-center items-center gap-1 select-none">


                                {/* show all technologies which is selected by selectedTechnology state */}
                                {
                                    technologiesList.map((name) => {
                                        return (
                                            <React.Fragment key={name}>
                                                {/* one selected */}
                                                <div className="technology_box selected_options ">
                                                    <span>{name}</span>
                                                    <CloseIcon
                                                        onClick={() => {
                                                            const filteredOptions = technologiesList.filter((currName) => currName !== name);
                                                            setTechnologiesList(filteredOptions);
                                                        }}
                                                        className='selected_options_close ' style={{ height: '1.2rem', width: '1.2rem' }} />
                                                </div>
                                            </React.Fragment>
                                        )
                                    })

                                }

                            </div>


                            {/* Core Programming Lnagugae */}
                            <div className="programming_language_names w-full flex flex-col ">
                                {/* programming language listed options */}
                                <div className="show_programming_language flex items-center gap-1">
                                    <div className='small_heading' >Programming : </div>

                                    {/* selections of Programming */}

                                    {/* <select
                                        onChange={addProgrammings}
                                        multiple={false}
                                        className='cursor-pointer h-5 text-[1rem] text-black w-[75px]' name="" id="">
                                        <option value="">_SELECT_Language</option>
                                        <option value="C">C</option>
                                        <option value="C++">C++</option>
                                        <option value="Python">Python</option>
                                        <option value="Java">Java</option>
                                    </select> */}

                                    <CustomSelection listValues={listProgramming} values={programmingList} setValues={setProgrammingList} />


                                </div>

                                {/* technology which is selected */}
                                <div className=" my-2 flex flex-wrap max-w-[20rem] justify-center items-center gap-1 select-none">

                                    {/* show all prpogramming lang which is selected by selectedTechnology state */}
                                    {
                                        programmingList.map((name) => {
                                            return (
                                                <React.Fragment key={name}>
                                                    {/* one selected */}
                                                    <div className="language_box selected_options" >
                                                        <span>{name}</span>
                                                        <CloseIcon
                                                            onClick={() => {
                                                                const filteredOptions = programmingList.filter((currName) => currName !== name);
                                                                setProgrammingList(filteredOptions);
                                                            }}
                                                            className='selected_options_close custom-transition' style={{ height: '1.2rem', width: '1.2rem' }} />
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <ToastContainer />
        </>
    )
}

export default EditProfile
