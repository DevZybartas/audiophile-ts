import { Text, Heading, Link, Flex } from "@chakra-ui/react";
import { Default1btn } from "../../../chakra/appStyles";
const Banner = () => {
  return (
    <Flex
      width="100%"
      height="509px"
      justifyContent="center"
      fontFamily="main.100"
      bgImg="/home/mobile/image-header.jpg"
      backgroundPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center -90px"
    >
      <Flex
        width="88%"
        flexDir={{ base: "column" }}
        alignItems="center"
        px="15px"
        pt="95px"
        textAlign="center"
      >
        <Heading
          fontFamily="main.100"
          fontWeight="regular"
          color="white"
          opacity="0.5"
          textTransform="uppercase"
          letterSpacing="10px"
          mb="20px"
          fontSize={{ base: "14px" }}
        >
          New product
        </Heading>
        <Heading
          color="white"
          fontSize="36px"
          fontFamily="main.100"
          textTransform="uppercase"
          letterSpacing="1.4px"
          mb="22px"
          lineHeight="40px"
        >
          XX99 Mark II Headphones
        </Heading>
        <Text
          color="white"
          textAlign="center"
          fontSize="15px"
          mb="28px"
          fontWeight="medium"
          opacity="0.75"
          lineHeight="25px"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link {...Default1btn}>See product</Link>
      </Flex>
    </Flex>
  );
};

export default Banner;
