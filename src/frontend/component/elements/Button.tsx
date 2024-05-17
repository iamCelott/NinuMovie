import { ReactNode } from "react";
type buttonProps = {
  onClick?: (e: any) => void;
  children: ReactNode;
  type?: any;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "succes"
    | "danger"
    | "warning"
    | "light"
    | "dark"
    | "transparent";
  className?: string;
};

const Button = (props: buttonProps) => {
  let buttonClassname: string = `focus:outline-none px-4 py-2 whitespace-nowrap ${props.className} `;

  if (props.variant === "primary") {
    buttonClassname += "bg-blue-500 hover:bg-blue-600 text-white";
  } else if (props.variant === "secondary") {
    buttonClassname += "bg-slate-300 hover:bg-slate-400 text-black";
  } else if (props.variant === "succes") {
    buttonClassname += "bg-green-600 hover:bg-green-500 text-white";
  } else if (props.variant === "danger") {
    buttonClassname += "bg-red-600 hover:bg-red-800 text-white";
  } else if (props.variant === "warning") {
    buttonClassname += "bg-yellow-500 hover:bg-yellow-600 text-white";
  } else if (props.variant === "light") {
    buttonClassname += "bg-white hover:bg-gray-200 text-black";
  } else if (props.variant === "dark") {
    buttonClassname += "bg-gray-700 hover:bg-gray-600 text-white";
  } else if (props.variant === "transparent") {
    buttonClassname += "bg-transparent hover:bg-gray-600 text-white";
  }

  return (
    <button
      type={props.type}
      className={buttonClassname}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
