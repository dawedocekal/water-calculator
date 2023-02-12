import Dialog from "../dialog/Dialog"

const AddQuestionDialog = () => {
    const handleSuccess = () => {
        console.log('SuccessMethodCalled')
    }

    return(
        <Dialog handleSuccess={handleSuccess} title='Přidat novou otázku' openerTitle={'Přidat otázku'}>
            {/* TODO: Vytvoření formuláře na vkládání otázek */}
        </Dialog>
    )
}

export default AddQuestionDialog