import React, { useState } from 'react'
// we need component and css 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// circular progress
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// axios for fetching api
// import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../CSS/Style.css';

const UploadProject = ({ onClose }) => {


    // getting project name
    const [projectName, setProjectName] = useState('');
    // getting project description
    const [description, setDescription] = useState('');
    // getting technology used as string 
    // const [technology, setTechnology] = useState('');
    // getting main technology form of arrays
    // const [allTechnology, setAllTechnology] = useState(technology.split(',').join(" "));
    const [allTechnology, setAllTechnology] = useState([]);

    // state for loading to upload picture of user
    const [loading, setLoading] = useState(false);

    // tradition method to choose folder system
    const handleTakeFolder = (event) => {
        // when upload starts then loading in button
        setLoading(true);
        try {
            // Now event.target.file is getting files data
            console.log(event.target.files[0]); // 0th element data console
            console.log(event.target.files[0].name);
            console.log(event.target.files[0].size);
            console.log(event.target.files[0].type);
            console.log(event.target.files[0].webkitRelativePath);

            // getting all files in folder object
            const folder = event.target.files;
            // making formData to post request to server api
            const formData = new FormData();

            for (const file of folder) { // iterate over folder object to append
                formData.append("files", file);
            }

            // POST METHOD SECTION
            toast.warn("Successfull image uploaded!")

            setTimeout(() => {
                // when succesfully uploaded then remove loader of button
                setLoading(false);
            }, 3000);
        }
        // if user clicked cancel then getting error
        catch (error) {
            toast.warn("Image Uploading failed!")
            // when error then remove loader of button
            setLoading(false);
        }
        // close the popup when done work
        onClose();
    }

    // when drop any folder then listen folders files
    const handleDrop = (event) => {
        // when dragging file then dont open in new tab
        event.preventDefault();
        // when upload starts then loading in button
        setLoading(true);
        console.log("dropped");
        try {
            // we getting files from dataTransfer it give what the fileList transfers
            const files = event.dataTransfer.files; // now files is objects of files

            // making formData to post request on server api
            const formData = new FormData();
            // append all details in formData
            for (const file of files) { // iterate over folder object to append
                formData.append('files', file);
            }

            // POST METHOD SECTION

            toast.success("Folder uploaded!");
            setTimeout(() => {
                // when succesfully uploaded then remove loader of button
                setLoading(false);
            }, 3000);

        }
        // if any error to drag and drop then show toast
        catch (error) {
            toast.error("folder upload failed!");
            // when error then remove loader of button
            setLoading(false);
        }

        // close the popup when done work
        onClose();

    }

    // when mouse hold folder in browser then it listen that
    const handleDragOver = (e) => {
        //  when dragging file then dont open in new tab
        console.log("dragover");
        e.preventDefault();
    };


    // UPLOAD WHOLE FORM WITH PROJECT FOLDER IN SERVER 
    const uploadProject = (event) => {
        event.preventDefault();

        // validate checking all data to not empty
        if (!projectName || !description || !allTechnology.length > 0) {
            toast.warn("Please fill all inputs");
            return;
        }

        // POSTING ON API TO DATA

        // on success fully posted on server 
        toast.success("Project has been created!");

        // do empty in input fields
        setProjectName("");
        setDescription("");
        setAllTechnology([]);


        toast.success("Folder uploaded!");
        setTimeout(() => {
            // when succesfully uploaded then remove loader of button
            setLoading(false);
        }, 3000);
    }


    return (
        <>
            <div className="project_upload z-50 transition fixed top-2 left-2/4 right-2/4 font-signika flex flex-col justify-center items-center pt-7 gap-2  ">

                {/* this includes heading part */}
                <div className="login_heading bg-white rounded-md w-[35rem]  py-4 flex justify-center items-center">
                    <h1 className=' text-2xl font-semibold  opacity-80 tracking-wide' >Upload Your Project</h1>
                </div>

                {/*  this includes upload content part */}
                <div className="upload_part bg-white rounded-md  w-[35rem]  py-0 flex justify-center items-center flex-col ">

                    {/*👉 CREATE UPLOAD PROJECT FOROM */}

                    <form action="" className="create_form  w-[35rem]  px-16 flex flex-col gap-3 py-9 pt-4" >

                        {/* for input project name */}
                        <div className="name_box flex flex-col gap-2">
                            <label htmlFor="input_project_name" className='text-[1.2rem]  font-[600] opacity-70'>Name of Project </label>
                            <input
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)} // set value when change
                                type="text" name="input_project_name" id="input_project_name" className='py-1 px-3 w-full bg-gray-100' placeholder='Enter Your Name' />
                        </div>

                        {/* for input description  */}
                        <div className="description_box flex flex-col gap-2">
                            <label htmlFor="input_project_description" className='text-[1.2rem]  font-[600] opacity-70'>Project Description </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} // set value when change
                                name="input_project_description" id="input_project_description" className='py-1 px-3 w-full bg-gray-100'
                                placeholder='Project Description' autoComplete="on" >
                            </textarea>
                        </div>

                        {/* for input TECHNOLOGY used  */}
                        <div className="technology_box flex flex-col gap-2">
                            <label htmlFor="input_project_technology" className='text-[1.2rem]   font-[600] opacity-70'>Technology Used </label>
                            <textarea
                                value={allTechnology} // getting forom of string and then array converted
                                onChange={(e) => setAllTechnology(e.target.value)} // set value when change
                                name="input_project_technology" id="input_project_technology" className='py-1 px-3 h-8 w-full bg-gray-100'
                                placeholder="HTML, CSS, JS, REACT" autoComplete="on" >
                            </textarea>

                        </div>


                        {/* for folder input  */}
                        <div className="description_box flex flex-col gap-1">
                            <h3 htmlFor="input_project_folder" className='text-[1.2rem]  font-[600] opacity-70 pb-2'>Upload Folder</h3>

                            {/* Drag and drop feature implemented */}
                            <div className="drag-drop hover:bg-slate-100 custom-transition cursor-pointer flex-all border-2 h-48 rounded-xl border-dashed border-slate-400"
                                draggable="true" // set to draggable component
                                // when drop folder then listen that event
                                onDrop={handleDrop}
                                // onDragOver measure when dragged any file in draggable box if file dragged then dont load page e.preventDefault()
                                onDragOver={handleDragOver}>
                                <div className="drop">
                                    <CloudUploadIcon className='text-blue-600' style={{ fontSize: '6rem' }} />
                                </div>
                                <div className="message w-4/6 flex justify-center items-center">
                                    <label htmlFor='input_project_folder' className='text-[1.2rem]  text-center' >Drag and drop or
                                        <span className='text-blue-700' > click here </span>
                                        to upload image</label>
                                </div>
                            </div>

                            {/* can also made default file choosing system */}
                            <input type="file"
                                id="input_project_folder"
                                // webkitdirectory=""
                                directory=""
                                onChange={handleTakeFolder}
                                className='hidden'
                            />
                        </div>

                        {/* input button to upload project */}
                        <div className="button_box flex flex-col justify-center py-4 items-center gap-4">
                            <button
                                // Upload Project button
                                onClick={uploadProject}
                                disabled={loading}
                                className='bg-blue-600 w-full py-[3px] rounded opacity-90 text-white text-[1rem] hover:bg-blue-700 text-opacity-90 '
                            >
                                {/* button content is changing to circluar progress when upload image */}
                                {loading ?
                                    (<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CircularProgress color="inherit" size={28} />
                                    </Box>
                                    ) : ('UPLOAD PROJECT')}
                            </button>
                            {/* Cancel button */}
                            <button
                                onClick={onClose}
                                className='bg-blue-600 w-full py-[3px] rounded opacity-90 text-white text-[1rem] hover:bg-blue-700 text-opacity-90 '
                            >CANCEL</button>
                        </div>

                    </form>

                </div>
            </div>


            {/* the toastify alert is added here */}
            <ToastContainer />
        </>
    )
}

export default UploadProject
