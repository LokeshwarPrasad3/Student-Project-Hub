import React, { useState, useEffect, useContext } from 'react'
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
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { getCode, getProject, host } from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import mainContext from '../Components/context/mainContext';
import CustomRating from '../Components/ProjectComponents/CustomRating';
import CommentShow from '../Components/Popup/CommentShow';

function Folder({ name, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="structures overflow-y-auto flex flex-col ">
            <div className="root_folder flex cursor-pointer">
                {
                    isOpen ?
                        <ExpandMoreIcon /> :
                        <ChevronRightIcon />
                }
                <FolderIcon onClick={(e) => setIsOpen(!isOpen)} className='text-yellow-400' />
                <h3 className='text-lg hover:opacity-95 select-none active:text-gray-300'
                    onClick={(e) => setIsOpen(!isOpen)}
                >&nbsp;{name}</h3>
            </div>
            {isOpen && <div className={`all_files flex flex-col gap-1  pl-6`}>{children}</div>}
        </div>
    )
}

function File({ name, path }) {
    const { setCode } = useContext(mainContext);
    const codeFetch = async (path) => {
        const data = await axios.post(getCode, { path });
        const str = data.data.replace(/\\/g, '\n')
        setCode(str);
    }
    return (
        <div className="files flex cursor-pointer ">
            <SubdirectoryArrowRightIcon className='text-gray-800' />
            <CodeIcon className='text-red-500' />
            <h4 onClick={() => codeFetch(path)} className='hover:opacity-95 select-none active:text-gray-300' >&nbsp;{name}</h4>
        </div>
    )
}

function FolderStructure({ data }) {
    const renderNode = (node) => {
        if (node.type === 'folder') {
            return (
                <Folder key={node.name} name={node.name}>
                    {node.children.map(renderNode)}
                </Folder>
            );
        } else if (node.type === 'file') {
            return <File key={node.name} name={node.name} path={node.path} />;
        }
        return null;
    };

    return <div>{data.map(renderNode)}</div>;
}

const ProjectPage = () => {
    // Show comments when clicked to comments
    const [showComments, setShowComments] = useState(false);
    // close popup when clicked
    const commentClose = () => {
        setShowComments(!showComments);
    }
    // Rating value
    const [ratingValue, setRatingValue] = React.useState(2); // custom input


    const searchQuery = useSearchParams()[0];
    const PROJECTID = searchQuery.get("PROJECTID"); // null or id

    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const [project, setProject] = useState(null);

    const { code, setCode } = useContext(mainContext);
    useEffect(() => {
        if (!PROJECTID) {
            navigate("/profile");
        } else {
            fetchProject(PROJECTID);
        }
    }, [])
    const fetchProject = async (PROJECTID) => {
        const data = await axios.get(`${getProject}/${PROJECTID}`);
        if (data.data.success === false) {
            alert(data.data.msg);
            toast.error(data.data.msg);
            return;
        }
        if (data.data.length > 0) {
            setProject(data.data[0]);
        }
    }
    const data = [
        {
            type: 'folder',
            name: 'Root',
            children: [
                {
                    type: 'folder',
                    name: 'Folder 1',
                    children: [
                        { type: 'file', name: 'File 1-1.txt' },
                        { type: 'file', name: 'File 1-2.txt' },
                    ],
                },
                {
                    type: 'folder',
                    name: 'Folder 2',
                    children: [
                        { type: 'file', name: 'File 2-1.txt' },
                        { type: 'file', name: 'File 2-2.txt' },
                    ],
                },
                { type: 'file', name: 'Root File.txt' },
            ],
        },
    ];
    return (
        <>
            {/* container of project view */}
            <div className="main_container w-full">


                {/* Project basic details show container */}

                {
                    project && <>
                        <div className='project_details_container font-overpass flex flex-col bg--500 justify-center items-center mx-1 py-0 pb-5 shadow-sm shadow-blue-200 ' >

                            {/* basic details of project */}
                            <div className="project_details text-black flex gap-3 flex-col bg-slate-500 justify-center items-center py-5 pb-3 w-[97%] m-5">
                                {/* name of project container */}
                                <div className="project_name_box flex w-full justify-center">
                                    <h1 className='font-overpass  text-gray-800 text-3xl font-semibold opacity-90' >
                                        {project && (project.titel.length > 0 ? project.titel : "EXM-PROJECT")}
                                    </h1>
                                </div>

                                {/* description of project container */}
                                <div className="project_description_box w-full ">
                                    <p className='project_description text-center text-xl custom-values' >
                                        {project && (project.discription.length > 0 ? project.discription : "EXM-DESCRIPTION")}
                                    </p>
                                </div>

                                {/* technology used */}

                                {/* technology which is selected */}
                                <div className="selected_technology max-w-[450px] mb-2 flex flex-wrap justify-center items-center gap-1 select-none">
                                    <h2 className='text-xl' >Techology Used : </h2>
                                    <div className="technology_box flex flex-wrap items-center gap-1 justify-center ">
                                        {
                                            (project.usedTechnology.split(" ")).map((technology, index) => {
                                                return (<span key={index} className='selected_options px-1 ' >
                                                    {technology.toUpperCase()}
                                                </span>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>


                            {/* properties of projects */}
                            <div className="project_properties text-black flex justify-center items-center gap-5 flex-wrap">
                                {/* <div className="project_properties text-black grid grid-cols-[155px,1fr] gap-5 flex-wrap"> */}


                                {/* contributers container */}
                                <div className="show_contributers min-w-[220px] flex flex-col gap-4 justify-center items-center  py-5">
                                    {/* <h2>Contributes</h2> */}
                                    <select className='text-black min-w-[155px] bg-slate-200' name="" id="">
                                        <option value="Puran Verma">_CONTRIBUTERES_</option>
                                        {
                                            project.contributors.map((name) => {
                                                return (
                                                    <option classname="text-sm" key={name} value={`${name}`}>{name}</option>

                                                )
                                            })
                                        }
                                    </select>
                                    <button className='req_button  project_page_button '>Req-Contribute</button>
                                </div>

                                {/* documentation and download */}
                                <div className="project_buttons min-w-[220px] flex flex-col justify-center items-center gap-4  py-5">
                                    <div className="documentation_button">
                                        <Link to="/docs" className="docu_button  project_page_button ">See-Docs</Link>
                                    </div>
                                    <div className="">
                                        <Link target='_blank' to={`${project.filePath}`}><button className="download_button  project_page_button ">
                                            downloading
                                        </button></Link>
                                    </div>
                                </div>

                                {/* links live or eloborate post videos */}
                                <div className="project_links min-w-[220px]  flex flex-col justify-center items-center gap-2  py-7">
                                    <select className='text-black w-[155px]  bg-slate-200' name="" id="">
                                        <option value="GITHUB">GITHUB</option>
                                        <option value="YOUTUBE">YOUTUBE</option>
                                        <option value="INSTAGRAM">INSTAGRAM</option>
                                        <option value="LINKEDIN">LINKEDIN</option>
                                    </select>
                                    <div className="show_links text-black flex items-center justify-around gap-2 ">
                                        <GitHubIcon className='' />
                                        <Link className='text-blue-900' target='_blank' to="https://github.com">GitHub-Link</Link>
                                    </div>
                                </div>

                                {/* rating container */}
                                <div className="user_rating min-w-[220px] flex flex-col  items-center text-black justify-center gap-1 py-5">
                                    <div className="rating_box justify-center items-center">
                                        <CustomRating value={5} fillColor="red" emptyColor="yellow" />
                                    </div>
                                    <button className="download_button project_page_button "
                                        onClick={() => setShowComments(!showComments)}
                                    >Comments</button>
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* PROJECT FILES FOLDERS SHOW */}

                <div className="project_folder_container mb-4 font-overpass flex  h-[100vh]  shadow-sm shadow-blue-200">

                    {/* desgin of folder structure */}
                    <div className="folder_structures w-[28rem] text-black flex flex-col px-4 py-5 gap-3 m-5 shadow-sm shadow-blue-200 ">

                        <div className="stucture_heading flex font-signika">
                            <h2 className='text-xl font-semibold opacity-90' >FOLDER STRUCTURE</h2>
                        </div>

                        {/* folder structure design */}
                        <div className="structures overflow-y-auto flex flex-col ">

                            {/* root folder design --------------------*/}
                            {project && <FolderStructure data={[project.folderStructure]} />}
                        </div>


                    </div>

                    {/* design textarea for code showing */}

                    <div className="code_space grid grid-rows-[auto,1fr] gap-3 w-full  font-overpass p-4 my-1">
                        <div className="code_heading   bg-[#fff] text-black flex items-center justify-between rounded-lg py-1 px-20">
                            <h2 className="text-xl font-semibold opacity-90">CODE SECTION</h2>
                            <button className="py-1 inline-flex items-center gap-1 tracking-wide font-signika " >
                                {
                                    !copied ? (
                                        <span
                                            onClick={() => {
                                                console.log("clicked");
                                                navigator.clipboard.writeText(code);
                                                setCopied(true);
                                                setTimeout(() => {
                                                    setCopied(false);
                                                }, 1000);
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
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                </div>

            </div>


            {/* Show comments when required */}
            {
                showComments ?
                    <CommentShow
                        commentClose={commentClose}
                    /> : ""
            }
        </>
    )
}

export default ProjectPage
