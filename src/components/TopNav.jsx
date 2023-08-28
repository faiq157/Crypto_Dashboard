import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px={"4"} bg={"white"}>
      <HStack h={16} maxW={"60rem"} justify={"space-between"} mx={"auto"}>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
        />
        <Heading>{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon as={BiUser} fontSize={"2xl"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
