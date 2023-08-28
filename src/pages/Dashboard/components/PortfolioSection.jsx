import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidDownArrowSquare, BiSolidUpArrowSquare } from "react-icons/bi";

const PortfolioSection = () => {
  return (
    <HStack bg={"white"} rounded={"xl"} p={"24px"} spacing={16}>
      <Stack>
        <HStack fontSize={"14"} color={"black.80"}>
          <Text>Total Portfolio Value</Text>
          <Icon as={AiFillInfoCircle} />
        </HStack>
        <Text>₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <HStack fontSize={"14"} color={"black.80"}>
          <Text>Wallet Balances</Text>
        </HStack>
        <HStack>
          <Text>22.39401000</Text> <Tag>BTC</Tag>
        </HStack>
      </Stack>
      <Stack>
        <HStack>
          <Text>₹ 1,300.00</Text>
          <Tag>INR</Tag>
        </HStack>
      </Stack>

      <HStack>
        <Button color={"white"} bg={"purple"}>
          <Icon as={BiSolidDownArrowSquare} fontSize={20} />
          Deposit
        </Button>
        <Button color={"white"} bg={"purple"}>
          <Icon as={BiSolidUpArrowSquare} fontSize={20} />
          WithDraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
