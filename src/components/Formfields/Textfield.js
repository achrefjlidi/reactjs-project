import React from 'react';

const Formfield = ({onChange, id, label, value, placeholder, type, children}) => {
  return (
    <div className={`formfield ${type} ${id}`}>
        <span>
          {label || children}
        </span>
      <input
        type={'text'}
        value={value}
        id={id}
        onChange={(e) => onChange(e.target.value, id)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Formfield;