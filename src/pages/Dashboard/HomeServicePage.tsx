import {
  ArrowsRightLeftIcon,
  BoltIcon,
  CalculatorIcon,
  WalletIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import { useColorModeValue } from "../../components/ui/color-mode";
import ServiceBar, { ServiceType } from "./serviceBar";

const HomeServicePage = () => {
  const textColor = useColorModeValue("cyan.800", "gray.200");

  const services: Array<ServiceType> = [
    {
      icon: <ArrowsRightLeftIcon />,
      path: "",
      name: "Convert airtime",
      description: "Convert your airtime to cash at amazing rates",
    },
    {
      icon: <WifiIcon />,
      path: "",
      name: "Purchase data",
      description:
        "Make data purchases to any network and pay from your mobile wallet",
    },
    {
      icon: <CalculatorIcon />,
      path: "",
      name: "Airtime Purchase",
      description:
        "Make airtime purchases to any network and pay from your mobile wallet",
    },
    {
      icon: <BoltIcon />,
      path: "",
      name: "Electricity bill Payment",
      description:
        "Pay your electicity bill online- fast, secure and hassle-free",
    },
    {
      icon: <WalletIcon />,
      path: "",
      name: "Fund wallet",
      description:
        "Add money to your HarzFlip wallet from your credit card or bank account",
    },
  ];

  return (
    <>
      {" "}
      <Flex
        justifyContent={"space-between"}
        padding={{ base: 5, md: 10 }}
        color={textColor}
        fontWeight={"bold"}
      >
        <Text fontSize={{ base: "1xl", md: "2xl" }}>Quick Services</Text>
        <Text display={"flex"} alignItems={"center"} gap={2}>
          See All <LuArrowRight />
        </Text>
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 3, xl: 4 }}
        paddingX={{ base: "12px", md: "30px" }}
        gap={{ base: 5, md: 10 }}
        justifyContent={"center"}
      >
        {services.map((service) => (
          <ServiceBar
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

export default HomeServicePage;
