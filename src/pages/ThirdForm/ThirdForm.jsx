import React, { useState, useEffect } from "react";
import "./ThirdForm.css";
import {
  Card,
  Typography,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validatePhoneNumber } from "../../helper/helpers";
import { handleSubmitForm } from "../../api/api";

const ThirdForm = () => {
  const [data, setData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTerms: false,
  });
  const Navigate = useNavigate();

  const handleAcceptTermsChange = (event) => {
    setData({ ...data, acceptTerms: event.target.checked });
  };

  const handleFormSubmit = async () => {
    if (
      data.phoneNumber === "" ||
      data.countryCode === "" ||
      !data.acceptTerms
    ) {
      alert("sss");
      return;
    }

    if (!validatePhoneNumber(data.phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    delete data.acceptTerms;

    const response = await handleSubmitForm(data);
    if (response?.message === "Success") {
      alert("Form submitted successfully");
      localStorage.clear();
      Navigate("/");
    } else {
      alert("Internal server error");
    }
  };

  useEffect(() => {
    const form1 = localStorage.getItem("form1");
    const form2 = localStorage.getItem("form2");
    const form3 = localStorage.getItem("form3");

    if(form1) {
      const parsedData = JSON.parse(form1);
      setData((prevState) => ({
        ...prevState,
        emailId: parsedData.email,
        password: parsedData.password
      }));
    }

    if(form2) {
      const parsedData = JSON.parse(form2);
      setData((prevState) => ({
        ...prevState,
        firstName: parsedData.firstName,
        lastName: parsedData.lastName,
        address: parsedData.address
      }));
    }

    if(form3) {
      const parsedData = JSON.parse(form3);
      setData((prevState) => ({
        ...prevState,
        countryCode: parsedData.countryCode,
        phoneNumber: parsedData.phoneNumber
      }));
    }
  }, []);

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
                <InputLabel id="demo-customized-select-label">
                  Country Code
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  color="success"
                  value={data.countryCode}
                  onChange={(e) => {
                    setData({ ...data, countryCode: e.target.value });
                  }}
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
                value={data.phoneNumber}
                onChange={(e) => {
                  setData({ ...data, phoneNumber: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="input-group">
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.acceptTerms}
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
              onClick={() => Navigate("/second")}
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              onClick={handleFormSubmit}
              disabled={!data.acceptTerms}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              color="success"
              disabled
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
