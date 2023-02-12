import { TextField, Box, FormLabel, FormHelperText, FormControl } from "@mui/material";
import { Controller } from "react-hook-form";

const InputTypeQuestion = ({
  name = "",
  formControl,
  title = "",
  label = "",
  errors,
}) => {
  return (
    <Controller
      name={name}
      control={formControl}
      rules={{ required: true }}
      defaultValue={""}
      render={({ field }) =>
        renderInputTypeQuestion(field, title, label, !!errors[`${name}`])
      }
    />
  );
};

const renderInputTypeQuestion = (
  field = {},
  title = "",
  label = "",
  hasError
) => (
  <Box>
    <FormControl error={hasError} sx={{ mb: 4, mt: 1 }}>
      <FormLabel sx={{ display: "block" }}>{title}</FormLabel>
      <TextField
        {...field}
        label={label}
        type="number"
        error={hasError}
        variant="filled"
      />
      {hasError && (
        <FormHelperText>{`Otázka: „${title}“ je povinná`}</FormHelperText>
      )}
    </FormControl>
  </Box>
);

export default InputTypeQuestion;
