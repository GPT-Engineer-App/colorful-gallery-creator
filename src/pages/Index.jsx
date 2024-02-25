import { Box, Flex, Grid, Heading, Text, Button, Input, Textarea, useColorMode, IconButton, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const gallerySeries = [
    {
      id: 1,
      title: "Landscapes",
      images: [
        "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzA4ODc2MzcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/landscape-photo-2", // Placeholder URL
        "https://images.unsplash.com/landscape-photo-3", // Placeholder URL
      ],
    },
    {
      id: 2,
      title: "Portraits",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MDg4NzYzNzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/portraits-photo-2", // Placeholder URL
        "https://images.unsplash.com/portraits-photo-3", // Placeholder URL
      ],
    },
    {
      id: 3,
      title: "City Life",
      images: [
        "https://images.unsplash.com/photo-1518242007602-8d2524b53ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlmZXxlbnwwfHx8fDE3MDg4NzYzNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/city-life-photo-2", // Placeholder URL
        "https://images.unsplash.com/city-life-photo-3", // Placeholder URL
      ],
    },
    // ... add more series as needed
  ];

  return (
    <Box>
      <Flex justifyContent="space-between" p={4}>
        <Heading as="h1">John Doe Photography</Heading>
        <IconButton aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Flex>
      <Box as="section" p={4}>
        <Heading as="h2" mb={4}>
          Gallery
        </Heading>
        {gallerySeries.map((series) => (
          <Box key={series.id} mb={6}>
            <Heading as="h3" size="lg" mb={3}>
              {series.title}
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {series.images.map((image, index) => (
                <Image key={index} src={image} alt={`${series.title} ${index + 1}`} borderRadius="md" />
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
      <Box as="section" p={4}>
        <Heading as="h2" mb={4}>
          Contact
        </Heading>
        <Flex flexDirection="column" maxWidth="md" mx="auto">
          <Input placeholder="Your Name" mb={3} />
          <Input placeholder="Email Address" mb={3} type="email" />
          <Textarea placeholder="Your Message" mb={3} />
          <Button leftIcon={<FaEnvelope />} colorScheme="blue">
            Send Message
          </Button>
        </Flex>
      </Box>
      <Flex as="footer" justifyContent="center" p={4}>
        <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} mx={1} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} mx={1} />
        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebookF />} mx={1} />
      </Flex>
    </Box>
  );
};

export default Index;
