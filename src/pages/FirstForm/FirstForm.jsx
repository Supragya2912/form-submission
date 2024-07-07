import React, { useState, useEffect } from "react";
import "./FirstForm.css";
import { Card, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "../../helper/helpers";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { saveForm1 } from "../../redux/reducers/formReducer";

const FirstForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form1 = useSelector((state) => state.form.form1);
  const [formOne, setFormOne] = useState(form1);

  const handleSaveAndNext = () => {
    if (formOne.email === "" || formOne.password === "") {
      alert("Please fill all the fields");
      return;
    }

    if (!emailValidation(formOne.email)) {
      setFormOne({ ...formOne, emailError: "Please enter a valid email" });
      return;
    }

    if (!passwordValidation(formOne.password)) {
      setFormOne({ ...formOne, passwordError: "Must contain minimum 2 capital letters, 2 small letters, 2 numbers and 2 special characters" });
      return;
    }

    dispatch(saveForm1(formOne));
    navigate("/second");
  };

  const handleSave = () => {
    if (formOne.email === "" || formOne.password === "") {
      alert("Please fill all the fields");
      return;
    }

    if (!emailValidation(formOne.email)) {
      setFormOne({ ...formOne, emailError: "Please enter a valid email" });
      return;
    }

    if (!passwordValidation(formOne.password)) {
      setFormOne({ ...formOne, passwordError: "Must contain minimum 2 capital letters, 2 small letters, 2 numbers and 2 special characters" });
      return;
    }

    dispatch(saveForm1(formOne));
  };

  const togglePassword = () => {
    setFormOne({ ...formOne, hidePassword: !formOne.hidePassword });
  };

  useEffect(() => {
    if (form1) {
      setFormOne(form1);
    }
  }, [form1]);

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
              value={formOne?.email}
              onChange={(e) => {
                setFormOne({ ...formOne, email: e.target.value, emailError: "" });
              }}
              error={!!formOne?.emailError}
              helperText={formOne?.emailError}
            />
          </div>
          <div className="password">
            <label> Please enter your password</label>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type={formOne?.hidePassword ? "password" : "text"}
              color="success"
              value={formOne?.password}
              onChange={(e) => {
                setFormOne({ ...formOne, password: e.target.value, passwordError: "" });
              }}
              error={!!formOne?.passwordError}
              helperText={formOne?.passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePassword} edge="end">
                      {formOne?.hidePassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
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
            <Button variant="contained" sx={{ width: "30%" }} onClick={handleSave}>
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
