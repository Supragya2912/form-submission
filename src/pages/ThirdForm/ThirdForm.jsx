import React, { useState, useEffect } from "react";
import "./ThirdForm.css";
import {
  Card,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validatePhoneNumber } from "../../helper/helpers";
import { useDispatch, useSelector } from "react-redux";
import { saveForm3, resetForm } from "../../redux/reducers/formReducer";
import { handleSubmitForm } from "../../api/api";

const ThirdForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form1 = useSelector((state) => state.form.form1);
  const form2 = useSelector((state) => state.form.form2);
  const form3 = useSelector((state) => state.form.form3);
  const [formThree, setFormThree] = useState(form3);

  const handleGoBack = () => {
    navigate("/second");
  };

  const handleSubmit = () => {
    if (
      formThree.countryCode === "" ||
      formThree.phoneNumber === "" ||
      !formThree.acceptTerms
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (!validatePhoneNumber(formThree.phoneNumber)) {
      setFormThree({
        ...formThree,
        phoneNumberError: "Please enter a valid phone number",
      });
      return;
    }

    dispatch(saveForm3(formThree));
  };

  const handleSave = async () => {
    if (
      formThree.countryCode === "" ||
      formThree.phoneNumber === "" ||
      !formThree.acceptTerms
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (!validatePhoneNumber(formThree.phoneNumber)) {
      setFormThree({
        ...formThree,
        phoneNumberError: "Please enter a valid phone number",
      });
      return;
    }

    dispatch(saveForm3(formThree));
    const combinedData = {
      ...form1,
      ...form2,
      ...formThree,
    };

    delete combinedData.acceptTerms;
    delete combinedData.phoneNumberError;
    delete combinedData.addressError;
    delete combinedData.emailError;
    delete combinedData.firstNameError;
    delete combinedData.lastNameError;
    delete combinedData.passwordError;
    
    const response = await handleSubmitForm(combinedData);
    if (response?.message === "Success") {
      alert("Form submitted successfully");
      dispatch(resetForm());
      navigate("/");
    } else {
      alert("Internal server error");
    }
  };

  useEffect(() => {
    if (form3) {
      setFormThree(form3);
    }
  }, [form3]);

  return (
    <div className="container">
      <div className="inner-container">
        <Card className="card">
          <Typography variant="h4" gutterBottom>
            Registration Form
          </Typography>
          <div className="input-group">
            <label>Please enter your country code</label>
            <FormControl variant="outlined" className="country-code" fullWidth>
              <InputLabel id="demo-customized-select-label">Country Code</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                color="success"
                fullWidth
                value={formThree.countryCode}
                onChange={(e) => {
                  setFormThree({ ...formThree, countryCode: e.target.value });
                }}
              >
                <MenuItem value={"+91"}>+91</MenuItem>
                <MenuItem value={"+1"}>+1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="phoneNumber">
            <label> Please enter your phone number</label>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              color="success"
              fullWidth
              value={formThree.phoneNumber}
              onChange={(e) => {
                setFormThree({
                  ...formThree,
                  phoneNumber: e.target.value,
                  phoneNumberError: "",
                });
              }}
              error={!!formThree.phoneNumberError}
              helperText={formThree.phoneNumberError}
            />
          </div>
          <div className="acceptTerms">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formThree.acceptTerms}
                  onChange={(e) => {
                    setFormThree({
                      ...formThree,
                      acceptTerms: e.target.checked,
                    });
                  }}
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
              onClick={handleGoBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              color="success"
              disabled
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThirdForm;
