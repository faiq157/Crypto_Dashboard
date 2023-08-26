import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
    },
    {
      icon: BiSolidDashboard,
      text: "Transaction",
    },
  ];

  return <Stack></Stack>;
};

export default Sidenav;
