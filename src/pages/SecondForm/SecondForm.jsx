import React, { useState, useEffect } from "react";
import "./SecondForm.css";
import { Card, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addressValidation, firstNameValidation, lastNameValidation } from "../../helper/helpers";
import { useDispatch, useSelector } from "react-redux";
import { saveForm2 } from "../../redux/reducers/formReducer";

const SecondForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form2 = useSelector((state) => state.form.form2);
  const [formTwo, setFormTwo] = useState(form2);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (formTwo.firstName === "" || formTwo.address === "") {
      alert("Please fill all the fields");
      return;
    }

    if (!firstNameValidation(formTwo.firstName)) {
      setFormTwo({ ...formTwo, firstNameError: "Please enter a valid first name" });
      return;
    }

    if (!lastNameValidation(formTwo.lastName)) {
      setFormTwo({ ...formTwo, lastNameError: "Please enter a valid last name" });
      return;
    }

    if (!addressValidation(formTwo.address)) {
      setFormTwo({ ...formTwo, addressError: "Please enter a valid address" });
      return;
    }

    dispatch(saveForm2({ ...formTwo, lastName: formTwo.lastName || "" }));
    navigate("/third");
  };

  const handleSave = () => {
    if (formTwo.firstName === "" || formTwo.address === "") {
      alert("Please fill all the fields");
      return;
    }

    if (!firstNameValidation(formTwo.firstName)) {
      setFormTwo({ ...formTwo, firstNameError: "Please enter a valid first name" });
      return;
    }

    if (!lastNameValidation(formTwo.lastName)) {
      setFormTwo({ ...formTwo, lastNameError: "Please enter a valid last name" });
      return;
    }

    if (!addressValidation(formTwo.address)) {
      setFormTwo({ ...formTwo, addressError: "Please enter a valid address" });
      return;
    }

    dispatch(saveForm2({ ...formTwo, lastName: formTwo.lastName || "" }));
  };

  useEffect(() => {
    if (form2) {
      setFormTwo(form2);
    }
  }, [form2]);

  return (
    <div className="container">
      <div className="inner-container">
        <Card className="card">
          <Typography variant="h4" gutterBottom>
            Registration Form
          </Typography>
          <div className="firstName">
            <label> Please enter your first name</label>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "10px" }}
              color="success"
              value={formTwo?.firstName}
              onChange={(e) => {
                setFormTwo({ ...formTwo, firstName: e.target.value, firstNameError: "" });
              }}
              error={!!formTwo?.firstNameError}
              helperText={formTwo?.firstNameError}
            />
          </div>
          <div className="lastName">
            <label> Please enter your last name</label>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
              color="success"
              value={formTwo?.lastName}
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setFormTwo({ ...formTwo, lastName: e.target.value, lastNameError: "" });
              }}
              error={!!formTwo?.lastNameError}
              helperText={formTwo?.lastNameError}
            />
          </div>
          <div className="address">
            <label> Please enter your address</label>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "10px" }}
              color="success"
              value={formTwo?.address}
              onChange={(e) => {
                setFormTwo({ ...formTwo, address: e.target.value, addressError: "" });
              }}
              error={!!formTwo?.addressError}
              helperText={formTwo?.addressError}
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
            <Button
              variant="contained"
              sx={{ width: "30%" }}
              color="success"
              onClick={handleNext}
            >
              Save & Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecondForm;
