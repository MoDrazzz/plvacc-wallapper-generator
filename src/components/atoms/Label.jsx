const Label = ({ name, label, getterFunction = () => {}, children, info }) => (
  <label className="  md:text-lg" htmlFor={name} {...getterFunction()}>
    {children ?? label}
    {info && <span className="text-gray-400"> ({info})</span>}
  </label>
);

export default Label;
