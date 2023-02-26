import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { defaultQuestions } from "./defaultQuestions";
import InputTypeQuestion from "../questions/InputTypeQuestion";
import RadioTypeQuestion from "../questions/RadioTypeQuestion";
import SubmitButton from "../submitButton/SubmitButton";
import AddQuestionDialog from "../addQuestionDialog/AddQuestionDialog";
import DeleteQuestionDialog from "../deleteQuestionDialog/DeleteQuestionDialog";

const QuestionsList = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [questions, setQuestions] = useState(defaultQuestions);
  const [calculatedWaterByDay, setCalculatedWaterByDay] = useState();

  const onSubmit = (data) => {
    const recommendedDailyWater = calculate(data);
    setCalculatedWaterByDay(recommendedDailyWater);
  };

  const calculate = (formData) => {
    let calculation = 0
    questions.forEach((question) => {
      calculation = question.calculateFn(calculation, Number(formData[question?.name]))
    })

    return calculation
  }

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
        <AddQuestionDialog
          questions={questions}
          addQuestionCallback={setQuestions}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          {questions.map((question) => {
            return question.type === "input" ? (
              <Box key={question?.name} sx={{mb:4}}>
                <InputTypeQuestion
                  formControl={control}
                  errors={errors}
                  {...question}
                />
                <DeleteQuestionDialog currentQuestion={question} deleteQuestionCallback={setQuestions} questions={questions} />
              </Box>
            ) : (
              <Box key={question?.name} sx={{mb:4}} >
                <RadioTypeQuestion
                  formControl={control}
                  errors={errors}
                  {...question}
                />
                <DeleteQuestionDialog currentQuestion={question} deleteQuestionCallback={setQuestions} questions={questions} />
              </Box>
            );
          })}
          <SubmitButton buttonText={"Vypočítat"} />
        </form>
        <RecommendedDailyWatterSection
          calculatedWaterByDay={calculatedWaterByDay}
          errors={errors}
        />
      </Box>
    </Container>
  );
};

const RecommendedDailyWatterSection = ({ calculatedWaterByDay, errors }) => {
  //Pokud nemám výpočet, nebo mi neprošla validace na jednotlivých otázkách, výpočet schovám (tím se vyhnu nevalidním datům)
  if (!calculatedWaterByDay || Object.keys(errors).length !== 0) return null;

  return (
    <Box sx={{ mt: 4 }}>
      Dnes byste měli vypít {calculatedWaterByDay / 1000} l vody.
    </Box>
  );
};

export default QuestionsList;
