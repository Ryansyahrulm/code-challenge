import React from "react";
import { 
    Box, 
    Flex, 
    VStack, 
    Image, 
    Text, 
    Heading 
} from "@chakra-ui/react";

import Download from "@/assets/download.png";
import Logos from "@/assets/logo2.png";
import Facebook from "@/assets/Facebook.svg"

export const Footer = () => {
    const Social = [
        {
            logo    : Facebook
        },
        {
            logo    : Facebook
        },
        {
            logo    : Facebook
        },
        {
            logo    : Facebook
        },
        {
            logo    : Facebook
        }
    ];
    return (
        <Box 
        bgColor="#171717" 
        p="85px 155px" 
        borderRadius="40px" 
        mb="58px" 
        color="white"
        >
            <Flex
            h="268px"
            align="start"
            justify="space-between"
            w="full"
            >
                <Flex 
                ml="0" 
                h="100%"
                >
                <VStack align="start">
                    <Image src={Logos}>

                    </Image>
                    <Text color="white">
                        Ease of being together
                    </Text>
                    <Image 
                    mt="42px !important" 
                    src={Download}
                    >
                    </Image>
                    <Image src={Download}>

                    </Image>
                </VStack>
                </Flex>
                <Flex 
                h="100%" 
                mr="0" 
                gap={98}
                >
                <Flex h="100%">
                <VStack align="start">
                    <Heading fontSize="16px">
                        Eventnity
                    </Heading>
                    <Text fontSize="12px">
                        Start For Free
                    </Text>
                    <Text fontSize="12px">
                        Login
                    </Text>
                    <Text fontSize="12px">
                        Pricing
                    </Text>
                </VStack>
                </Flex>
                <Flex h="100%">
                <VStack align="start">
                    <Heading fontSize="16px">
                        Features
                    </Heading>
                    <Text fontSize="12px">
                        Start For Free
                    </Text>
                    <Text fontSize="12px">
                        Login
                    </Text>
                    <Text fontSize="12px">
                        Pricing
                    </Text>
                </VStack>
                </Flex>
                <Flex h="100%">
                <VStack align="start">
                    <Heading fontSize="16px">
                        Company
                    </Heading>
                    <Text fontSize="12px">
                        Start For Free
                    </Text>
                    <Text fontSize="12px">
                        Login
                    </Text>
                    <Text fontSize="12px">
                        Pricing
                    </Text>
                </VStack>
                </Flex>
                </Flex>
            </Flex>
            <Flex 
            w="full" 
            align="center" 
            mt="100px" 
            justify="space-between"
            >
                <Flex 
                ml="0" 
                gap={5} 
                align="center"
                >
                    {Social.map((ul, i) => (
                        <Image src={ul.logo}>
                        </Image>
                    ))}
                    <Text fontSize="12px">
                        Term of Service
                    </Text>
                    <Text fontSize="12px">
                        Privacy
                    </Text>
                    <Text fontSize="12px">
                        Return and Refund
                    </Text>
                </Flex>
                <Flex mr="0">
                    <Text fontSize="12px" mr="0">
                        Copyright @ 2023
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}