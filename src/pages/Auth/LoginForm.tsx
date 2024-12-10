import { Flex, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";
import { useForm } from "react-hook-form";
import { useColorModeValue } from "../../components/ui/color-mode";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase"; // Make sure to import your Firebase auth instance
import { toaster } from "../../components/ui/toaster";
import { Button } from "../../components/ui/button";
import { FirebaseError } from "firebase/app";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const bgColor = useColorModeValue("gray.500", "gray.800");
  const auth = getAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User logged in:", userCredential.user);
      toaster.create({
        title: "Login Successful",
        description: "You have successfully logged in!",
        type: "success",
        duration: 3000,
      });
      navigate("/dashboard"); // Navigate to dashboard on successful login
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error("Login Error:", error);
        toaster.create({
          title: "Login Failed",
          description:
            error.message || "Invalid credentials. Please try again.",
          type: "error",
          duration: 3000,
        });
      } else {
        console.error("Unexpected Error:", error);
        toaster.create({
          title: "Login Failed",
          description: "An unexpected error occurred. Please try again.",
          type: "error",
          duration: 3000,
        });
      }
    }
  });

  return (
    <Stack>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" paddingX={2}>
          <Field
            label="Email Address"
            invalid={!!errors.email}
            errorText={errors.email?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your email address"
              {...register("email", { required: "Email is required" })}
            />
          </Field>

          <Field
            label="Password"
            invalid={!!errors.password}
            errorText={errors.password?.message}
          >
            <PasswordInput
              bgColor={bgColor}
              placeholder="Type in your password"
              {...register("password", { required: "Password is required" })}
            />
          </Field>

          <Button
            type="submit"
            width={"100%"}
            bgColor={"orange.500"}
            color={"gray.300"}
            fontWeight={"bold"}
          >
            Log in
          </Button>

          <Flex width="100%" justifyContent="flex-end">
            <Link to={"/forgot-password"}>
              <Text color={"gray.400"}>Forgot password?</Text>
            </Link>
          </Flex>
        </Stack>
      </form>
      <HStack>
        <Separator borderWidth={3} />
        <Text flexShrink="0">OR</Text>
        <Separator borderWidth={3} />
      </HStack>
      <Link to="/signup">
        <Button
          width={"100%"}
          bgColor={"orange.500"}
          color={"gray.300"}
          fontWeight={"bold"}
        >
          Sign up
        </Button>
      </Link>
    </Stack>
  );
};

export default LoginForm;
