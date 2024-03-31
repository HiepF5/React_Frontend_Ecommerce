import React from 'react'

function InputFilter({ id, value, label, checked }) {
  return (
    <div className='flex items-center'>
      <input
        id={id}
        name='size'
        defaultValue={value}
        type='checkbox'
        defaultChecked={checked}
        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
      />
      <label htmlFor={id} className='ml-3 min-w-0 flex-1 text-gray-500'>
        {label}
      </label>
    </div>
  )
}

export default InputFilter
