import styles from "./Button.module.css"

interface Props{
    text: string;
    color: string;
}

const Button = ({text, color}: Props) => {
  return (
    <div >
      <button className={[styles.btn, styles['btn-'+color]].join(" ")}>{text}</button>
    </div>
  )
}

export default Button
