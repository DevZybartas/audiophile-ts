import { useForm } from "react-hook-form";

//Chakra UI
import {
  FormLabel,
  FormControl,
  Input,
  Flex,
  Checkbox,
  Text,
  Button,
} from "@chakra-ui/react";

//Chakra Styles Import
import { formLabelStyle } from "./checkoutStyle";

//Context
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

//Components
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    console.log("submited");
  };
  return (
    <Flex flexDir={{ base: "column" }} bgColor="white.300">
      Go back
      <Flex
        width={{ base: "100%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
        alignItems="center"
      >
        <Flex width="89%" justifyContent="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*Billing Address section */}
            <FormLabel
              color="orange.100"
              fontSize="13px"
              lineHeight="25px"
              letterSpacing="1px"
              fontWeight="bold"
            >
              BILLING DETAILS
            </FormLabel>
            <FormControl>
              <FormLabel color="black.100" fontWeight="bold" fontSize="12px">
                Name
              </FormLabel>
              <Input />
              <FormLabel {...formLabelStyle}>Email Address</FormLabel>
              <Input />
              <FormLabel {...formLabelStyle}>Phone Number</FormLabel>
              <Input />
            </FormControl>
            {/*Billing Address section end */}

            {/*Shipping info  section */}
            <FormLabel
              color="orange.100"
              fontSize="13px"
              lineHeight="25px"
              letterSpacing="1px"
              fontWeight="bold"
              textTransform="uppercase"
              mt="30px"
            >
              Shipping info
            </FormLabel>
            <FormControl>
              <FormLabel {...formLabelStyle}>Your Address</FormLabel>
              <Input />
              <FormLabel {...formLabelStyle}>ZIP Code</FormLabel>
              <Input />
              <FormLabel {...formLabelStyle}>City</FormLabel>
              <Input />
              <FormLabel {...formLabelStyle}>Country</FormLabel>
              <Input />
            </FormControl>

            {/*Shipping info  section end */}

            {/*Payment method  section */}
            <FormLabel
              color="orange.100"
              fontSize="13px"
              lineHeight="25px"
              letterSpacing="1px"
              fontWeight="bold"
              textTransform="uppercase"
              mt="30px"
            >
              Payment details
            </FormLabel>
            <FormControl>
              <FormLabel {...formLabelStyle}>Payment Method</FormLabel>
              <Flex flexDir={{ base: "column" }}>
                <Checkbox>e-Money</Checkbox>
                <Checkbox>Cash On Delivery</Checkbox>
              </Flex>

              <FormLabel {...formLabelStyle}>e-Money Number</FormLabel>
              <Input />
              <FormLabel {...formLabelStyle}>e-Money PIN</FormLabel>
              <Input />
            </FormControl>
          </form>
        </Flex>
        {/*Summary section */}
        <Flex
          width="87%"
          height="100%"
          flexDir={{ base: "column" }}
          bgColor="white.100"
          borderRadius="8px"
          mb={{ base: "95px" }}
        >
          <Text
            fontSize="18px"
            fontWeight="bold"
            letterSpacing="1.3px"
            textTransform="uppercase"
            mt={{ base: "32px" }}
            ml={{ base: "24px" }}
          >
            Summmary
          </Text>

          <Flex flexDir={{ base: "column" }} padding="24px">
            {cartItems.map((item) => (
              <CheckoutItem key={item._id} {...item} />
            ))}

            <Flex flexDir={{ base: "column" }}>
              <Text> TOTAL</Text>
              <Text>SHIPPING</Text>
              <Text>{`VAT (INCLUDED)`}</Text>
              <Text>GRAND TOTAL</Text>
            </Flex>

            {cartItems.length ? (
              <Button
                mt="30px"
                width="279px"
                height="48px"
                color="white"
                bgColor="orange.100"
                fontSize="13px"
                letterSpacing="1px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="bold"
                textTransform="uppercase"
                borderRadius="none"
              >
                Continue & pay
              </Button>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Checkout;