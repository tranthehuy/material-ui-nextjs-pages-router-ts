import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import ExamplesTab from "../components/ExamplesTab";

import { useFormik } from "formik";
import * as yup from "yup";
import Form, { FormikProps } from "../components/Form";
import FormItem from "../components/FormItem";

const content = `
import { Box, Button, Stack, TextField } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import Form, { FormikProps } from "../components/Form";
import FormItem from "../components/FormItem";

export default function SignUpFormSection() {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      repassword: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
      repassword: yup
        .string()
        .min(8, "Confirm Password should be of minimum 8 characters length")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Box>
      <Form formik={formik}>
        <Stack spacing={2}>
          <FormItem
            id="email"
            name="email"
            label="Email"
            fullWidth
            formik={formik}
          >
            {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
          </FormItem>
          <FormItem
            id="password"
            name="password"
            label="Password"
            fullWidth
            type="password"
            formik={formik}
          >
            {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
          </FormItem>
          <FormItem
            id="repassword"
            name="repassword"
            label="Confirm Password"
            fullWidth
            type="password"
            formik={formik}
          >
            {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
          </FormItem>
          <FormItem
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            formik={formik}
          >
            {(fieldProps: FormikProps) => 
              <FormControl>
                <FormLabel id={fieldProps.label}>Gender</FormLabel>
                <RadioGroup
                  aria-labelledby={fieldProps.label}
                  defaultValue="female"
                  {...fieldProps}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            }
          </FormItem>
          <FormItem
            id="confirm"
            name="confirm"
            label="I confirm that I agreed this website policy"
            fullWidth
            formik={formik}
          >
            {(fieldProps: FormikProps) =>
              <FormControlLabel control={<Checkbox {...fieldProps} checked={fieldProps.value} />} label={fieldProps.label} />
            }
          </FormItem>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Stack>
      </Form>
    </Box>
  );
}

`;

export default function SignUpFormSection() {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      repassword: "",
      confirm: false
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
      repassword: yup
        .string()
        .min(8, "Confirm Password should be of minimum 8 characters length")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  console.log(formik?.values)

  return (
    <ExamplesTab title="Sign Up Form" description={content} id="form">
      <Box>
        <Form formik={formik}>
          <Stack spacing={2}>
            <FormItem
              id="email"
              name="email"
              label="Email"
              fullWidth
              formik={formik}
            >
              {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
            </FormItem>
            <FormItem
              id="password"
              name="password"
              label="Password"
              fullWidth
              type="password"
              formik={formik}
            >
              {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
            </FormItem>
            <FormItem
              id="repassword"
              name="repassword"
              label="Confirm Password"
              fullWidth
              type="password"
              formik={formik}
            >
              {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
            </FormItem>
            <FormItem
              id="gender"
              name="gender"
              label="Gender"
              fullWidth
              formik={formik}
            >
              {(fieldProps: FormikProps) => 
                <FormControl>
                  <FormLabel id={fieldProps.label}>Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby={fieldProps.label}
                    defaultValue="female"
                    {...fieldProps}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              }
            </FormItem>
            <FormItem
              id="confirm"
              name="confirm"
              label="I confirm that I agreed this website policy"
              fullWidth
              formik={formik}
            >
              {(fieldProps: FormikProps) =>
                <FormControlLabel control={<Checkbox {...fieldProps} checked={fieldProps.value} />} label={fieldProps.label} />
              }
            </FormItem>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
      </Box>
    </ExamplesTab>
  );
}
