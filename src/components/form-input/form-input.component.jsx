import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <p className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </p>
  );
};

export default FormInput;
