import React from "react";
import { Box, Container } from "@mui/material";

import { LoginForm } from "../../components/forms/loginForm";
import styles from "./login.module.scss";

export const Login: React.FC = () => (
  <Box className={styles.main}>
    <Container maxWidth='sm' component='main'>
      <LoginForm />
    </Container>
  </Box>
);
