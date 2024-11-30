import { Button, Image, Text, Icon } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../../components/ui/menu";
import ProfilePic from "../../assets/profilePic.jpg";
import { BsChevronDown } from "react-icons/bs";
import { useColorModeValue } from "../../components/ui/color-mode";
import { Link } from "react-router-dom";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { LuSettings } from "react-icons/lu";

const ProfileMenu = () => {
  const textColor = useColorModeValue("cyan.800", "gray.100");

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="outline"
          size="md"
          gap={3}
          borderWidth={2}
          borderColor={"gray.300"}
        >
          <Image
            src={ProfilePic}
            boxSize={"30px"}
            objectFit={"cover"}
            borderRadius={5}
          />{" "}
          <Text colorPalette={`${textColor}`}>Akanbi AbdulAzeez</Text>
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <Link to={"/settings"}>
          <MenuItem value="settings" width={"200px"}>
            <LuSettings size={"20px"} />
            Settings
          </MenuItem>
        </Link>
        <Link to={"/login"}>
          <MenuItem value="LogOut">
            <Icon fontSize={"20px"}>
              <ArrowLeftStartOnRectangleIcon />
            </Icon>
            Log Out
          </MenuItem>
        </Link>
      </MenuContent>
    </MenuRoot>
  );
};

export default ProfileMenu;
