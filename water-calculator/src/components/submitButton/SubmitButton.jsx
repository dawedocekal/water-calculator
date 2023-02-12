import { Button } from "@mui/material";

const SubmitButton = ({ buttonText = "" }) => (
  <Button variant="contained" type="submit">
    {buttonText}
  </Button>
);

export default SubmitButton;
