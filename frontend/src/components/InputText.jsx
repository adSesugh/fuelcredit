import React from 'react'

const InputText = React.forwardRef(({ onChange, onBlur, name, className, type, autoComplete, placeholder, ariaInvalid, readonly, value, multiple  }, ref) => (
    <input 
        name={name} 
        ref={ref} 
        type={type}
        onChange={onChange} 
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={ariaInvalid}
        readOnly={readonly}
        multiple={multiple}
        value={value}
        className={
            `border-gray-400 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
            className
        }
    />
))

export default InputText
