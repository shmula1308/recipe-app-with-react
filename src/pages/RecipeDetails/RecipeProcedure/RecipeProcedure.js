import ProcedureStep from "./ProcedureStep";
import classes from "./RecipeProcedure.module.css";

const RecipeProdecure = (props) => {
  return (
    <ul className={classes["procedure-list"]}>
      <h2 className={classes.title}>Procedure</h2>
      {props.procedure.map((step, i) => {
        return <ProcedureStep key={Math.random() * 100} stepNumber={i + 1} description={step} />;
      })}
    </ul>
  );
};

export default RecipeProdecure;
