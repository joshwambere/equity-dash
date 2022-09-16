import React, {useEffect, useState} from 'react'
import {
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import {
    FiCalendar,
} from "react-icons/fi"
import MyChart from '../components/MyChart'
import PieChart from "../components/PieChart";
import {fetcher} from "../utils/fetcher";
import {pieOptions} from "../utils/pieOptions";

export default function Dashboard() {
    const [pieData, setPieData] = useState({})
    let pieOption;

    useEffect(async() => {
        const pie = await fetcher('http://localhost:4000/analytics/offers');
        pieOption=pieOptions("Offers")
        setPieData(pie)
    }, []);

    return (
        <Flex
            w={["100%", "100%", "85%", "85%", "85%"]}
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
        >
            <Heading
                fontWeight="normal"
                mb={4}
                letterSpacing="tight"
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Users</Tab>
                        <Tab>Offers</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text color="gray" fontSize="sm">System users</Text>
                            <MyChart />
                        </TabPanel>
                        <TabPanel  className="Pie">
                            <PieChart data={pieData} options={pieOption} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Heading>
        </Flex>
    )
}
