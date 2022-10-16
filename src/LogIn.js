

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"
import { auth } from "./firebase-config"
import { Link, useNavigate } from "react-router-dom"

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function LogIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const [showPassword, setShowPassword] = useState(false);

  const handleChange =
    (e) => {
      setPass(e.target.value);
    };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };


  const signIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(auth => {
        navigate("/home");
        console.log(auth)
      })
      .catch(error => console.error(error));
  }
  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent")
    console.log(auth)

  }

  // const triggerResetEmail = () => {
  //   sendPasswordResetEmail(auth, email)
  //     .then((auth) => {
  //       // Password reset email sent!
  //       // ..
  //       console.log(auth)

  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // }
  const registerWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(auth => {
        navigate("/home");
        console.log(auth)
      })
      .catch(error => console.error(error));
  }


  return (
    <div
      style={{
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBlock: ""
      }
      }>
      <h1>SIGN IN</h1>
      <TextField
        fullWidth
        id="outlined-required"
        label="Email Address"
        autoComplete="email"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
    

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={pass}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Link
        component="button"
        variant="body2"
        onClick={triggerResetEmail}
      >
        Forgot password
      </Link>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={signIn}
        sx={{
          maxWidth: "200px",
          backgroundColor: "blue",
        }} >SIGN IN</Button>

      <Button type="submit"
        fullWidth

        variant="contained"
        onClick={registerWithEmail}
        sx={{
          maxWidth: "200px",
          marginTop: "20px"
        }} >Create Your Account</Button>
    </div>
  )

}

export default LogIn


