import React from 'react'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

const ProjectCard = () => {
    return (
        <>
            {/* all projects container with headings  */}
            <div className="all_projects_container text-white px-16  flex flex-col items-center justify-center w-full py-9 gap-5 shadow-sm shadow-gray-600">
                {/* heding part */}
                <div className="disclaimers items-center flex w-full justify-center">
                    <h2 className='font-signika font-semibold text-gray-300 text-2xl ' >CHECKOUT MY PROJECTS</h2>
                    {/* need filter button ongoing completed */}
                </div>

                {/* container contains all projects box */}
                <div className="projects_container flex py-4 gap-9 flex-wrap items-center justify-center ">

                    {/* projecct box */}
                    <div className="project_box flex flex-col items-center bg-[#262643] rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-sm shadow-blue-300 ">
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
                        <button className='custom-button relative top-2' >SEE PROJECT</button>
                    </div>


                    {/* projecct box */}
                    <div className="project_box flex flex-col items-center bg-[#262643] rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-sm shadow-blue-300 ">

                        <div className="status flex justify-center gap-2 items-center">
                            <span className="status text-xl text-green-500">Completed</span>
                            <FactCheckIcon />
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
                        <button className='custom-button relative top-2' >SEE PROJECT</button>
                    </div>


                    {/* projecct box */}
                    <div className="project_box flex flex-col items-center bg-[#262643] rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-sm shadow-blue-300 ">
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
                        <button className='custom-button relative top-2' >SEE PROJECT</button>
                    </div>


                    {/* projecct box */}
                    <div className="project_box flex flex-col items-center bg-[#262643] rounded-md px-5 gap-2 min-w-[404px] py-6 shadow-sm shadow-blue-300 ">
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
                        <button className='custom-button relative top-2' >SEE PROJECT</button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default ProjectCard
