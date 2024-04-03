import { CustomCard } from "../../../Chakra/CustomCard";
import { Tag,Text } from "@chakra-ui/react";
const InfoCard = ({imgurl,text,tagText,inverted}) =>{
    return(
        <CustomCard
        
            bg={inverted? 'p.purple' : 'p.white'}
            bgImage={imgurl} bgSize="cover" bgRepeat="no-repeat"
        >

            <Tag 
            color={inverted ? 'p.purple' : 'white'}
            bg={inverted ? 'white' : 'p.purple'}

            borderRadius="full">
                {tagText}
            </Tag>
            <Text
            color={inverted? "white" :"black.80"}
            textStyle="h5" mt="4" fontWeight="medium">{text}</Text>
        </CustomCard>
    )
}
export default InfoCard;