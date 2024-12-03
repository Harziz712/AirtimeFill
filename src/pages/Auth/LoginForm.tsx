import {
  Button,
  Flex,
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
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const bgColor = useColorModeValue("gray.500", "gray.800");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

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
              {...register("email", { required: "email is required" })}
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
            <Text color={"gray.400"}>forgot password ?</Text>
          </Flex>
        </Stack>
      </form>
      <HStack>
        <Separator />
        <Text flexShrink="0">OR</Text>
        <Separator />
      </HStack>
      <Link to="">
        <Button
          type="submit"
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
