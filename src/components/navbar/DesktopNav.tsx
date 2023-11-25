import { Flex, Image, Link } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  NavLink as RouterLink,
} from "react-router-dom";

const DesktopNav = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      display={{ base: "none", md: "none", lg: "flex" }}
    >
      <Flex
        width="76%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid rgb(151, 151, 151, 0.2)"
      >
        <Flex width="8.9375rem" height="1.5625rem">
          <Image src="/shared/desktop/logo.svg" />
        </Flex>
        <Flex
          color="white"
          width="50%"
          justifyContent="space-between"
          textTransform="uppercase"
        >
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/headphones"
            _active={{ bgColor: "red" }}
            textTransform="uppercase"
          >
            Headphones
          </Link>
          <Link as={RouterLink} to="/" textTransform="uppercase">
            Speakers
          </Link>
          <Link as={RouterLink} to="/" textTransform="uppercase">
            Earphones
          </Link>
        </Flex>
        <Flex>
          <Image src="/shared/desktop/icon-cart.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
