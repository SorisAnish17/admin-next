"use client";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import signupBg from "../public/sign-up-bg.jpg";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Image from "next/image";

const Home: React.FC = () => {
  const router = useRouter();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/email-verify");
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{ flex: 1, position: "relative", overflow: "hidden", zIndex: "-1" }}
      >
        <Image
          src={signupBg}
          alt="sign-up-bg"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          bgcolor: "#111111",
          justifyContent: "center",
          borderTopLeftRadius: "1.5rem",
          borderEndStartRadius: "1.5rem",
          marginLeft: "-30px",
          zIndex: "1",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            style={{
              width: "35.25rem",
              height: "18.375rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontWeight: "500",
                lineHeight: "50px",
                fontSize: "2.5rem",
                letterSpacing: "-0.031",
                color: "#FFFFFF",
              }}
            >
              Welcome back!
            </Typography>
            <Typography color={"#EAEAEF"}>
              To log in securely, please enter your registered email address and
              we'll send you a one-time code (OTP) for verification.
            </Typography>
            <TextField
              autoComplete="off"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <button
              style={{
                backgroundColor: "#E25319",
                color: "#FFFFFF",
                borderRadius: "1rem",
                padding: "1rem 1.5rem",
              }}
              type="submit"
            >
              Send Otp
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
