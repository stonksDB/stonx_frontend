import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { ValidatorComponent } from "react-material-ui-form-validator";

//From https://github.com/NewOldMax/react-material-ui-form-validator/wiki/Material-ui-v1-datepickers-example
class ValidatedDatePicker extends ValidatorComponent {
  renderValidatorComponent() {
    const {
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      className,
      ...rest
    } = this.props;
    const { isValid } = this.state;

    return (
      <label>
        <DatePicker
          className={this.props.className}
          {...rest}
          error={!isValid}
          disableFuture
          helperText={(!isValid && this.getErrorMessage()) || helperText}
        />
      </label>
    );
  }
}

export default ValidatedDatePicker;
