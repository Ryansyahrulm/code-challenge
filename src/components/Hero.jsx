import React from "react";
import { 
    Flex, 
    VStack, 
    Image, 
    Text, 
    Heading, 
    HStack, 
    Box, 
    SimpleGrid, 
    Grid, 
    Stack, 
    GridItem 
} from "@chakra-ui/react";

import Abt from "../assets/Abt.png";
import Venue from "../assets/venue.png";
import Recap from "../assets/recap.png";
import Schedule from "../assets/schedule.png"
import Partner from "../assets/partner.png"
import Music from "@/assets/music.svg"

export const Hero = () => {
    const menu = [
        {
            photo   : Schedule,
            date    : "February 6th 2023",
            time    : "10 PM to 12 PM",
            header  : "Meet Up Freelancer",
            text    : "Become a potentional and prodessional freelacer"
        },
        {
            photo   : Schedule,
            date    : "February 6th 2023",
            time    : "10 PM to 12 PM",
            header  : "Meet Up Freelancer",
            text    : "Become a potentional and prodessional freelacer"
        },
        {
            photo   : Schedule,
            date    : "February 6th 2023",
            time    : "10 PM to 12 PM",
            header  : "Meet Up Freelancer",
            text    : "Become a potentional and prodessional freelacer"
        },
        {
            photo   : Schedule,
            date    : "February 6th 2023",
            time    : "10 PM to 12 PM",
            header  : "Meet Up Freelancer",
            text    : "Become a potentional and prodessional freelacer"
        },
        {
            photo   : Schedule,
            date    : "February 6th 2023",
            time    : "10 PM to 12 PM",
            header  : "Meet Up Freelancer",
            text    : "Become a potentional and prodessional freelacer"
        },
        {
            photo   : Schedule,
            date    : "February 6th 2023",
            time    : "10 PM to 12 PM",
            header  : "Meet Up Freelancer",
            text    : "Become a potentional and prodessional freelacer"
        }
    ];

    const partner = [
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
        {
            logo    : Partner
        },
    ];

    return (
        <Box>
        <Flex
        h="695px"
        align="center"
        backgroundImage={
          "url(https://images.unsplash.com/photo-1598214015728-bc73871186d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80)"
        }
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        borderRadius="14px"
        mt="32px"
        >
            <Flex 
            ms="32px" 
            align="start"
            >
                <VStack 
                h="full" 
                color="white" 
                align="start" 
                w="667px"
                >
                    <Text fontSize="24px">
                        Welcome to our ticketing website!
                    </Text>
                    <Heading 
                    fontSize="72px" 
                    fontWeight="900"
                    >
                    Where Your <Text as="span" fontSize="72px" fontWeight="900" bgGradient='linear(to-l, #6D28D9 0%, #E127FF 59.9%, #FF2976 100%)' bgClip="text">Event </Text>Dreams Come to Life!
                    </Heading>
                    <Text fontSize="18px">
                    Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest.
                    </Text>
                </VStack>
            </Flex>
        </Flex>
        <VStack mt="-3% !important">
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="#070148"
            borderRadius="14px"
            py="30px"
            px="60px"
        >
            <Text
                fontSize="24px"
                lineHeight="20.83px"
                color="white"
                fontWeight={700}
            >
                Explore Event
            </Text>
            </Box>
            </VStack>
            <Flex w="full" align="center">
            <Flex 
            p="20px 30px" 
            position="absolute" 
            bgColor="white" 
            boxShadow='0px 4px 40px rgba(91, 33, 182, 0.19)' 
            borderRadius="30px"
            right="369px"
            top="1300px"
            >
                <VStack>
                    <Heading fontSize="64px" m="0">
                        46+
                    </Heading>
                    <Text fontSize="16px" fontWeight="500" m="0">
                        Event In The Last Year
                    </Text>
                </VStack>
            </Flex>
            <VStack w="50%" align="start">
                <Heading fontSize="64px">
                    About Eventnity
                </Heading>
                <Text 
                mt="24px !important" 
                fontSize="28px" 
                w="530px"
                >
                Evenity is event management expertise that helps and facilitates Event Planners in achieving the goal of carrying out an event.
                </Text>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgColor="#070148"
                    borderRadius="14px"
                    py="30px"
                    px="60px"
                    mt="60px !important"
                    >
                    <Text
                    fontSize="24px"
                    lineHeight="20.83px"
                    color="white"
                    fontWeight={700}
                    >
                    Explore Event
                    </Text>
                </Box>
            </VStack>
            <VStack 
            w="50%" 
            my="100px !important"
            >
                <Image 
                src={Abt} 
                alignSelf="start"
                >
                </Image>
                <Image 
                src={Abt} 
                alignSelf="end" 
                mt="-220px !important"
                >
                </Image>
            </VStack>
        </Flex>
        <Flex 
        align="end" 
        justify="space-between"
        >
            <VStack>
                <Heading fontSize="96px">
                    Explore
                    <br />
                    Beautiful
                    <br />
                    Venues
                </Heading>  
                <Image src={Venue}>
                </Image>
            </VStack> 
            <Flex 
            p="30px 40px" 
            position="absolute" 
            bgColor="white" 
            boxShadow='0px 4px 40px rgba(91, 33, 182, 0.19)' 
            borderRadius="30px"
            right="440px"
            top="1900px"
            >
                    <Flex 
                    align="start"
                    display="block"
                    >
                        <Text
                        fontSize="20px" 
                        fontWeight="500"
                        mr="5px"
                        color="#6B7280"
                        mb="20px"
                        >
                            VENUE : 1
                        </Text>
                        <Heading fontSize="24px" m="0" fontWeight="500">
                            RAFAELE<br />CONENTION HALL
                        </Heading>
                        <Flex 
                        align="center" 
                        mt="28px">
                            <Text 
                            fontSize="16px" 
                            fontWeight="500"
                            mr="5px"
                            color="#6B7280"
                            >
                                North Sumatra, Indonesia
                            </Text>
                            <Image src={Music}>
                            </Image>
                        </Flex>
                    </Flex>
            </Flex>
            <Flex 
                p="30px 40px" 
                position="absolute" 
                bgColor="white" 
                boxShadow='0px 4px 40px rgba(91, 33, 182, 0.19)' 
                borderRadius="30px"
                left="428px"
                top="2300px"
                >
                    <Flex 
                    align="start"
                    display="block"
                    >
                        <Text
                        fontSize="20px" 
                        fontWeight="500"
                        mr="5px"
                        color="#6B7280"
                        mb="20px"
                        >
                            VENUE : 2
                        </Text>
                        <Heading fontSize="24px" m="0" fontWeight="500">
                            KEMPINSKI<br />HOTEL INDONESIA
                        </Heading>
                        <Flex 
                        align="center" 
                        mt="28px">
                            <Text 
                            fontSize="16px" 
                            fontWeight="500"
                            mr="5px"
                            color="#6B7280"
                            >
                                Jakarta, Indonesia
                            </Text>
                            <Image src={Music}>
                            </Image>
                        </Flex>
                    </Flex>
                    </Flex> 
            <VStack justify="center">
                <Image src={Venue}>
                </Image>

                <Text 
                w="438px" 
                fontSize="28px"
                >
                Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.
                </Text>
            </VStack>  
        </Flex>
        <Box my="160px">
                <Heading align="center">
                    RECAP EVENT 2022
                </Heading>
                <Image 
                src={Recap} 
                mt="58px"
                >
                </Image>
                <Flex 
                justify="space-between" 
                mt="120px" 
                align="center"
                >
                    <Flex 
                    w="234px" 
                    h="196px" 
                    gap="10px" 
                    boxShadow="0px 4px 40px rgba(91, 33, 182, 0.19)" 
                    align="center" 
                    borderRadius="20px"
                    >
                    <VStack m="auto !important">
                        <Heading>
                            23
                        </Heading>
                        <Text>
                            DAYS
                        </Text>
                    </VStack>
                    </Flex>
                    <Flex 
                    w="234px" 
                    h="196px" 
                    gap="10px" 
                    boxShadow="0px 4px 40px rgba(91, 33, 182, 0.19)" 
                    align="center" 
                    borderRadius="20px"
                    >
                    <VStack m="auto !important">
                        <Heading>
                            09
                        </Heading>
                        <Text>
                            HOURS
                        </Text>
                    </VStack>
                    </Flex>
                    <Flex 
                    w="234px" 
                    h="196px" 
                    gap="10px" 
                    boxShadow="0px 4px 40px rgba(91, 33, 182, 0.19)" 
                    align="center" 
                    borderRadius="20px"
                    >
                    <VStack m="auto !important">
                        <Heading>
                            17
                        </Heading>
                        <Text>
                            MINUTES
                        </Text>
                    </VStack>
                    </Flex>
                    <Flex 
                    w="234px" 
                    h="196px" 
                    gap="10px" 
                    boxShadow="0px 4px 40px rgba(91, 33, 182, 0.19)" 
                    align="center" 
                    borderRadius="20px"
                    >
                    <VStack m="auto !important">
                        <Heading>
                            03
                        </Heading>
                        <Text>
                            SECONDS
                        </Text>
                    </VStack>
                    </Flex>
                </Flex>
        </Box>
        <Box>
            <Heading 
            align="center" 
            mb="58px"
            >
                EVENT SCHEDULE
            </Heading>
            <SimpleGrid 
            mb="58px" 
            templateColumns='repeat(3, 1fr)' 
            gap={6}
            >
                {menu.map((ul, i) => (
                    <Box mt="20px">
                    <Image
                      src={Schedule}
                    />
                    <HStack justify="space-between">
                        <Text>
                            {ul.date}
                        </Text>
                        <Text>
                            {ul.time}
                        </Text>
                    </HStack>
                    <Stack 
                    mt='6' 
                    spacing='3'
                    >
                      <Heading size='md'>
                        {ul.header}
                      </Heading>
                      <Text>
                        {ul.text}
                      </Text>
                    </Stack>
                    </Box>
                ))}
            </SimpleGrid>
            <VStack>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="#070148"
            borderRadius="14px"
            py="30px"
            px="60px"
        >
            <Text
                fontSize="24px"
                lineHeight="20.83px"
                color="white"
                fontWeight={700}
            >
                View More
            </Text>
            </Box>
            </VStack>
        </Box>
        <Box my="160px">
            <Heading 
            align="center" 
            mb="58px"
            >
                CLIENT PARTNER
            </Heading>
            <Grid 
            templateColumns="repeat(4, 1fr)" 
            gap={10}
            >
                {partner.map((el, i) => (
                    <GridItem 
                    p="28px 72px" 
                    boxShadow="0px 4px 40px rgba(91, 33, 182, 0.19)" 
                    borderRadius="20px"
                    >
                        <Image src={el.logo}>
                            
                        </Image>
                    </GridItem>
                ))};
            </Grid> 
            <VStack>
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="#070148"
            borderRadius="14px"
            py="30px"
            px="60px"
            >
            <Text
                fontSize="24px"
                lineHeight="20.83px"
                color="white"
                fontWeight={700}
            >
                All Client Partner
            </Text>
            </Box>
            </VStack>
        </Box>
        </Box>
    )
} 