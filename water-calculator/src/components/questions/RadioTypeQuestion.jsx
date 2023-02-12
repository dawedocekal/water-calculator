import {
  Box,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

const RadioTypeQuestion = ({
  name = "",
  title = "",
  options = [],
  formControl,
  errors,
}) => {
  return (
    <Controller
      name={name}
      control={formControl}
      defaultValue={""}
      rules={{ required: true }}
      render={({ field }) =>
        renderRadioTypeQuestion(field, title, options, !!errors[`${name}`])
      }
    />
  );
};

const renderRadioTypeQuestion = (
  field = {},
  title = "",
  options = [],
  hasError
) => (
  <Box>
    <FormControl error={hasError} sx={{ mb: 4, mt: 1 }}>
      <FormLabel>{title}</FormLabel>
      <RadioGroup {...field}>
        {renderRadioOptions(options)}
      </RadioGroup>
      {hasError && (
        <FormHelperText>{`Otázka: „${title}“ je povinná`}</FormHelperText>
      )}
    </FormControl>
  </Box>
);

const renderRadioOptions = (options) => {
  return options.map((option) => {
    const { value: optionValue, label: optionLabel } = option;
    return (
      <FormControlLabel
        key={optionValue}
        value={optionValue}
        control={<Radio />}
        label={optionLabel}
      />
    );
  });
};

export default RadioTypeQuestion;
