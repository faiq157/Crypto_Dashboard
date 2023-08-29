import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidDownArrowSquare, BiSolidUpArrowSquare } from "react-icons/bi";

const PortfolioSection = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      bg={"white"}
      rounded={"xl"}
      p={"24px"}
      alignItems={{
        base: "flex-start",
        lg: "center",
      }}
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <Stack>
        <HStack fontSize={"14"} color={"black.80"}>
          <Text>Total Portfolio Value</Text>

          <Icon as={AiFillInfoCircle} />
        </HStack>
        <Text>₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <Text fontSize={"14"} color={"black.80"}>
          Wallet Balances
        </Text>
        <HStack>
          <Text>₹ 112,312.24</Text>
          <Tag colorScheme="gray">BTC</Tag>
          <HStack>
            <Text>₹ 112,312.24</Text>
            <Tag colorScheme="gray">INR</Tag>
          </HStack>
        </HStack>
      </Stack>
      <HStack>
        <Button>
          <Icon as={BiSolidDownArrowSquare} fontSize={20} />
          Deposit
        </Button>

        <Button>
          <Icon as={BiSolidUpArrowSquare} fontSize={20} />
          WithDraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
