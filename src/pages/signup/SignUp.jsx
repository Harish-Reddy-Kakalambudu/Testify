import { Box, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "../../components/button/Button";
import TextField from "../../components/textfield/TextField";
import Logo from "../../assets/testify.svg";
import { styles } from "../signin/styles";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((currentValue) => !currentValue);
  };

  return (
    <Box className={styles.background}>
      <Box className={styles.pageHeader}>
        <Box className={styles.logoTittleCOntainer}>
          <Box className={styles.logo}>
            <img src={Logo} alt="Testify" />
          </Box>
          <Typography className={styles.title}>Testify</Typography>
        </Box>

        <Typography className={styles.subtitle}>Test. Debug. Trust.</Typography>
      </Box>

      <Box className={styles.mainContainer}>
        <Box className={styles.greetingContainer}>
          <Typography className={styles.greetingTitle}>Create your account</Typography>
          <Typography className={styles.greetingSub}>
            Sign up and start testing your APIs like a pro
          </Typography>
        </Box>

        <Box component="form" className={styles.formContainer}>
          <Box className={styles.inputContainer}>
            <Typography className={styles.label}>Full name</Typography>
            <TextField
              placeholder="Enter your full name"
              icon={PersonIcon}
            />
          </Box>

          <Box className={styles.inputContainer}>
            <Typography className={styles.label}>Email address</Typography>
            <TextField
              type="email"
              placeholder="name@example.com"
              icon={MailIcon}
            />
          </Box>

          <Box className={styles.inputContainer}>
            <Typography className={styles.label}>Password</Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              icon={LockOutlinedIcon}
              iconButton={VisibilityIcon}
              onIconButtonClick={handlePasswordVisibility}
            />
          </Box>
          <Box className={styles.bottomActionContainer}>
            <Button
              type="submit"
              label="Sign up"
              height="40px"
              bgcolor="var(--color-primary-light)"
            />

            <Typography className={styles.signupText}>
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                className={styles.signupLink}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
