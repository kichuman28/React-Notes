import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  clicked: () => void;
}

const Alert = ({children, clicked}: Props) => {

  return (
    <div
      className="alert alert-primary alert-dismissible"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={clicked}
      >
      </button>
    </div>
  );
};

export default Alert;
