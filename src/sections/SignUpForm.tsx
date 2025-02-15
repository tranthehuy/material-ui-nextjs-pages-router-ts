import { Box, Button, Stack, TextField } from "@mui/material";
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
              label="Confirm"
              fullWidth
              type="password"
              formik={formik}
            >
              {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
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
              label="Confirm"
              fullWidth
              type="password"
              formik={formik}
            >
              {(fieldProps: FormikProps) => <TextField {...fieldProps} />}
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
