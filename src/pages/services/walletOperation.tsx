import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { LuArrowUpDown } from "react-icons/lu";
import { useColorModeValue } from "../../components/ui/color-mode";
import { ServiceType } from "../Dashboard/serviceBar";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
import OperationBar from "../../shared/operationBar";
import useMediaQuery from "../../hooks/useMediaQuery";

const WalletOperation = () => {
  const textColor = useColorModeValue("cyan.800", "gray.200");
  const smallLaptop = useMediaQuery("(max-width:1024px)");

  const services: Array<ServiceType> = [
    {
      icon: <BsArrowBarDown size={"20px"} />,
      path: "",
      name: "Fund wallet",
      description:
        "Add money to your AirtimeEase wallet from your credit card or bank account",
    },
    {
      icon: <BsArrowBarUp size={"20px"} />,
      path: "",
      name: "Withdraw Fund",
      description:
        "Send money to your bank account from your AirtimeEase wallet",
    },
    {
      icon: <LuArrowUpDown size={"20px"} />,
      path: "",
      name: "Transfer Fund",
      description:
        "Transfer funds from your AirtimeEase Wallet to other AirtimeEase users ",
    },
  ];

  return (
    <>
      <Flex
        padding={{ base: 5 }}
        color={textColor}
        fontWeight={"bold"}
        marginY={5}
      >
        <Text fontSize={{ base: "1xl", md: "2xl" }}>Wallet Operations</Text>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: smallLaptop ? 2 : 3 }}
        paddingX={{ base: "12px", md: "30px" }}
        gap={{ base: 5, md: 10 }}
        justifyContent={"center"}
      >
        {services.map((service) => (
          <OperationBar
            path={service.path}
            icon={service.icon}
            name={service.name}
            description={service.description}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default WalletOperation;
