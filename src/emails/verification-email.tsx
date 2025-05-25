import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  // Link,
  Preview,
  Section,
  Text,
  Button,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";

interface VerificationEmailProps {
  verificationLink: string;
  name: string;
}

export const VerificationEmail = ({
  verificationLink,
  name
}: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your email address for AutoDev</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://your-logo-url.com/logo.png"
            width="48"
            height="48"
            alt="AutoDev"
            style={logo}
          />
          <Heading style={h1}>Welcome to AutoDev!</Heading>
          <Text style={text}>
            Hi {name},
          </Text>
          <Text style={text}>
            Thank you for signing up for AutoDev. To complete your registration and start using our platform, please verify your email address by clicking the button below:
          </Text>
          <Section style={buttonContainer}>
            <Button
              style={button}
              href={verificationLink}
              target="_blank"
            >
              Verify Email Address
            </Button>
          </Section>
          <Text style={text}>
            If you did not create an account with AutoDev, you can safely ignore this email.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent to you because you signed up for AutoDev. If you have any questions, please contact our support team.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default VerificationEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const logo = {
  margin: "0 auto",
  marginBottom: "24px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  padding: "16px 0",
  textAlign: "center" as const,
};

const text = {
  color: "#444",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: "16px 0",
};

const buttonContainer = {
  padding: "24px 0",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#7c3aed",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  width: "100%",
  maxWidth: "300px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  lineHeight: "22px",
  textAlign: "center" as const,
}; 