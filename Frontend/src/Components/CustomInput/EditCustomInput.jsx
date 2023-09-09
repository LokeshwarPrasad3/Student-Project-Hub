import React from 'react'

const EditCustomInput = (props) => {

  const { type, value, onChange, placeholder } = props;

  if (type === 'input') {
    return (
      <input
        onChange={onChange}
        type="text"
        className={`bg-gray-700 text-lg pl-2 text-gray-200 font-normal rounded  border-[1px] border-gray-400 focus:border-blue-600 `}
        placeholder={placeholder} name="" value={value} id=""
      />
    )
  } else if (type === 'link') {
    return (
      <a href={value} className='custom-values' target="_blank" rel="noopener noreferrer">
        {/* https://lokeshwar-creatives.netlify.app/ */}
        {value}
      </a>
    )
  } else if (type === 'textarea') {
    return (
      <textarea
        onChange={onChange}
        className='textarea_bio min-h-[100px] min-w-[30vw]  text-lg pl-2 py-1 bg-gray-700 text-gray-200 font-normal rounded  border-[1px]  border-gray-400 focus:border-blue-600 placeholder: Your Bio' name=""
        value={value} id="" >
      </textarea>
    )
  }


  else {
    return null;
  }



}

export default EditCustomInput;
