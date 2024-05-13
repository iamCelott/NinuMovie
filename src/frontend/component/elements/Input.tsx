type InputProps = {
  type: "text" | "password" | "email" | "file" | "radio";
  className?: string;
  name?: string;
};

const Input = ({ type, className, name }: InputProps) => {
  let defaultClassname = `${className} px-3 py-1 outline-none `;

  if (type == "text" || type == "email" || type == "password") {
    defaultClassname += "bg-slate-100";
  }

  return (
    <>
      <input type={type} className={defaultClassname} name={name} id={name} />
    </>
  );
};

export default Input;
