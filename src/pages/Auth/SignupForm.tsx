import {
  Box,
  Button,
  HStack,
  Input,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";
import { useForm } from "react-hook-form";
import { useColorModeValue } from "../../components/ui/color-mode";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "../../components/ui/checkbox";
import { Flex } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toaster } from "../../components/ui/toaster";

interface FormValues {
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const bgColor = useColorModeValue("gray.500", "gray.800");
  const auth = getAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toaster.create({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        type: "error",
        duration: 3000,
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toaster.create({
        title: "Account Created",
        description: "Your account has been successfully created.",
        type: "success",
        duration: 3000,
      });
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toaster.create({
          title: "Sign Up Failed",
          description: error.message || "An error occurred. Please try again.",
          type: "error",
          duration: 3000,
        });
      } else {
        toaster.create({
          title: "Sign Up Failed",
          description: "An unexpected error occurred. Please try again.",
          type: "error",
          duration: 3000,
        });
      }
    }
  });

  return (
    <Stack paddingBottom={10}>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" paddingX={2}>
          {/* Username Field */}
          <Field
            label="Username"
            invalid={!!errors.username}
            errorText={errors.username?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your username"
              {...register("username", { required: "Username is required" })}
            />
          </Field>

          {/* Email Field */}
          <Field
            label="Email Address"
            invalid={!!errors.email}
            errorText={errors.email?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
          </Field>

          {/* Phone Number Field */}
          <Field
            label="Phone number"
            invalid={!!errors.phoneNumber}
            errorText={errors.phoneNumber?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your phone number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid phone number",
                },
              })}
            />
          </Field>

          {/* Password Field */}
          <Field
            label="Password"
            invalid={!!errors.password}
            errorText={errors.password?.message}
          >
            <PasswordInput
              bgColor={bgColor}
              placeholder="Type in your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </Field>

          {/* Confirm Password Field */}
          <Field
            label="Confirm password"
            invalid={!!errors.confirmPassword}
            errorText={errors.confirmPassword?.message}
          >
            <PasswordInput
              bgColor={bgColor}
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
          </Field>

          {/* Terms and Conditions */}
          <Checkbox>
            <Flex gap={2}>
              I agree to the
              <Link to="/terms">
                <Text color={"orange.500"}>terms and conditions</Text>
              </Link>
            </Flex>
          </Checkbox>

          {/* Submit Button */}
          <Button
            type="submit"
            width={"100%"}
            bgColor={"orange.500"}
            color={"gray.300"}
            fontWeight={"bold"}
          >
            Register
          </Button>
        </Stack>
      </form>

      {/* Separator */}
      <HStack>
        <Separator borderWidth={3} />
        <Text flexShrink="0">OR</Text>
        <Separator borderWidth={3} />
      </HStack>

      {/* Login Section */}
      <Box paddingY={2} paddingRight={10}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Already have an account?
        </Text>
        <Text>Click the login button if you already have an account</Text>
      </Box>
      <Link to="/login">
        <Button
          type="button"
          width={"100%"}
          bgColor={"orange.500"}
          color={"gray.300"}
          fontWeight={"bold"}
        >
          Log in
        </Button>
      </Link>
    </Stack>
  );
};

export default SignupForm;
