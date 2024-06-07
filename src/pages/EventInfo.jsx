import { Box, Button, Container, Flex, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import { SearchIcon } from "react-icons/fa";

const events = [
  {
    date: "Fri, Jul 22, 6:00 PM",
    title: "The Great Gatsby",
    description: "A lavish world premiere event for the highly anticipated film The Great Gatsby",
    image: "/images/great-gatsby.jpg",
  },
  {
    date: "Sat, Jul 23, 2:00 PM",
    title: "The Metamorphosis",
    description: "The Metamorphosis, a novella written by Franz Kafka in 1915, is a story of Gregor Samsa, who wakes up one day to find himself transformed into a monstrous vermin",
    image: "/images/metamorphosis.jpg",
  },
  {
    date: "Sun, Jul 24, 8:00 PM",
    title: "The Rolling Stones",
    description: "The Rolling Stones will be performing at the Rose Bowl Stadium on July 25th, 2023. Don't miss this once-in-a-lifetime opportunity to see one of the greatest rock bands of all time live in concert",
    image: "/images/rolling-stones.jpg",
  },
  {
    date: "Mon, Jul 25, 6:00 PM",
    title: "Cooking Class: Summer Salads",
    description: "Join us for a fun and informative cooking class where we'll teach you how to make a variety of delicious and healthy summer salads. You'll learn all about different types of greens, how to prepare them, and how to make your own homemade salad dressings",
    image: "/images/summer-salads.jpg",
  },
];

const EventInfo = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Flex justify="space-between" align="center" mb={10}>
        <HStack spacing={4}>
          <Image src="/favicon.ico" alt="Eventpedia Logo" boxSize="40px" />
          <Heading size="md">Eventpedia</Heading>
        </HStack>
        <HStack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input type="text" placeholder="Search" />
          </InputGroup>
          <Button colorScheme="blue">Create event</Button>
          <Button>Invite friends</Button>
        </HStack>
      </Flex>
      <VStack spacing={6} align="start">
        <Heading>Discover upcoming events</Heading>
        <Text>Find virtual and in-person events you love</Text>
        <InputGroup size="lg" mb={6}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input type="text" placeholder="Search events by name, category, city, or date" />
        </InputGroup>
        {events.map((event, index) => (
          <Flex key={index} w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" align="center">
            <Box flex="1">
              <Text fontSize="sm" color="gray.500">{event.date}</Text>
              <Heading size="md" mt={2}>{event.title}</Heading>
              <Text mt={2}>{event.description}</Text>
              <Button mt={4} colorScheme="gray">View event</Button>
            </Box>
            <Image src={event.image} alt={event.title} boxSize="150px" objectFit="cover" ml={4} />
          </Flex>
        ))}
      </VStack>
    </Container>
  );
};

export default EventInfo;