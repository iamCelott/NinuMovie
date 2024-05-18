type InputProps = {
  type: "text" | "password" | "email" | "file" | "radio" | "checkbox";
  className?: string;
  name?: string;
  onChange?: any;
  onKeyDown?: any;
};

const Input = ({ type, className, name, onChange, onKeyDown }: InputProps) => {
  let defaultClassname = `${className} px-3 py-1 outline-none `;

  if (type == "text" || type == "email" || type == "password") {
    defaultClassname += "bg-slate-100";
  }

  return (
    <>
      <input
        type={type}
        onChange={onChange}
        className={defaultClassname}
        name={name}
        id={name}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default Input;
