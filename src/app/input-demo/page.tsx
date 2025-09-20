"use client";
import React, { useState } from "react";
import { InputField, CodeInput } from "@/components/form";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: ${(props) =>
    props.theme.typography?.fontFamily?.primary || "Urbanist, sans-serif"};
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.colors?.text || "#212121"};
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-family: ${(props) =>
    props.theme.typography?.fontFamily?.primary || "Urbanist, sans-serif"};
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.colors?.text || "#212121"};
  margin-bottom: 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  font-family: ${(props) =>
    props.theme.typography?.fontFamily?.primary || "Urbanist, sans-serif"};
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors?.text || "#212121"};
  margin-bottom: 8px;
  display: block;
`;

const CodeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  background-color: ${(props) =>
    props.theme.colors?.greyscale?.[50] || "#FAFAFA"};
  border-radius: 16px;
`;

export default function InputDemoPage() {
  const [values, setValues] = useState({
    default: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    normal: "",
  });

  const [code, setCode] = useState("");

  const handleInputChange = (type: keyof typeof values) => (value: string) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <Container>
      <Title>Input Components Demo</Title>

      <Section>
        <SectionTitle>Input Types</SectionTitle>
        <Grid>
          <Column>
            <div>
              <Label>Default Input</Label>
              <InputField
                type="default"
                placeholder="Enter text here..."
                value={values.default}
                onChange={handleInputChange("default")}
              />
            </div>

            <div>
              <Label>Username Input</Label>
              <InputField
                type="username"
                value={values.username}
                onChange={handleInputChange("username")}
              />
            </div>

            <div>
              <Label>Email Input</Label>
              <InputField
                type="email"
                value={values.email}
                onChange={handleInputChange("email")}
              />
            </div>
          </Column>

          <Column>
            <div>
              <Label>Password Input</Label>
              <InputField
                type="password"
                value={values.password}
                onChange={handleInputChange("password")}
              />
            </div>

            <div>
              <Label>Phone Input</Label>
              <InputField
                type="phone"
                value={values.phone}
                onChange={handleInputChange("phone")}
              />
            </div>

            <div>
              <Label>Normal/Select Input</Label>
              <InputField
                type="normal"
                placeholder="Select an option"
                value={values.normal}
                onChange={handleInputChange("normal")}
              />
            </div>
          </Column>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Input States</SectionTitle>
        <Grid>
          <Column>
            <div>
              <Label>Default State</Label>
              <InputField type="default" placeholder="Default state" />
            </div>

            <div>
              <Label>Active State</Label>
              <InputField
                type="default"
                state="active"
                placeholder="Active state"
              />
            </div>

            <div>
              <Label>Filled State</Label>
              <InputField
                type="default"
                state="filled"
                value="Filled with content"
              />
            </div>
          </Column>

          <Column>
            <div>
              <Label>Error State</Label>
              <InputField type="email" error value="invalid-email" />
            </div>

            <div>
              <Label>Disabled State</Label>
              <InputField
                type="default"
                disabled
                placeholder="Disabled input"
              />
            </div>
          </Column>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Code Input (OTP)</SectionTitle>
        <CodeSection>
          <div>
            <Label>6-Digit Verification Code</Label>
            <CodeInput
              length={6}
              value={code}
              onChange={setCode}
              onComplete={(completedCode) => {
                alert(`Code completed: ${completedCode}`);
              }}
            />
          </div>

          <div>
            <Label>4-Digit PIN</Label>
            <CodeInput
              length={4}
              onComplete={(pin) => {
                alert(`PIN entered: ${pin}`);
              }}
            />
          </div>
        </CodeSection>
      </Section>

      <Section>
        <SectionTitle>Current Values</SectionTitle>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            fontSize: "14px",
            overflow: "auto",
          }}
        >
          {JSON.stringify({ ...values, code }, null, 2)}
        </pre>
      </Section>
    </Container>
  );
}
