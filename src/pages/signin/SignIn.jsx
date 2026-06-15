import {
  Box,
  Link,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "../../components/button/Button";
import TextField from "../../components/textfield/TextField";
import { styles } from "./styles";
import Logo from "../../assets/testify.svg";

const SignIn = () => {
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
          <Typography className={styles.greetingTitle}>Welcome back</Typography>
          <Typography className={styles.greetingSub}>
            Sign in to continue to your account
          </Typography>
        </Box>

        <Box component="form" className={styles.formContainer}>
          <Box className={styles.inputContainer}>
            <Typography className={styles.label}>Email address</Typography>
            <TextField
              type="email"
              placeholder="name@example.com"
              icon={MailIcon}
            />
          </Box>

          <Box className={styles.inputContainer}>
            <Box className={styles.labelRow}>
              <Typography className={styles.label}>Password</Typography>
              <Link href="#" underline="none" className={styles.forgotLink}>
                Forgot password?
              </Link>
            </Box>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              icon={<LockOutlinedIcon/>}
              iconButton={<VisibilityIcon/>}
              onIconButtonClick={handlePasswordVisibility}
            />
          </Box>

          <Box className={styles.bottomActionContainer}>
            <Button
              type="submit"
              label="Sign in"
              height="40px"
              bgcolor="var(--pri-500)"
            />

            <Typography className={styles.signupText}>
              Don't have an account?{" "}
              <Link
                component={RouterLink}
                to="/sign-up"
                underline="none"
                className={styles.signupLink}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
