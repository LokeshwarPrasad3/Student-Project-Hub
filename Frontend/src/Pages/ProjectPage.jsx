import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
// eslint-disable-next-line
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// eslint-disable-next-line
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
// eslint-disable-next-line
import InstagramIcon from '@mui/icons-material/Instagram';
import GradeIcon from '@mui/icons-material/Grade';
import FolderIcon from '@mui/icons-material/Folder';
// eslint-disable-next-line
import SourceIcon from '@mui/icons-material/Source';
import CodeIcon from '@mui/icons-material/Code';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// expand icon for folders
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomRating from '../Components/ProjectComponents/CustomRating';
import CommentShow from '../Components/Popup/CommentShow';


const ProjectPage = () => {


    // state for when clicked to folder then show files toggle
    const [showFolder, setShowFolder] = useState(false);

    // Show comments when clicked to comments
    const [showComments, setShowComments] = useState(false);

    // Rating value
    const [ratingValue, setRatingValue] = React.useState(2);

    // sample code for display
    const codeString =
        `
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeEditor() {
    const codeString = '(num) => num + 1';

    return (
        <div className="grid grid-rows-[auto,1fr] gap-3 w-full   p-4">
            <div className="bg-gray-900 text-white text-center border-l-[1px] border-gray-400 rounded py-2">
                <h2 className="text-xl font-semibold opacity-90">CODE SECTION</h2>
            </div>
            <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden ">
                <SyntaxHighlighter language="javascript"
                style={atomOneDark}
                customStyle={{
                    padding: '25px'
                }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default CodeEditor;
    `
        ;



    // state when copy code then show copied 
    const [copied, setCopied] = useState(false);

    // Comment close popup
    const commentClose= () =>{
        setShowComments(!showComments);
    }


    return (
        <>
            <Navbar />
            {/* container of project view */}
            <div className="main_container w-full">


                {/* Project basic details show container */}
                <div className='project_details_container font-signika flex flex-col bg--500 justify-center items-center mx-1 py-0 pb-5 shadow-sm shadow-blue-200 ' >

                    {/* basic details of project */}
                    <div className="project_details text-white flex gap-3 flex-col justify-center items-center py-5 pb-3  ">
                        {/* name of project container */}
                        <div className="project_name_box flex w-full justify-center">
                            <h1 className='font-signika  text-gray-100 text-3xl font-semibold opacity-90' >SMART CANTEEN</h1>
                        </div>

                        {/* description of project container */}
                        <div className="project_description_box lg:w-[80%] ">
                            <p className='project_description text-center text-xl custom-values' >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi atque amet quasi id architecto? Natus commodi adipisci assumenda? Mollitia.
                            </p>
                        </div>

                        {/* technology used */}

                        {/* technology which is selected */}
                        <div className="selected_technology max-w-[450px] mb-2 flex flex-wrap justify-center items-center gap-1 select-none">
                            <h2 className='text-xl' >Techology Used : </h2>
                            <div className="technology_box flex flex-wrap items-center gap-1 justify-center ">
                                <span className='selected_options px-1 ' >HTML</span>
                                <span className='selected_options px-1' >CSS</span>
                                <span className='selected_options px-1' >JavaScript</span>
                                <span className='selected_options px-1' >REACT</span>
                            </div>
                        </div>
                    </div>


                    {/* properties of projects */}
                    <div className="project_properties text-white flex justify-center items-center gap-5 flex-wrap">
                        {/* <div className="project_properties text-white grid grid-cols-[155px,1fr] gap-5 flex-wrap"> */}


                        {/* contributers container */}
                        <div className="show_contributers min-w-[220px] flex flex-col gap-4 justify-center items-center  py-2">
                            {/* <h2>Contributes</h2> */}
                            <select className='text-black min-w-[155px]' name="" id="">
                                <option value="Puran Verma">_CONTRIBUTERES_</option>
                                <option value="Puran Verma">Puran Verma</option>
                                <option value="Surendra Kumar "> Surendra Kumar</option>
                                <option value="Dushyant Das">Dushyant Das</option>
                            </select>
                            <button className='req_button  fav_button '>Req-Contribute</button>
                        </div>

                        {/* documentation and download */}
                        <div className="project_buttons min-w-[220px] flex flex-col justify-center items-center gap-4  py-2">
                            <div className="documentation_button">
                                <Link to="/docs" className="docu_button  fav_button ">See-Docs</Link>
                            </div>
                            <div className="">
                                <button className="download_button  fav_button ">DOWNLOAD</button>
                            </div>
                        </div>

                        {/* links live or eloborate post videos */}
                        <div className="project_links min-w-[220px]  flex flex-col justify-center items-center gap-2  py-1">
                            <select className='text-black w-[155px]' name="" id="">
                                <option value="GITHUB">GITHUB</option>
                                <option value="YOUTUBE">YOUTUBE</option>
                                <option value="INSTAGRAM">INSTAGRAM</option>
                                <option value="LINKEDIN">LINKEDIN</option>
                            </select>
                            <div className="show_links text-white flex items-center justify-around gap-2 ">
                                <GitHubIcon className='' />
                                <a className='text-blue-200' href="https://github.com">GitHub-Link</a>
                            </div>
                        </div>

                        {/* rating container */}
                        <div className="user_rating min-w-[220px] flex flex-col  items-center text-white justify-center gap-1   pb-1">
                            <div className="rating_box justify-center items-center">
                                <CustomRating value={3} fillColor="yellow" emptyColor="white" />
                            </div>
                            <button className="download_button fav_button "
                                onClick={() => setShowComments(!showComments)}
                            >Comments</button>
                        </div>
                    </div>
                </div>



                {/* PROJECT FILES FOLDERS SHOW */}

                <div className="project_folder_container mb-4 font-signika flex  h-[100vh]  shadow-sm shadow-blue-200">

                    {/* desgin of folder structure */}
                    <div className="folder_structures w-[28rem] text-white flex flex-col px-4 py-5 gap-3 shadow-sm shadow-blue-200 ">

                        <div className="stucture_heading flex">
                            <h2 className='text-xl font-semibold opacity-90' >FOLDER STRUCTURE</h2>
                        </div>

                        {/* folder structure design */}
                        <div className="structures overflow-y-auto flex flex-col ">

                            {/* root folder design */}
                            <div className="root_folder flex cursor-pointer">
                                {
                                    showFolder ?
                                        <ExpandMoreIcon /> :
                                        <ChevronRightIcon />
                                }
                                <FolderIcon className='text-yellow-400' />
                                <h3 className='text-lg hover:opacity-95 select-none active:text-gray-300'
                                    onClick={(e) => setShowFolder(!showFolder)}
                                >&nbsp;Smart Canteen Project</h3>
                            </div>

                            {/* another files of folder */}
                            <div className={`all_files ${showFolder ? 'flex' : 'hidden'}  flex-col gap-1  pl-6`}>

                                {/* file1 */}
                                <div className="files flex cursor-pointer ">
                                    <SubdirectoryArrowRightIcon className='text-gray-300' />
                                    {/* <HtmlIcon className='text-red-500'/> */}
                                    {/* <SourceIcon className='text-red-500'/> */}
                                    <CodeIcon className='text-red-500' />
                                    <h4 className='hover:opacity-95 select-none active:text-gray-300' >&nbsp;Index.html</h4>
                                </div>

                                {/* file2 */}
                                <div className="files flex cursor-pointer ">
                                    <SubdirectoryArrowRightIcon className='text-gray-300' />
                                    {/* <CssIcon className='text-blue-500'/> */}
                                    {/* <SourceIcon className='text-blue-500'/> */}
                                    <CodeIcon className='text-blue-500' />
                                    <h4 className='hover:opacity-95 select-none active:text-gray-300' >&nbsp;Style.css</h4>
                                </div>
                                {/* file3 */}
                                <div className="files flex cursor-pointer ">
                                    <SubdirectoryArrowRightIcon className='text-gray-300' />
                                    {/* <JavascriptIcon className='text-yellow-500' /> */}
                                    {/* <SourceIcon className='text-yellow-500' /> */}
                                    <CodeIcon className='text-yellow-500' />
                                    <h4 className='hover:opacity-95 select-none active:text-gray-300' >&nbsp;Script.js</h4>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* design textarea for code showing */}
                    {/* <div className="grid grid-rows-[auto,1fr] gap-3 w-full   p-4">
                        <div className="bg-gray-900 text-white text-center border-l-[1px] border-gray-400 rounded py-2">
                            <h2 className="text-xl font-semibold opacity-90">CODE SECTION</h2>
                        </div>
                        <div className="bg-gray-100">
                            <textarea
                                rows="10"
                                cols="30"
                                className="w-full h-full border border-gray-400 p-4 text-gray-800 resize-none"/>
                        </div>
                    </div> */}

                    <div className="code_space grid grid-rows-[auto,1fr] gap-3 w-full  font-signika p-4">
                        <div className="code_heading  w-full bg-gray-900 text-white flex items-center justify-between rounded py-1 px-20">
                            <h2 className="text-xl font-semibold opacity-90">CODE SECTION</h2>
                            <button className="py-1 inline-flex items-center gap-1 tracking-wide " >
                                {
                                    !copied ? (
                                        <span
                                            onClick={() => {
                                                console.log("clicked");
                                                navigator.clipboard.writeText(codeString);
                                                setCopied(true);
                                                setTimeout(() => {
                                                    setCopied(false);
                                                }, 3000);
                                            }
                                            }
                                            className='cursor-pointer' >
                                            <ContentPasteOutlinedIcon />
                                            &nbsp; Copy Text
                                        </span>

                                    ) : (
                                        <span

                                            className='cursor-pointer'>
                                            <DoneIcon />
                                            &nbsp; Copied!
                                        </span>
                                    )
                                }
                            </button>
                        </div>
                        <div className="actual_code min-w-[25rem] bg-[#3a404d] rounded-md overflow-x-scroll overflow-y-scroll mx-10">
                            <SyntaxHighlighter language="jsx"
                                style={atomOneDarkReasonable}
                                customStyle={{
                                    padding: '25px',
                                    fontFamily: 'Fira Code',
                                    height: '100%'
                                }}

                                showLineNumbers={true}
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                </div>


            </div>



            {/* Show comments when required */}
            {
                showComments ?
                    <CommentShow
                      onClose={commentClose}
                    /> : ""
            }
        </>
    )
}

export default ProjectPage
