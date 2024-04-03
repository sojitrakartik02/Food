import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";


const DashboardLayout = ({ title , children }) => {
    const {isOpen,onClose,onOpen} =useDisclosure(); 

    return (
        <Flex>
            <Box display={{
            base:"none",
            lg:"block",
        }}><Sidenav  /> </Box>
            
            <SideDrawer isopen={isOpen} onClose={onClose}/>
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen} />
                <Container overflowX="hidden" overflowY="auto" 
                h="cal(100vh - 88px)" mt="6" maxW="70rem" >{children}</Container>
            </Box>
        </Flex>
    );
}
export default DashboardLayout;