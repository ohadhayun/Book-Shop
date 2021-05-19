import React, {useState, useRef} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './index.css'
import { useForm } from "react-hook-form";
import { userRequestLogOrReg } from '../../API/api'

const LogIn = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(formData);
    try{const sendToServer = await userRequestLogOrReg('users', 'login', formData) 
      console.log(sendToServer);
      alert('Successfully logged-in!');
    } 
    catch (error) {
      console.log(error);
      alert('Wrong email or password.');
    };
  }
  let textInput = useRef(null);
  // textInput.ref = register({ required: true });
  const [formData,setFormData] =useState();

  function handleInput(e){
    const data = {[e.target.name]:e.target.value}; // =  {email/password:'current value'}
    setFormData({...formData,...data})
  }
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol md="3" className="col-md-3"></MDBCol>
        <MDBCol md="6" className="formdesign">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
            

              <MDBInput inputRef={ref => textInput = ref } name="email"  onInput={handleInput} label="Type your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />
              <MDBInput name={"password"}  onInput={handleInput} ref={register({ required: true })} label="Type your password" icon="lock" group type="password" validate />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LogIn;


// function ReactForm() {
//   const { register, handleSubmit, watch, errors } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("exampleRequired")); // watch input value by passing the name of it

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="example" defaultValue="test"  ref={register} />
//       <input name="exampleRequired" ref={register({ required: true })} />
//       {errors.exampleRequired && <span>This field is required</span>}
//       <input type="submit" />
//     </form>
//   );
// }
// export default ReactForm;

// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }