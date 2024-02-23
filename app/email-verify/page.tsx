"use client";
import Box from "@mui/material/Box";
import signupBg from "../../public/sign-up-bg.jpg";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Typography from "@mui/material/Typography";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EmailVeify: React.FC = () => {
  const [otp, setOtp] = useState<string>();
  const [timeLimit, sertTimeLimit] = useState<number>(15);
  const [isotpVerified, setIsOtpVerified] = useState<boolean>(false);
  const [isInputsError, setIsInputsError] = useState<string | null>(null);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp === undefined || otp.length <= 5) {
      setIsInputsError("Incomplete OTP Entry");
    }
    //verify otp is valid ,then change the isotpVerified == true
    else {
      router.push("/homedashboard");
    }
  };

  const handleKeyDown = () => {
    setIsInputsError(null);
  };

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
        <form onSubmit={handleSubmit}>
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
              Verify your Login
            </Typography>
            <Typography color={"#EAEAEF"}>
              We just sent a 4-digit verification code to econev@gmail.com.
              Enter the code in the box below to continue.
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      margin: "1.3rem",
                      width: "3.375rem",
                      color: "#FFFFFF",
                      borderRadius: "1rem",
                      padding: "0.875rem 1rem",
                      backgroundColor: "#4A4A6A",
                      outlineColor: "#E25319",
                      textAlign: "center",
                    }}
                    onClick={handleKeyDown}
                  />
                )}
              />
            </Box>
            <Box>
              <Typography
                color="red"
                variant="body2"
                style={{
                  width: "100%",
                }}
              >
                {isInputsError}
              </Typography>
            </Box>
            {isotpVerified ? (
              <Box
                sx={{
                  bgcolor: "#FFECEC",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                <Typography color="#F44336">
                  <NewReleasesIcon /> Error: Invalid OTP, please try again or
                  request a new code.
                </Typography>
              </Box>
            ) : (
              ""
            )}{" "}
            <Box sx={{ textAlign: "center" }}>
              <Typography color="#8E8EA9">
                Code expires in {timeLimit} min. Didn't receive it?{" "}
                <Typography
                  color="#FFB01D"
                  component="span"
                  style={{ cursor: "pointer" }}
                >
                  Resend OTP Code
                </Typography>
              </Typography>
            </Box>
            <button
              style={{
                backgroundColor: "#E25319",
                color: "#FFFFFF",
                borderRadius: "1rem",
                padding: "1rem 1.5rem",
              }}
              type="submit"
            >
              Continue <ArrowForwardIcon />
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EmailVeify;
