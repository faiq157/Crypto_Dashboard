import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";

const Sidenav = () => {
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack boxShadow="sm" maxW="256px" h="100vh" pt="3.5rem">
      <Heading textAlign="center" fontSize="20px" as="h2">
        Code Learning Zone
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack
            py="3"
            px="4"
            alignItems="center"
            key={nav.text}
            _hover={{
              bg: "#F3F3F7",
              cursor: "pointer",
              rounded: "lg",
            }}
          >
            <Icon as={nav.icon} />
            <Text fontSize="18px">{nav.text}</Text>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Sidenav;
