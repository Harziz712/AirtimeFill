import { Input, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { toaster } from "../../components/ui/toaster";
import { useState } from "react";
import { Button } from "../../components/ui/button";

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, data.email);
      toaster.create({
        title: "Reset Email Sent",
        description: "Check your inbox for a link to reset your password.",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      const firebaseError = error as FirebaseError;
      toaster.create({
        title: "Error",
        description:
          firebaseError.message || "An error occurred. Please try again.",
        type: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack gap={4} maxWidth="400px" margin="0 auto" padding={6}>
      <Text fontSize="lg" fontWeight="bold">
        Forgot Password
      </Text>
      <Text fontSize="sm" color="gray.500">
        Enter your email address and we'll send you a link to reset your
        password.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={3}>
          <Input
            placeholder="Enter your email address"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <Text color="red.500">{errors.email.message}</Text>}
          <Button
            type="submit"
            colorScheme="orange"
            width="100%"
            loading={loading}
            loadingText="Saving..."
          >
            Send Reset Email
          </Button>
          <Link to="/login">
            <Text color="orange.500" textAlign="center">
              Back to Login
            </Text>
          </Link>
        </Stack>
      </form>
    </Stack>
  );
};

export default ForgotPassword;
