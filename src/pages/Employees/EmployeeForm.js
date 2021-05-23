import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import {
  InitialValues,
  genderItems,
  options,
  insertEmployee,
} from "./initialFormValues";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls";

function EmployeeForm() {
  const validateForm = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.*@.*..*/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("phone" in fieldValues)
      temp.phone =
        fieldValues.phone.length > 9 ? "" : "Minumum 10 numbers requrired";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(InitialValues(), true, validateForm);

  useEffect(() => {
    console.log(values.fullName);
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      insertEmployee(values);
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            defaultValue={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            variant="outlined"
            label="Phone"
            name="phone"
            defaultValue={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <Controls.Input
            variant="outlined"
            label="City"
            name="city"
            defaultValue={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroupControl
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            label="Gender"
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={options}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="Permanent employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              type="submit"
              color="primary"
              size="large"
              text="Submit"
            />
            <Controls.Button
              type="Reset"
              variant="outlined"
              color="secondary"
              size="large"
              text="Reset"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
