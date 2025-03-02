interface Props {
  children: string;
  onButtonClick: () => void;
  color?: 'primary' | 'secondary';
}

const CustomButton = ({ children, onButtonClick, color="primary"}: Props) => {


  return (
    <button
      className={"btn btn-" + color}
      type="button"
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
