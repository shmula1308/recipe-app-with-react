import ProcedureStep from "./ProcedureStep";
import classes from "./RecipeProcedure.module.css";

const RecipeProdecure = (props) => {
  return (
    <ul className={classes["procedure-list"]}>
      <div className={classes.title}>
        <h2>Procedure</h2>
      </div>
      {props.procedure.map((step, i) => {
        return <ProcedureStep key={Math.random() * 100} stepNumber={i + 1} description={step} />;
      })}
    </ul>
  );
};

export default RecipeProdecure;
