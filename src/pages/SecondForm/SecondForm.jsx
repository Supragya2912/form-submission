import React,{useState, useEffect} from "react";
import "./SecondForm.css";
import { Card, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {addressValidation, firstNameValidation, lastNameValidation} from "../../helper/helpers";

const SecondForm = () => {
  const navigate = useNavigate();
  const [form2, setForm2] = useState({
    firstName: "",
    lastName: "",
    address: "",
    firstNameError: "",
    lastNameError: "",
    addressError: ""
  });

  const handleGoBack = () => {
    navigate("/");
  };

  const handleNext = () => {

    if(form2.firstName === ""  || form2.address === "") {
      alert("Please fill all the fields");
      return;
    }

    if(!firstNameValidation(form2.firstName)){
      setForm2({...form2, firstNameError: "Please enter a valid first name"});
      return;
    }

    if(!lastNameValidation(form2.lastName)){
      setForm2({...form2, lastNameError: "Please enter a valid last name"});
      return;
    }

    if(!addressValidation(form2.address)){
      setForm2({...form2, addressError: "Please enter a valid address"});
      return;
    }

    localStorage.setItem("form2", JSON.stringify(form2));
    navigate("/third");
  }

  const handleSave = () => {

    if(form2.firstName === "" || form2.address === "") {
      alert("Please fill all the fields");
      return;
    }

    if(!firstNameValidation(form2.firstName)){
      setForm2({...form2, firstNameError: "Please enter a valid first name"});
      return;
    }

    if(!lastNameValidation(form2.lastName)){
      setForm2({...form2, lastNameError: "Please enter a valid last name"});
      return;
    }

    if(!addressValidation(form2.address)){
      setForm2({...form2, addressError: "Please enter a valid address"});
      return;
    }

    localStorage.setItem("form2", JSON.stringify(form2));
  }

  useEffect(() => {
    const data = localStorage.getItem("form2");
    if(data) {
      const parsedData = JSON.parse(data);
      setForm2(parsedData);
    }
  }
  ,[]);

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
              value={form2.firstName}
              onChange={(e) => {
                setForm2({ ...form2, firstName: e.target.value, firstNameError: ""});
              }}
              error={!!form2.firstNameError}
              helperText={form2.firstNameError}
            />
          </div>
          <div className="input-group">
            <label> Please enter your last name</label>
            <TextField
              id="outlined-basic"
              label="Last Name (optional)"
              variant="outlined"
              color="success"
              fullWidth
              value={form2.lastName}
              onChange={(e) => {
                setForm2({ ...form2, lastName: e.target.value, lastNameError: ""});
              }}
              error={!!form2.lastNameError}
              helperText={form2.lastNameError}
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
              value={form2.address}
              onChange={(e) => {
                setForm2({ ...form2, address: e.target.value, addressError: ""});
              }}
              error={!!form2.addressError}
              helperText={form2.addressError}
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
            <Button variant="contained" sx={{ width: "30%" }} onClick={handleSave}>
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
