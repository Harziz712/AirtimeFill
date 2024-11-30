import { HStack, Icon } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "../components/ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette="green"
        size="lg"
        trackLabel={{
          on: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
          off: (
            <Icon color="yellow.400">
              <FaSun />
            </Icon>
          ),
        }}
        // colorScheme={"green"}
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        {/* <Text whiteSpace={"nowrap"}>Dark Mode</Text> */}
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
