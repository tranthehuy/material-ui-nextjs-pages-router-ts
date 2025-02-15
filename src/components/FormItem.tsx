type FormItemProps = {
  id?:string;
  name?:string;
  label?:string;
  children?: Function;
  formik?: Record<string, any>;
} & Record<string, any>

export default function FormItem(props: FormItemProps) {
  const { formik, id, name = '', label } = props;
  if (!formik) return <></>
  const value = formik.values[name];
  const onChange= formik.handleChange;
  const onBlur= formik.handleBlur;
  const error= formik.touched[name] && Boolean(formik.errors[name]);
  const helperText= formik.touched[name] && formik.errors[name];
  return props?.children?.({
    ...props, id, name, label, value, onChange, onBlur, error, helperText
  })
}
