import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { defaultQuestions } from "./defaultQuestions";
import InputTypeQuestion from "../questions/InputTypeQuestion";
import RadioTypeQuestion from "../questions/RadioTypeQuestion";
import SubmitButton from "../submitButton/SubmitButton";
import AddQuestionDialog from "../addQuestionDialog/AddQuestionDialog";

const QuestionsList = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [calculatedWaterByDay, setCalculatedWaterByDay] = useState();

  const onSubmit = (data) => {
    const recommendedDailyWater = calculate(data);
    setCalculatedWaterByDay(recommendedDailyWater);
  };

  const calculate = (formData) => {
    const questionsNames = [];

    defaultQuestions.forEach((defaultQuestion) => questionsNames.push(defaultQuestion.name));

    const questionsNamesException = ["vaha", "kategorie", "pocasi"];
    const questionNamesWithPlusOperation = questionsNames.filter(
      (question) => !questionsNamesException.includes(question)
    );

    let calculation = formData["vaha"] * formData["kategorie"];

    questionNamesWithPlusOperation.forEach(
      (question) =>
        (calculation += Number(formData[question]))
    );

    calculation = calculation * Number("1." + formData["pocasi"]);

    return Math.round(calculation);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2">Kalkulačka pitného režimu</Typography>
      <Box
        sx={{
          textAlign: "left",
          width: "fit-content",
          mx: "auto",
        }}
      >
        <AddQuestionDialog />
        <form onSubmit={handleSubmit(onSubmit)}>
          {defaultQuestions.map((question) => {
            return question.type === "input" ? (
              <InputTypeQuestion
                key={question?.name}
                formControl={control}
                errors={errors}
                {...question}
              />
            ) : (
              <RadioTypeQuestion
                key={question?.name}
                formControl={control}
                errors={errors}
                {...question}
              />
            );
          })}
          <SubmitButton buttonText={"Vypočítat"} />
        </form>
        <RecommendedDailyWatterSection
          calculatedWaterByDay={calculatedWaterByDay}
        />
      </Box>
    </Container>
  );
};

const RecommendedDailyWatterSection = ({ calculatedWaterByDay }) => {
  if (!calculatedWaterByDay) return null;

  return <Box sx={{mt: 4}}>Dnes byste měli vypít {calculatedWaterByDay / 1000} l vody.</Box>;
};

export default QuestionsList;
