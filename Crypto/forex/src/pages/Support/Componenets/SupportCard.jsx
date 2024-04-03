import { Icon, Stack, Text, Flex, Card, HStack, Textarea, Checkbox, Box, Button } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import React from "react";
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
const SupportCard = ({
    leftComponent,icon,title,text
}) => {
    return (
        <Flex gap="6" flexDir={{
            base: "column",
            xl: "row",
        }}>
            <Stack maxW="24rem">
                <Icon as={icon} boxShadow={6} color="purple" />
                <Text textStyle="h1" fontWeight="medium">{title}</Text>
                <Text fontSize="sm" color="black.60">{text}</Text>
            </Stack>
          <Box maxW="550px" w="full">
            {leftComponent}
          </Box>

            
        </Flex>

    )
}
export default SupportCard;