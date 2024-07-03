import React from "react";
import "./FirstForm.css";
import { Card, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FirstForm = () => {
  const navigate = useNavigate();

  const handleSaveAndNext = () => {
    navigate("/second");
  };
  
  return (
    <div className="container">
      <div className="inner-container">
        <Card className="card">
          <Typography variant="h4" gutterBottom>
            Registration Form
          </Typography>
          <div className="email">
            <label> Please enter your email</label>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="success"
            />
          </div>
          <div className="password">
            <label> Please enter your password</label>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              color="success"
            />
          </div>
          <div className="button-group">
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "30%" }}
              disabled
            >
              Back
            </Button>
            <Button variant="contained" sx={{ width: "30%" }}>
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              color="success"
              onClick={handleSaveAndNext}
            >
              Save & Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FirstForm;
