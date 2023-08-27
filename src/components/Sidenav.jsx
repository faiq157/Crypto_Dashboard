import {
  Box,
  HStack,
  Heading,
  Icon,
  SliderMark,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiSolidDashboard, BiSupport } from "react-icons/bi";
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
    <Stack
      justifyContent="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      maxW={{
        base: "full",
        lg: "256px",
      }}
      h="100vh"
      pt="3.5rem"
    >
      <Box>
        <Heading p={4} textAlign="center" fontSize="20px" as="h2">
          Code Learning Zone
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              color="#797E82"
              py="3"
              px="4"
              alignItems="center"
              key={nav.text}
              _hover={{
                bg: "#F3F3F7",
                cursor: "pointer",
                rounded: "lg",
                color: "#171717",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontSize="18px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
          color="#797E82"
          py="3"
          px="4"
          alignItems="center"
          _hover={{
            bg: "#F3F3F7",
            cursor: "pointer",
            rounded: "lg",
            color: "#171717",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="18px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
