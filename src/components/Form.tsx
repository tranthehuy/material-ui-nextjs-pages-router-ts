export type FormValues = Record<string, any>;
export type FormikProps = Record<string, any>;

type FormProps = {
  children?: React.ReactNode | Array<React.ReactNode>;
  formik?: Record<string, any>;
} & Record<string, any>

export default function Form(props: FormProps) {
  return (
    <form onSubmit={props.formik?.handleSubmit}>
      {props.children}
    </form>
  );
}
