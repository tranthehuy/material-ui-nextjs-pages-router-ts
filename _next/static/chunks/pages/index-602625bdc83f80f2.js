(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5374)}])},5374:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>q});var i=r(2445),a=r(5759),l=r(6247),o=r(429),t=r(2064),d=r(1703),s=r(503),c=r(6540),m=r(5243),u=r(2665),h=r(8553);function p(e){let{description:n}=e,r=(0,c.useRef)(null);return(0,i.Y)(h.Ay,{height:"300px",defaultLanguage:"typescript",defaultValue:n,beforeMount:function(e){e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0})},onMount:function(e,n){r.current=n}})}function f(e){let{children:n,value:r,index:a,...l}=e;return(0,i.Y)("div",{role:"tabpanel",hidden:r!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a),...l,children:r===a&&(0,i.Y)(t.A,{sx:{p:3},children:n})})}function Y(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function A(e){let{children:n,description:r,title:a,id:d}=e,[s,h]=c.useState(0);return(0,i.FD)(t.A,{children:[(0,i.Y)(o.A,{id:d,children:(0,i.Y)(l.A,{variant:"h4",component:"h3",sx:{mb:2},children:a})}),(0,i.FD)(t.A,{sx:{width:"100%"},children:[(0,i.Y)(t.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,i.FD)(m.A,{value:s,onChange:(e,n)=>{h(n)},"aria-label":"basic tabs example",children:[(0,i.Y)(u.A,{label:"Preview",...Y(0)}),(0,i.Y)(u.A,{label:"Code",...Y(1)})]})}),(0,i.Y)(f,{value:s,index:0,children:n}),(0,i.Y)(f,{value:s,index:1,children:(0,i.Y)(p,{description:r})})]})]})}function b(){return(0,i.Y)(A,{title:"Layout",description:"\n    import Box from '@mui/material/Box';\n    import Paper from '@mui/material/Paper';\n    import Grid from '@mui/material/Grid2';\n    ...\n    <Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid size={4}>\n        <Paper>size=4</Paper>\n        </Grid>\n        <Grid size={8}>\n        <Paper>size=8</Paper>\n        </Grid>\n    </Grid>\n    </Box>\n",id:"layout",children:(0,i.Y)(t.A,{sx:{flexGrow:1},children:(0,i.FD)(s.A,{container:!0,spacing:2,children:[(0,i.Y)(s.A,{size:4,children:(0,i.Y)(d.A,{children:"size=4"})}),(0,i.Y)(s.A,{size:8,children:(0,i.Y)(d.A,{children:"size=8"})})]})})})}function g(){return(0,i.Y)(A,{title:"Title",description:'\nimport Typography from \'@mui/material/Typography\';\n...\n<Typography variant="h4" component="h1" sx={{ mb: 2 }}>\nHeading 1\n</Typography>\n',id:"title",children:(0,i.Y)(l.A,{variant:"h4",component:"h3",sx:{mb:2},children:"Heading 3"})})}var x=r(7543),y=r(9806),w=r(4967),v=r(3384);function P(){return(0,i.Y)(A,{title:"Button and Icon",description:"\n    import Box from '@mui/material/Box';\n    import Paper from '@mui/material/Paper';\n    import Grid from '@mui/material/Grid2';\n    ...\n    <Box sx={{ flexGrow: 1 }}>\n    <Grid container spacing={2}>\n        <Grid size={4}>\n        <Paper>size=4</Paper>\n        </Grid>\n        <Grid size={8}>\n        <Paper>size=8</Paper>\n        </Grid>\n    </Grid>\n    </Box>\n",id:"button",children:(0,i.FD)(v.A,{direction:"row",spacing:2,children:[(0,i.Y)(x.A,{variant:"outlined",startIcon:(0,i.Y)(y.A,{}),children:"Delete"}),(0,i.Y)(x.A,{variant:"contained",endIcon:(0,i.Y)(w.A,{}),children:"Send"})]})})}var k=r(5940),B=r(3149),D=r(2664);let F=D.Ik({email:D.Yj().email("Enter a valid email").required("Email is required"),password:D.Yj().min(8,"Password should be of minimum 8 characters length").required("Password is required")});function G(){let e=(0,B.Wx)({initialValues:{email:"foobar@example.com",password:"foobar"},validationSchema:F,onSubmit:e=>{alert(JSON.stringify(e,null,2))}});return(0,i.Y)(A,{title:"Form",description:'\nconst validationSchema = yup.object({\n  email: yup\n    .string(\'Enter your email\')\n    .email(\'Enter a valid email\')\n    .required(\'Email is required\'),\n  password: yup\n    .string(\'Enter your password\')\n    .min(8, \'Password should be of minimum 8 characters length\')\n    .required(\'Password is required\'),\n});\n\nconst WithMaterialUI = () => {\n  const formik = useFormik({\n    initialValues: {\n      email: \'foobar@example.com\',\n      password: \'foobar\',\n    },\n    validationSchema: validationSchema,\n    onSubmit: (values) => {\n      alert(JSON.stringify(values, null, 2));\n    },\n  });\n\n  return (\n    <div>\n      <form onSubmit={formik.handleSubmit}>\n        <TextField\n          fullWidth\n          id="email"\n          name="email"\n          label="Email"\n          value={formik.values.email}\n          onChange={formik.handleChange}\n          onBlur={formik.handleBlur}\n          error={formik.touched.email && Boolean(formik.errors.email)}\n          helperText={formik.touched.email && formik.errors.email}\n        />\n        <TextField\n          fullWidth\n          id="password"\n          name="password"\n          label="Password"\n          type="password"\n          value={formik.values.password}\n          onChange={formik.handleChange}\n          onBlur={formik.handleBlur}\n          error={formik.touched.password && Boolean(formik.errors.password)}\n          helperText={formik.touched.password && formik.errors.password}\n        />\n        <Button color="primary" variant="contained" fullWidth type="submit">\n          Submit\n        </Button>\n      </form>\n    </div>\n  );\n};\n',id:"form",children:(0,i.Y)(t.A,{children:(0,i.Y)("form",{onSubmit:e.handleSubmit,children:(0,i.FD)(v.A,{spacing:2,children:[(0,i.Y)(k.A,{fullWidth:!0,id:"email",name:"email",label:"Email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.email&&!!e.errors.email,helperText:e.touched.email&&e.errors.email}),(0,i.Y)(k.A,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.password&&!!e.errors.password,helperText:e.touched.password&&e.errors.password}),(0,i.Y)(x.A,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Submit"})]})})})})}var S=r(2035),T=r(7397),z=r(1347),C=r(304),E=r(4897),_=r(4622);function W(e){return(0,i.Y)(s.A,{size:4,children:(0,i.Y)(d.A,{children:(0,i.FD)(S.A,{children:[(0,i.Y)(o.A,{href:"#form",children:(0,i.Y)(T.Ay,{disablePadding:!0,children:(0,i.FD)(z.A,{children:[(0,i.Y)(C.A,{children:(0,i.Y)(_.A,{})}),(0,i.Y)(E.A,{primary:"Form"})]})})}),(0,i.Y)(o.A,{href:"#layout",children:(0,i.Y)(T.Ay,{disablePadding:!0,children:(0,i.FD)(z.A,{children:[(0,i.Y)(C.A,{children:(0,i.Y)(_.A,{})}),(0,i.Y)(E.A,{primary:"Layout"})]})})}),(0,i.Y)(o.A,{href:"#title",children:(0,i.Y)(T.Ay,{disablePadding:!0,children:(0,i.FD)(z.A,{children:[(0,i.Y)(C.A,{children:(0,i.Y)(_.A,{})}),(0,i.Y)(E.A,{primary:"Title"})]})})}),(0,i.Y)(o.A,{href:"#button",children:(0,i.Y)(T.Ay,{disablePadding:!0,children:(0,i.FD)(z.A,{children:[(0,i.Y)(C.A,{children:(0,i.Y)(_.A,{})}),(0,i.Y)(E.A,{primary:"Button and Icon"})]})})})]})})})}function q(){return(0,i.FD)(a.A,{maxWidth:"lg",children:[(0,i.FD)(t.A,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:"center",alignPapers:"center"},children:[(0,i.Y)(o.A,{href:"https://mui.com/material-ui/all-components/",target:"_blank",children:"Starter Repo Material UI - Next.js example in TypeScript"}),(0,i.Y)(l.A,{variant:"h4",component:"h1",sx:{mb:2},children:"MUI components - Design Language Page"})]}),(0,i.Y)(t.A,{sx:{flexGrow:1},children:(0,i.FD)(s.A,{container:!0,spacing:2,children:[(0,i.Y)(W,{}),(0,i.FD)(s.A,{size:8,children:[(0,i.Y)(G,{}),(0,i.Y)("br",{}),(0,i.Y)(b,{}),(0,i.Y)("br",{}),(0,i.Y)(g,{}),(0,i.Y)("br",{}),(0,i.Y)(P,{})]})]})})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[690,543,885,636,593,792],()=>n(2022)),_N_E=e.O()}]);