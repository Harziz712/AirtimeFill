import { GridItem, Icon, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleLeftEllipsisIcon,
  GiftIcon,
  GlobeAltIcon,
  NewspaperIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../../components/ui/color-mode";
import { useState } from "react";

const SideBar = () => {
  const Sidebtns = [
    {
      path: "/dashboard",
      icon: <Squares2X2Icon />,
      page: "Dashboard",
    },
    {
      path: "/services",
      icon: <GlobeAltIcon />,
      page: "Services",
    },
    {
      path: "/transaction-history",
      icon: <PencilSquareIcon />,
      page: "Transaction History",
    },
    {
      path: "/e-pin",
      icon: <NewspaperIcon />,
      page: "E-pin",
    },
    {
      path: "/referrals",
      icon: <GiftIcon />,
      page: "Referrals",
    },
    {
      path: "/settings",
      icon: <Cog6ToothIcon />,
      page: "Settings",
    },
    {
      path: "/gethelp",
      icon: <ChatBubbleLeftEllipsisIcon />,
      page: "Get Help/FAQs",
    },
    {
      path: "/login",
      icon: <ArrowLeftStartOnRectangleIcon />,
      page: "LogOut",
    },
  ];
  const textColor = useColorModeValue("cyan.800", "gray.200");
  const [selectedPage, setSelectedPage] = useState<string>("");

  return (
    <SimpleGrid
      height={{ base: "90vh", md: "90vh" }}
      paddingY={{ base: "34px", md: "10px" }}
      gap={3}
      position={"fixed"}
    >
      {Sidebtns.map((sidebtn) => (
        <GridItem
          key={`${sidebtn.page}`}
          color={selectedPage === sidebtn.path ? "orange.500" : textColor}
          fontWeight={"bold"}
          borderRightWidth={4}
          borderRightColor={
            selectedPage === sidebtn.path ? "orange.400" : "transparent"
          }
          alignContent={"center"}
          onClick={() => setSelectedPage(sidebtn.path)} // Set selected page on click
          cursor="pointer"
        >
          <Link to={`${sidebtn.path}`}>
            <Flex gap={5} alignItems={"center"}>
              <Icon size={{ base: "lg", md: "2xl" }}>{sidebtn.icon}</Icon>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
              >{`${sidebtn.page}`}</Text>
            </Flex>
          </Link>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default SideBar;
