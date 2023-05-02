const Input = ({ label, id, ...props }) =>
  label?.length ? (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} className="form-control" {...props} />
    </div>
  ) : (
    <input id={id} {...props} />
  );

export default Input;
