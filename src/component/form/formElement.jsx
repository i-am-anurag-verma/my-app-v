import React from "react";

const FormElement = (props) => {
  return (
      <div className={props.className}>
        <label className="form__label" htmlFor={props.htmlFor}>
          {props.labelText}
        </label>
        <input
          className="form__input"
          type="text"
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
        />
      </div>
  );
};

export default FormElement;
