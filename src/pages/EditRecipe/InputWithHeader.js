import Input from "./Input";

const InputWithHeader = (props) => {
  return (
    <div>
      <Input
        label={props.label}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
      <button>+ Header</button>
    </div>
  );
};

export default InputWithHeader;
