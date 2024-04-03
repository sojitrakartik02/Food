import { Button, Card, Flex, Icon, Tag, Tab, TabList, TabPanel, TabPanels, Tabs, InputGroup, InputLeftElement, Input, HStack } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { AiOutlineDownload } from 'react-icons/ai';
import TransactionTable from "./Components/TransactionTable";
import { BiSearch } from "react-icons/bi";

const TarnsactionPage = () => {

    const tabs = [{
        name: "All",
        count: "349"
    },
    {
        name: "Deposite",
        count: "114"
    },
    {
        name: "Widthdraw",
        count: "55"
    }, {
        name: "Trade",
        count: "50"
    },
    ]


    return (
        <>
            <DashboardLayout title="Transaction"    >
                <Flex justify="end" mt="6" mb="3">
                    <Button leftIcon={<Icon as={AiOutlineDownload}></Icon>}>Export CSV</Button>
                </Flex>
                <Card borderRadius="1rem">
                    <Tabs>
                        <TabList pt="4" justifyContent={"space-between"}>
                            <HStack>
                                {
                                    tabs.map((tab) => (
                                        <Tab key={tab.name} display="flex" gap="2" pb="4">{tab.name}
                                            <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
                                        </Tab>
                                    ))}
                            </HStack>

                            <InputGroup maxW="200px" pr="6" >
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={BiSearch} />
                                </InputLeftElement>
                                <Input type='text' placeholder='Search..' />
                            </InputGroup>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <TransactionTable />
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Card>
            </DashboardLayout>
        </>
    )
}
export default TarnsactionPage;