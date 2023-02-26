import Dialog from "../dialog/Dialog";

const DeleteQuestionDialog = ({
  deleteQuestionCallback = () => {},
  currentQuestion = {},
  questions = [],
}) => {
    const handleSuccess = () => { 
        deleteQuestionCallback(questions.filter((q) => q.name !== currentQuestion.name))
    }

  return (
    <>
      <Dialog
        title="Opravdu chcete tuto otázku odebrat?"
        openerTitle={"Smazat"}
        handleSuccess={handleSuccess}
      />
    </>
  );
};

export default DeleteQuestionDialog;
