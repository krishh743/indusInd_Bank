import {
    Box,
    Grid,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
  } from "@mui/material";
  import { useState } from "react";
  import {
    isEmailValid,
    isNumericField,
    isPanNumberValid,
  } from "../utils/ValidationUtils";
  const Form = () => {
    const [name, setName] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isConsentChecked, setConsentChecked] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const errors = {};
  
    const handleChange = (e) => {
      const input = e.target.name;
      if (input === "name") {
        setName(e.target.value);
      }
      if (input === "email") {
        setEmail(e.target.value);
      }
      if (input === "mobileNumber" && isNumericField(e.target.value)) {
        setMobileNumber(e.target.value);
      }
      if (input === "panNumber") {
        setPanNumber(e.target.value);
      }
    };
  
    //validations
    const runValidations = () => {
      if (name.trim().length === 0) {
        errors.name = "Please enter name";
      }
      if (email.trim().length === 0) {
        errors.email = "Please enter email";
      } else if (isEmailValid(email) === false) {
        errors.email = "Please enter valid email";
      }
      if (mobileNumber.length === 0) {
        errors.mobileNumber = "Please enter mobile number";
      } else if (mobileNumber.length !== 10) {
        errors.mobileNumber = "Mobile number must include 10 digits";
      }
      if (isPanNumberValid(panNumber) === false) {
        errors.panNumber = "Please enter PAN number";
      }
    };
  
    const handleConsentCheckboxChange = (event) => {
      setConsentChecked(event.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      runValidations();
      if (Object.keys(errors).length === 0) {
        setFormErrors({});
      } else {
        setFormErrors(errors);
      }
  
      const formData = {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        panNumber: panNumber,
      };
      console.log(formData, "formData");
    };
  
    return (
      <div>
        <center>
          <Container maxWidth="md" style={{ paddingTop: "50px" }}>
            <Paper
              component={Box}
              width="100%"
              style={{ height: "700px", marginRight: "10px" }}
            >
              {/* <h2>Registration Form</h2> */}
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  color: "brown",
                  fontStyle: "italic",
                }}
              >
                IndusInd Bank
              </Typography>
              <Grid
                container
                spacing={2}
                direction="column"
                maxWidth={"300px"}
                style={{ marginTop: "40px", marginBottom: "10px" }}
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Enter your Name"
                    id="name"
                    label="Name"
                    variant="outlined"
                    autoFocus
                    focused
                    value={name}
                    name="name"
                    onChange={handleChange}
                    error={formErrors.name ? true : false}
                  />
                  {formErrors.name && (
                    <span style={{ color: "red" }}>{formErrors.name}</span>
                  )}
                </Grid>
  
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Mobile Number"
                    id="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    inputProps={{ maxLength: 10 }}
                    value={mobileNumber}
                    name="mobileNumber"
                    onChange={handleChange}
                    error={formErrors.mobileNumber ? true : false}
                  />
                  {formErrors.mobileNumber && (
                    <span style={{ color: "red" }}>
                      {formErrors.mobileNumber}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="PAN Number"
                    id="pan"
                    label="PAN Number"
                    variant="outlined"
                    inputProps={{ maxLength: 10 }}
                    value={panNumber}
                    name="panNumber"
                    onChange={handleChange}
                    error={formErrors.panNumber ? true : false}
                  />
                  {formErrors.panNumber && (
                    <span style={{ color: "red" }}>{formErrors.panNumber}</span>
                  )}
                  <p style={{ fontSize: "10px", marginTop: "8px" }}>
                    Your PAN is required to check credit details and will help us
                    in giving you an accurate offer
                  </p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Enter your Email"
                    id="email"
                    label="Email ID"
                    variant="outlined"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    error={formErrors.email ? true : false}
                  />
                  {formErrors.email && (
                    <span style={{ color: "red" }}>{formErrors.email}</span>
                  )}
                </Grid>
              </Grid>
  
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    onChange={handleConsentCheckboxChange}
                    checked={isConsentChecked}
                    style={{ marginBottom: "20px", marginLeft: "10px" }}
                  />
                }
                label="Consent to override any DND subscription, Bussiness
                                  Executive to contact and fetch CIBIL score to process loan
                                  request"
              />
  
              <Button
                disabled={isConsentChecked ? false : true}
                className="submit-btn"
                variant="contained"
                onClick={handleSubmit}
                style={{ marginLeft: "30px" }}
              >
                Submit
              </Button>
            </Paper>
          </Container>
        </center>
      </div>
    );
  };
  export default Form;
  