import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";


const Dashboard = ({ }) => {
    return (
        <DashboardLayout title="Dashboard">
            <Grid
                gridTemplateColumns={{
                    base: "repeat(1,1fr)",
                    xl: "repeat(2,1fr)",
                    
                }}
                gap={6}
            >
                <GridItem
                    colSpan={{
                        base:1,
                        xl:2,
                    }}
                >
                    <PortfolioSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <PriceSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions />
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard
                    text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
                    imgurl="bg1.png" 
                    tagText="loan"
                    inverted={false}
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard
                    inverted={true}
                    text="Learn more about our real estate, mortgage, and  corporate account services"
                    imgurl="bg2.png"
                    tagText="Contact" />
                </GridItem>
            </Grid>

        </DashboardLayout>
    )
}
export default Dashboard;