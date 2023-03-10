import {
  Container,
  IconButton,
  useColorMode,
  useColorModeValue,
  Heading,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Checkbox,
  useMediaQuery,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState } from "react";

import "./App.css";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColour = useColorModeValue("green.300", "green.800");
  const buttonHoverColour = useColorModeValue("green.400", "green.900");
  const [isLongerThan550] = useMediaQuery("(min-width: 550px)");

  const marginTopWeb = "2.5rem";
  const marginTopMobile = "1.5rem";

  return (
    <Box
      className="App"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <IconButton
        m={isLongerThan550 ? "1.5rem" : "0"}
        bg="none"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
      <Container
        bg={
          colorMode === "light"
            ? isLongerThan550
              ? "gray.50"
              : "white"
            : isLongerThan550
            ? "gray.900"
            : "gray.800"
        }
        // h="full"
        shadow={isLongerThan550 ? "md" : "none"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="xl"
        p="3rem"
      >
        <Heading
          textAlign="center"
          size={isLongerThan550 ? "xl" : "lg"}
          mb="1rem"
        >
          Login
        </Heading>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={() => {
            alert("Successfully logged in!");
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                mt={isLongerThan550 ? marginTopWeb : marginTopMobile}
                display="flex"
                flexDirection="column"
                gap={10}
                isRequired
              >
                <Box>
                  <FormLabel fontSize={isLongerThan550 ? "md" : "sm"}>
                    Email Address
                  </FormLabel>
                  <Field
                    as={Input}
                    name="email"
                    variant="filled"
                    shadow="base"
                    type="email"
                  />
                </Box>
              </FormControl>

              <FormControl
                mt={isLongerThan550 ? marginTopWeb : marginTopMobile}
                display="flex"
                flexDirection="column"
                gap={10}
                isRequired
                isInvalid={!!errors.password && touched.password}
              >
                <Box>
                  <FormLabel fontSize={isLongerThan550 ? "md" : "sm"}>
                    Password
                  </FormLabel>
                  <Field
                    as={Input}
                    name="password"
                    variant="filled"
                    shadow="base"
                    type="password"
                    validate={(value) => {
                      if (value.length <= 8) {
                        return "Password must have over 8 characters";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </Box>
              </FormControl>

              <FormControl
                mt={isLongerThan550 ? marginTopWeb : marginTopMobile}
                display="flex"
                flexDirection="column"
                gap={10}
              >
                <Box>
                  <Field
                    as={Checkbox}
                    name="rememberMe"
                    size={isLongerThan550 ? "md" : "sm"}
                  >
                    Remember me{" "}
                  </Field>
                </Box>
              </FormControl>

              <Button
                bg={buttonColour}
                _hover={{ bg: buttonHoverColour }}
                mt={10}
                shadow="base"
                type="submit"
                fontSize={isLongerThan550 ? "md" : "sm"}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
