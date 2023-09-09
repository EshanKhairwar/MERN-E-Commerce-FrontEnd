import React from "react";

const CustomInput = (props) => {
    const {type,name,placeholder,className}=props;
  return (
    <div>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${className}`}
        />
      </div>
    </div>
  );
};

export default CustomInput;
