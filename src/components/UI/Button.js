import classes from "./Button.module.css";
const Button = (props) => {
  const styles = `${classes.btn} ${props.className ? props.className : ""}`;
  return (
    <button type={props.type ? props.type : "button"} className={styles}>
      {props.children}
    </button>
  );
};

export default Button;
