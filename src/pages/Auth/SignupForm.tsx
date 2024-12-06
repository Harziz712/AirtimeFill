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

interface FormValues {
  username: string;
  phoneNumber: number;
  email: string;
  password: string | number;
  confirmPassword: string | number;
}

const SignupForm = () => {
  const bgColor = useColorModeValue("gray.500", "gray.800");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/login");
  });

  return (
    <Stack paddingBottom={10}>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" paddingX={2}>
          <Field
            label="Username"
            invalid={!!errors.username}
            errorText={errors.username?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your username"
              {...register("username", { required: "Specify username" })}
            />
          </Field>

          <Field
            label="Email Address"
            invalid={!!errors.email}
            errorText={errors.email?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your email address"
              {...register("email", { required: "Specify email address" })}
            />
          </Field>
          <Field
            label="Phone number"
            invalid={!!errors.phoneNumber}
            errorText={errors.phoneNumber?.message}
          >
            <Input
              bgColor={bgColor}
              placeholder="Type in your phone number"
              {...register("phoneNumber", { required: "Specify phone number" })}
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
              {...register("password", { required: "Specify your password" })}
            />
          </Field>
          <Field
            label="Confirm password"
            invalid={!!errors.confirmPassword}
            errorText={errors.confirmPassword?.message}
          >
            <PasswordInput
              bgColor={bgColor}
              placeholder="Type in your password"
              {...register("password", {
                required: "Confirm password is required",
              })}
            />
          </Field>
          <Checkbox>
            <Flex gap={2}>
              I agree to the
              <Link to={""}>
                <Text color={"orange.500"}>terms and conditions</Text>
              </Link>
            </Flex>
          </Checkbox>

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
      <HStack>
        <Separator borderWidth={3} />
        <Text flexShrink="0">OR</Text>
        <Separator borderWidth={3} />
      </HStack>
      <Box paddingY={2} paddingRight={10} spaceY={3}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Login to account
        </Text>
        <Text>Click the login button if you already have an account</Text>
      </Box>
      <Link to="/login">
        <Button
          type="submit"
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
