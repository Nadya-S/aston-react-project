import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant="outlined" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};

export default BackButton;