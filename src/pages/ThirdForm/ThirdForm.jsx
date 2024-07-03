import React, { useState } from "react";
import "./ThirdForm.css";
import { Card, Typography, TextField, Button, InputLabel, FormControl, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThirdForm = () => {
  
  const [acceptTerms, setAcceptTerms] = useState(false);
  const Navigate = useNavigate();

  const handleAcceptTermsChange = (event) => {
    setAcceptTerms(event.target.checked);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <Card className="card">
          <Typography variant="h4" gutterBottom>
            Registration Form
          </Typography>
          <div className="input-group">
            <label> Please enter your phone number</label>
            <div className="phone-input">
              <FormControl variant="standard" className="country-code">
                <InputLabel id="demo-customized-select-label">Country Code</InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  color="success"
                  defaultValue=""
                >
                  <MenuItem value={"+91"}>+91</MenuItem>
                  <MenuItem value={"+1"}>+1</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                color="success"
                className="phone-number"
                fullWidth
              />
            </div>
          </div>
          <div className="input-group">
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptTerms}
                  onChange={handleAcceptTermsChange}
                  name="acceptTerms"
                  color="success"
                />
              }
              label="I accept the terms and conditions"
            />
          </div>
          <div className="button-group">
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "30%" }}
              onClick={() => Navigate('/second')}
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
              disabled={!acceptTerms}
            >
              Save & Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThirdForm;
