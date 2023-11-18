// Section6.jsx

import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Text, Flex } from '@chakra-ui/react';
import bus from '../Assets/Section6/bus.svg';
import star2 from '../Assets/Section2/star2.svg';
import frame1 from '../Assets/Section6/frame1.svg';
import frame2 from '../Assets/Section6/frame2.svg';
import frame3 from '../Assets/Section6/frame3.svg';
import frame4 from '../Assets/Section6/frame4.svg';
import styles from "../styles/Section6.module.css"; // Import the CSS module

const Section6 = () => {
    const colors = [
        { text: 'Eligibility', url: frame1 },
        { text: 'How to apply', url: frame2 },
        { text: 'Documentation', url: frame3 },
        { text: 'Fees & Charges', url: frame4 },
    ];
    const [tabColors, setTabColors] = useState(Array(colors.length).fill(false));

    const tabChild1 = [
        { title: 'Citizenship Proof 001', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 002', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 003', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 004', description: 'Indian Citizen With Valid ID Proof' }
    ];

    const tabChild2 = [
        { title: 'Citizenship Proof 005', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 006', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 007', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 008', description: 'Indian Citizen With Valid ID Proof' }
    ];

    const tabChild3 = [
        { title: 'Citizenship Proof 009', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 010', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 011', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 012', description: 'Indian Citizen With Valid ID Proof' }
    ];

    const tabChild4 = [
        { title: 'Citizenship Proof 013', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 014', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 015', description: 'Indian Citizen With Valid ID Proof' },
        { title: 'Citizenship Proof 016', description: 'Indian Citizen With Valid ID Proof' }
    ];

    const handleTabColors = (ind) => {
        let tColors = Array(colors.length).fill(false);
        tColors[ind] = !tColors[ind];
        setTabColors(tColors);
    };

    return (
        <div className={styles.section}>
            <Tabs variant='enclosed' className={styles.tabsContainer}>
                <TabList className={styles.tablist}>
                    {colors.map((el, i) => (
                        <Tab
                            key={i}
                            fontWeight={tabColors[i] ? 'bold' : 'normal'}
                            color={tabColors[i] ? '#8800EC' : i === 0 ? '#8800EC' : 'gray.600'}
                            onClick={() => handleTabColors(i)}
                        >
                            <Image w={'26%'} src={el.url} />
                            <Text>{el.text}</Text>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels className={styles.tablePanels}>
                    <TabPanel className={styles.tabpanel}>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild1.map((el, index) => (
                                <Box key={index} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>
                                        {el.description}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                    <TabPanel className={styles.tabpanel}>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild2.map((el, index) => (
                                <Box key={index} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>
                                        {el.description}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                    <TabPanel className={styles.tabpanel}>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild3.map((el, index) => (
                                <Box key={index} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>
                                        {el.description}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                    <TabPanel className={styles.tabpanel}>
                        <Box w={'50%'} textAlign={'start'}>
                            {tabChild4.map((el, index) => (
                                <Box key={index} mb={'40px'}>
                                    <Flex alignItems={'center'} gap={'7px'}>
                                        <Image src={star2} />
                                        <Text fontWeight={'500'}>{el.title}</Text>
                                    </Flex>
                                    <Text ml={'5.4%'} color={'gray.500'}>
                                        {el.description}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                        <Box w={'30%'}>
                            <Image src={bus} />
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default Section6;
