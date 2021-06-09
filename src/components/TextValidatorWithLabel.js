import { TextValidator } from "react-material-ui-form-validator";

const TextValidatorWithLabel = (props) => {
  return (
    <label>
      <TextValidator {...props}/>
    </label>
  );
};

export default TextValidatorWithLabel;
