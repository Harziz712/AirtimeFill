import { SimpleGrid } from "@chakra-ui/react";
import ServiceList, { ServiceType2 } from "./serviceList";
import Airtime from "../../assets/serviceImages/airtime.png";
import Data from "../../assets/serviceImages/data.png";
import Bill from "../../assets/serviceImages/billxgift.png";
import Convert from "../../assets/serviceImages/airtime2.png";
import Bet from "../../assets/serviceImages/bet.png";
import Network from "../../assets/serviceImages/net.png";

const services: Array<ServiceType2> = [
  {
    image: Convert,
    name: "Convert airtime",
    description:
      "Easily convert your over recharged airtime and get paid in minutes",
  },
  {
    image: Bill,
    name: "Bill Payments",
    description: "Conviniently make cable,power, educational and other bills",
  },
  {
    image: Airtime,
    name: "Airtime Purchase",
    description:
      "Make airtime purchases to any network and pay from your mobile wallet",
  },
  {
    image: Data,
    name: "Data purchase",
    description:
      "Make data purchases to any network and pay from your mobile wallet",
  },
  {
    image: Bet,
    name: "Fund Betting Account",
    description:
      "Let us help you fund your betting account to bet on your favorite teams",
  },
  {
    image: Network,
    name: "International Airtime And Data",
    description: "Buy international airtime and data at mind blowing rates",
  },
];

const ServiceGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      paddingX={{ base: "12px", md: "30px" }}
      gap={{ base: 5, md: 10 }}
      justifyContent={"center"}
      paddingTop={5}
    >
      {services.map((service) => (
        <ServiceList
          image={service.image}
          name={service.name}
          description={service.description}
        />
      ))}
    </SimpleGrid>
  );
};

export default ServiceGrid;
