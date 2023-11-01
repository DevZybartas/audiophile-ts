import { urlFor } from "../../../../sanity/sanity";
import { Box, Text, Heading, Flex, Link, Image } from "@chakra-ui/react";

// Types

import { IProduct } from "../../../types";

const ProductsComponent = ({
  title,
  desc,
  image,
  slug,
  isNewProduct,
}: IProduct) => {
  return (
    <Flex flexDir={{ base: "column" }} alignItems="center" mb="120px">
      <Flex
        key={title}
        flexDir={{ base: "column" }}
        width="88%"
        height={{ base: "100%" }}
        alignItems="center"
      >
        <Box
          boxShadow="lg"
          height={{ base: "352px" }}
          width="100%"
          borderRadius="10px"
        >
          {image && (
            <Image
              width="100%"
              height="100%"
              borderRadius="10px"
              src={urlFor(image).url()}
              alt={title}
            ></Image>
          )}
        </Box>

        {isNewProduct === true ? (
          <Text
            mt="32px"
            color="orange.100"
            fontSize="14px"
            letterSpacing="10px"
            fontFamily="main.100"
            textTransform="uppercase"
          >
            New product
          </Text>
        ) : null}
        <Flex
          mt="32px"
          flexDir={{ base: "column" }}
          width="99%"
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "28px" }}
            letterSpacing="1px"
            textTransform="uppercase"
            fontFamily="main.100"
            fontWeight="bold"
            color="black.200"
          >
            {title}
          </Heading>
          <Text
            mt="25px"
            fontFamily="main.100"
            fontSize={{ base: "15px" }}
            lineHeight="25px"
            fontWeight="medium"
            opacity="0.5"
            color="black.200"
          >
            {desc}
          </Text>
        </Flex>
        <Link
          href={`/products/${slug.current}`}
          mt="30px"
          width="160px"
          height="48px"
          color="white"
          bgColor="orange.100"
          fontSize="13px"
          letterSpacing="1px"
          fontFamily="main.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          SEE PRODUCT
        </Link>
      </Flex>
    </Flex>
  );
};

export default ProductsComponent;
