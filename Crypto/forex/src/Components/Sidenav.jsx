import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs"
import { Link, useLocation } from "react-router-dom";
import { BiSupport } from 'react-icons/bi';
const Sidenav = () => {


    const location=useLocation();
    const isActiveLink=(link)=>{
        return location.pathname===link;
    };
    const navLinks = [
        {
            icons: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icons: BsArrowDownUp,
            text: "Transaction",
            link: "/transaction",
        },
    ];



    return (
        <Stack boxShadow={{base:"none",lg:"lg"}} justifyContent="space-between"  w={{base:"full",lg:"16rem"}} h="100vh" bg="white"
        
        
        >
            <Box>
            <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="center">
                @DOSOMECODING</Heading>
            <Box mt="6" mx="3">
                {
                    navLinks.map((nav) => (
                        <Link to={nav.link}  key={nav.text}>
                        
                        <HStack
                            borderRadius="10px" mx="3" py="3" px="4"
                            _hover={{
                                bg: "#F3F3F7",
                                color: "#171717"
                            }}
                           color={isActiveLink(nav.link) ? "#171717":"#797E82"}
                           
                            bg={isActiveLink(nav.link) ? "#F3F3F7":"tansparent"}
                            
                        >
                            <Icon as={nav.icons} />
                            <Text fontSize="14px" fontWeight="midium">{nav.text}</Text>
                        </HStack>
                        </Link>
                    ))
                }
            </Box>
            </Box>
            <Box mt="6" mx="3" mb="6">
                <Link to="/support">
                <HStack
                    borderRadius="10px" mx="3" py="3" px="4"
                    _hover={{
                        bg: "#F3F3F7",
                        color: "#171717"
                    }}
                    color={isActiveLink("/support") ? "#171717":"#797E82"}
                           
                    bg={isActiveLink("/support") ? "#F3F3F7":"transparent"}
                    
                >
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="midium">Support</Text>
                </HStack>
                </Link>    
            </Box>
        </Stack>
    )
}
export default Sidenav;