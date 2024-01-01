import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  IconButton
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import logo from "../components/images/logo.png";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    applyDarkMode(isDarkMode); // Apply dark mode to the entire DOM
  };

  const applyDarkMode = isDarkMode => {
    const body = document.querySelector("body");
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  const paperStyle = {
    padding: 20,
    height: "110vh",
    width: 280,
    margin: "20px auto",
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333"
  };

  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    width: 180,
    height: 180,
    marginBottom: 20
  };

  const btnstyle = { margin: "8px 0" };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar src={logo} style={avatarStyle} />
          <h2>Sign In</h2>
          <IconButton onClick={toggleDarkMode}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Grid>
        <TextField
          label="Enrollment"
          placeholder="Enter username"
          fullWidth
          required
          variant="outlined"
          style={{ marginBottom: 15 }}
          InputProps={{
            style: {
              backgroundColor: isDarkMode ? "#444" : "#fff",
              color: isDarkMode ? "#fff" : "#333"
            }
          }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          variant="outlined"
          style={{ marginBottom: 15 }}
          InputProps={{
            style: {
              backgroundColor: isDarkMode ? "#444" : "#fff",
              color: isDarkMode ? "#fff" : "#333"
            }
          }}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
          style={{ marginBottom: 10 }}
          labelPlacement="end"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
