const Checkbox = ({ label, id, ...props }) =>
  label?.length ? (
    <div className="mb-3 form-check">
      <input id={id} type="checkbox" className="form-check-input" {...props} />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </div>
  ) : (
    <input type="checkbox" id={id} {...props} />
  );

export default Checkbox;
