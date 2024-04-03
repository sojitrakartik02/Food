import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import Sidenav from "./Sidenav";

const SideDrawer = ({ isopen , onClose }) => {
    
  
    return (
      <>
        
        <Drawer
          isOpen={isopen}
          placement='left'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            
            <DrawerBody>
                <Sidenav />  
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default SideDrawer;