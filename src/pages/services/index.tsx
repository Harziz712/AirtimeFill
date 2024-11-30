import {
  ArrowsRightLeftIcon,
  BoltIcon,
  CalculatorIcon,
  WalletIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { ServiceType } from "../../shared/types";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ServiceBar from "./serviceBar";
import { LuArrowRight } from "react-icons/lu";
import { useColorModeValue } from "../../components/ui/color-mode";

const ServicesPage = () => {
  const textColor = useColorModeValue("cyan.800", "gray.200");

  const services: Array<ServiceType> = [
    {
      icon: <ArrowsRightLeftIcon />,
      name: "Convert airtime",
      description: "Convert your airtime to cash at amazing rates",
    },
    {
      icon: <WifiIcon />,
      name: "Purchase data",
      description:
        "Make data purchases to any network and pay from your mobile wallet",
    },
    {
      icon: <CalculatorIcon />,
      name: "Airtime Purchase",
      description:
        "Make airtime purchases to any network and pay from your mobile wallet",
    },
    {
      icon: <BoltIcon />,
      name: "Electricity bill Payment",
      description:
        "Pay your electicity bill online- fast, secure and hassle-free",
    },
    {
      icon: <WalletIcon />,
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
        padding={{ base: 5, md: 20 }}
        color={textColor}
        fontWeight={"bold"}
      >
        <Text fontSize={{ base: "1xl", md: "2xl" }}>Quick Services</Text>
        <Text display={"flex"} alignItems={"center"} gap={2}>
          See All <LuArrowRight />
        </Text>
      </Flex>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 3 }}
        paddingX="50px"
        gap={10}
        height={"100vh"}
      >
        {services.map((service) => (
          <ServiceBar
            icon={service.icon}
            name={service.name}
            description={service.description}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ServicesPage;
