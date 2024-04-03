import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../Components/DashboardLayout";
import ContactCard from "./Componenets/ContactCard";
import SupportCard from "./Componenets/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const SupportPage = ()=>{
    return(
        <DashboardLayout>
            <Stack spacing="80px">
            <SupportCard
             icon={IoMdMail} 
             leftComponent={<ContactCard />}
              title="Contact Us" 
              text=" Have a question or just want to know more? Feel free to reach out to us." 
              
              />
              <SupportCard
             icon={AiTwotoneMessage} 
             leftComponent={<InfoCard 
             imgurl="/bg2.png"
             inverted={true}
             tagText="Contact"
             text="Chat with us now"
             />}
              title="Live Chat" 
              text=" Have a question or just want to know more? Feel free to reach out to us." 
              
              />
            </Stack>
        </DashboardLayout>

    )
}
export default SupportPage;