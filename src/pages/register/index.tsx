import React from "react";
import { Box, Container } from "@mui/material";

import { RegisterForm } from "../../components/forms/registerForm";
import styles from "./register.module.scss";

export const Register: React.FC = () => (
  <Box className={styles.main}>
    <Container maxWidth='sm' component='main'>
      <RegisterForm />
    </Container>
  </Box>
);
