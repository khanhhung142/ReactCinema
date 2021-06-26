import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  hidden: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
  rows: null,
  hidden: false,
};

function InputField(props) {
  const {
    field,
    type,
    label,
    placeholder,
    disabled,
    rows,
    hidden,
    onChange,
    defaultValue,
  } = props;
  const { name, onBlur } = field;
  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        name={name}
        onChange={onChange || field.onChange}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        hidden={hidden}
      />
      <ErrorMessage name={name}>
        {(msg) => <div className="err-msg"><i class="fas fa-exclamation-circle"></i>{" " +  msg}</div>} 
      </ErrorMessage>
    </FormGroup>
  );
}

export default InputField;