import React from "react";
import "./SecondForm.css";
import { Card, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SecondForm = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    navigate("/third");
  }
  return (
    <div className="container">
      <div className="inner-container">
        <Card className="card">
          <Typography variant="h4" gutterBottom>
            Registration Form
          </Typography>
          <div className="input-group">
            <label> Please enter your first name</label>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              color="success"
              fullWidth
            />
          </div>
          <div className="input-group">
            <label> Please enter your last name</label>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              color="success"
              fullWidth
            />
          </div>
          <div className="input-group">
            <label> Please enter your address</label>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              color="success"
              fullWidth
            />
          </div>
          <div className="button-group">
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "30%" }}
              onClick={handleGoBack}
            >
              Back
            </Button>
            <Button variant="contained" sx={{ width: "30%" }}>
              Save
            </Button>
            <Button variant="contained" sx={{ width: "30%" }} color="success" onClick={handleNext}>
              Save & Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecondForm;
