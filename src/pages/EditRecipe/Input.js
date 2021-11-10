import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.control}>
      <label className={classes.label}>{props.label}</label>
      {props.description && <p className={classes.description}>{props.description}</p>}
      <input
        name={props.name}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
