import { Fragment } from "react";
import classes from "./ProcedureStep.module.css";

const ProcedureStep = (props) => {
  return (
    <Fragment>
      <li className={classes.step}>
        <span className={classes["step-label"]}>Step {props.stepNumber}</span>
        <p className={classes.description}>{props.description}</p>
      </li>
    </Fragment>
  );
};

export default ProcedureStep;
