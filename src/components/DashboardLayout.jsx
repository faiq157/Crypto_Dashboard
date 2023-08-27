import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawar from "./SideDrawar";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box display={{ base: "none", md: "flex" }}>
        <Sidenav />
      </Box>

      <SideDrawar isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container bg={"red"} maxW={"60rem"}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
