import Dialog from "../dialog/Dialog";
import { useForm, Controller } from "react-hook-form";
import SubmitButton from "../submitButton/SubmitButton";
import { Box, TextField } from "@mui/material";
import { calculatePlusFn } from "../questionsList/defaultQuestions";

const FORM_INPUTS_CONSTANTS = {
  NEW_QUESTIONS_TITLE: "newQuestionTitle",
};

const AddQuestionDialog = ({
  addQuestionCallback = () => {},
  questions = [],
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newQuestion = {
      title: data[FORM_INPUTS_CONSTANTS.NEW_QUESTIONS_TITLE],
      type: "input",
      label: "Číselně",
      name: Math.random().toString(36).substring(2,10),
      calculateFn: calculatePlusFn
    };

    addQuestionCallback([...questions, newQuestion])
    reset()
  };

  return (
    <>
    <Dialog
      title="Přidat novou otázku"
      openerTitle={"Přidat otázku"}
    >
      <Box sx={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <QuestionTitle
            formControl={control}
            inputErrors={errors[FORM_INPUTS_CONSTANTS.NEW_QUESTIONS_TITLE]}
          />
          <SubmitButton buttonText={"Přidat"} />
        </form>
      </Box>
    </Dialog>
    </>
  );
};

const QuestionTitle = ({ formControl, inputErrors }) => (
  <Controller
    name={FORM_INPUTS_CONSTANTS.NEW_QUESTIONS_TITLE}
    control={formControl}
    rules={{ required: true }}
    defaultValue={""}
    render={({ field }) => (
      <Box>
        <TextField
          {...field}
          label={"Jak bude znít otázka?"}
          fullWidth={true}
          error={!!inputErrors}
          variant="filled"
          sx={{ mb: 2 }}
          helperText={inputErrors && "Toto pole je povinné"}
        />
      </Box>
    )}
  />
);

export default AddQuestionDialog;
