import React from "react";
import { 
    Box, 
    Text, 
    Link, 
    HStack, 
    Flex,
    Image
} from "@chakra-ui/react";

import Logo from "../assets/logo.png"

export const Navbar = () => {
    const menu = [
        {
            name : "Home",
            isBold : true,
            color : "secondary"
        },
        {
            name : "Pricing",
            isBold : false,
            color : "#000000"
        },
        {
            name : "Event",
            isBold : false,
            color : "#000000"
        },
        {
            name : "Resource",
            isBold : false,
            color : "#000000"
        },
        {
            name : "Helpdesk",
            isBold : false,
            color : "#000000"
        }
    ];
    return (
        <Box 
        as="nav" 
        display="flex" 
        justifyContent="space-between" 
        mt="32px"
        >
            <Flex align="center" gap={6}>
                <HStack pr={308}>
                    <Image src={Logo} ></Image>
                </HStack>

                {menu.map((ul, i) => (
                <Link
                    _hover={{
                    textDecoration: "none",
                    }}
                >
                    <Text
                    fontSize="16px"
                    lineHeight="20.11px"
                    color={ul.color}
                    fontWeight={ul.isBold ? "600" : "400"}
                    >
                    {ul.name}
                    </Text>
                </Link>
                ))}
            </Flex>
        <HStack HStack spacing={8}>
            <Text
            fontSize="16px"
            lineHeight="20.83px"
            color="secondary"
            fontWeight={700}
            cursor="pointer"
            >
            Login
            </Text>
            <Box
            h="37px"
            w="117px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="#070148"
            borderRadius="14px"
            cursor="pointer "
            pt="18px"
            pb="18px"
            >
            <Text

                fontSize="16px"
                lineHeight="20.83px"
                color="white"
                fontWeight={700}
            >
                Register
            </Text>
            </Box>
        </HStack>
    </Box>
    )
}