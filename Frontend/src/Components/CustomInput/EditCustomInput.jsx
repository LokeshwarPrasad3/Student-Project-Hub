import React from 'react'
import { Link } from 'react-router-dom';

// We using input type when edit profile making component because of more used 

const EditCustomInput = (props) => {

  // getting props their types, values, onChange method, and placeholder
  const { type, value, onChange, placeholder } = props;


  if (type === 'input') {   // if input passed as input type 
    return (
      <input
        onChange={onChange}
        type="text"
        className={`bg-gray-700 text-lg pl-2 text-gray-200 font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600 `}
        placeholder={placeholder} name="" value={value} id=""
      />
    )

  } else if (type === 'link') {   // if input is anchor tag 
    return (
      <Link to={value} className='custom-values' target="_blank" rel="noopener noreferrer">
        {/* https://lokeshwar-creatives.netlify.app/ */}
        {value}
      </Link>
    )
  } else if (type === 'textarea') {  // if input is textarea
    return (
      <textarea
        onChange={onChange}
        className='textarea_bio min-h-[100px] min-w-[30vw]  text-lg pl-2 py-1 bg-gray-700 text-gray-200 font-normal rounded  border-[1px]  border-gray-400 focus:border-blue-600 placeholder: Your Bio' name=""
        value={value} id="" >
      </textarea>
    )
  }

  // in case if not matched
  else {
    return null;
  }

}

export default EditCustomInput;
