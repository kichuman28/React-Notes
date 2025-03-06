import "./Button.css"

interface Props{
    text: string;
}

const Button = ({text}: Props) => {
  return (
    <div >
      <button className="button">{text}</button>
    </div>
  )
}

export default Button
