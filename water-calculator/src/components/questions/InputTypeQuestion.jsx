import { TextField, Box, FormLabel, FormControl } from "@mui/material";
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
      rules={{ required: true, min: 1 }}
      defaultValue={""}
      render={({ field }) =>
        renderInputTypeQuestion(field, title, label, errors[`${name}`])
      }
    />
  );
};

const renderInputTypeQuestion = (
  field = {},
  title = "",
  label = "",
  inputErrors
) => (
  <Box>
    <FormControl error={!!inputErrors} sx={{ mt: 1 }}>
      <FormLabel sx={{ display: "block" }}>{title}</FormLabel>
      <TextField
        {...field}
        label={label}
        type="number"
        error={!!inputErrors}
        variant="filled"
        helperText={
          inputErrors?.type === "required"
            ? `Otázka: „${title}“ je povinná`
            : inputErrors?.type === "min" &&
              "Odpověď musí být kladné číslo větší než 0"
        }
      />
    </FormControl>
  </Box>
);

export default InputTypeQuestion;
