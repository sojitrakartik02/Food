import { Box, Button, Card, Checkbox, FormControl,Textarea, FormLabel, HStack, Input, Stack,Text } from "@chakra-ui/react";
import React from "react";
const ContactCard = () =>{
    return(
        <Card p="6" borderRadius="1rem" flexGrow={1}>

                <Text fontWeight="medium" fontSize="sm" mb="4">You will receive response within 24 hours of time of submit.</Text>
                <HStack mb="4" flexDir={{
                    base: "column",
                    md: "row",
                }}>
                    <FormControl >
                        <FormLabel>Name</FormLabel>
                        <Input placeholder="Enter Your Name..." />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Surname</FormLabel>
                        <Input placeholder="Enter Your Surname..." />
                    </FormControl>

                </HStack>
                <FormControl mb="4">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter Your Email..." />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel>Messege</FormLabel>
                    <Textarea placeholder="Enter Your Message..." />
                </FormControl>
                <Checkbox mb="4" defaultChecked >
                    <Text fontSize="xs">
                        I agree with <Box as="span" color="p.purple">{" "} Terms & Conditions. </Box>
                    </Text>
                </Checkbox>
                <Stack mb="4">
                    <Button fontSize="sm" mb="2">Send a Message</Button>
                    <Button fontSize="sm" colorScheme="gray">Book a Meeting</Button>
                </Stack>

            </Card>

    )
}
export default ContactCard;