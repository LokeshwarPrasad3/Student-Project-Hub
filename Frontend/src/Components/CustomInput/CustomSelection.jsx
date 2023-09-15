import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CustomSelection = () => {

    const [inputValue, setInputValue] = useState("");

    const [showList, setShowList] = useState(false);

    const listValues = [
        "HTML", "CSS", "JavaScript", "React", "Talwind", "Bootstrap", "NodeJS", "ExpressJS", "Mongodb"
    ]

    const toggleList = () => {
        setShowList(!showList);
    }





    return (
        <>

            <div className="selection_container font-signika flex flex-col h-full w-36 ">
                <div className="input_box w-full bg-white border-[1px] flex justify-between items-center px-1 border-gray-400 overflow-hidden">
                    <input
                    onChange={(e)=> setInputValue(e.target.value)}
                     className=' focus:outline-none w-[70%] px-1 border-none' type="text" name="" onclick="getvalue()" id="input_value" placeholder=" Search" />

                    <ExpandMoreIcon className=' cursor-pointer'
                        onClick={toggleList}
                    />
                </div>
                <ul className={`list_box bg-white ${showList ? 'block' : 'hidden'} max-h-[120px] overflow-y-auto`}>
                    {
                        listValues.map((element) => {
                            return (
                                <li className="list flex justify-center items-center w-full cursor-pointer list-none hover:bg-slate-400">{element}</li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default CustomSelection
