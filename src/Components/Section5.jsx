// Section5.jsx

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../styles/Section5.module.css";

import hands from '../Assets/Section5/handHeart.svg';
import accountant from '../Assets/Section5/accountant.svg';
import invertedComma from '../Assets/Section5/invertedComma.svg';

const Section5 = () => {
    return (
        <Box className={styles.section}> {/* Use the className from the CSS module */}
            <Flex className={styles.containerHeading}>
                <Image src={hands} />
                <Heading as={'h1'}>What Our Customer Says</Heading>
            </Flex>
            <Flex className={styles.mainFlex} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
                <Image src={accountant} />
                <Image src={invertedComma} />
                <Box className={styles.innerBox}>
                    <Text>SUNIT GUPTA</Text>
                    <Text>Chartered Accountant</Text>
                    <Text color={'gray.600'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam voluptates totam placeat
                        alias quam vero tempora esse atque optio amet est nostrum tempore, cumque dolores voluptatum! Hic, voluptas?
                        Officia. Ab, magnam esse totam porro sunt saepe quidem velit facilis blanditiis fugit sed non a? Magnam quae
                        eos ducimus repellat mollitia nostrum, illo modi ipsam, earum quod laudantium reprehenderit aliquam. Odio incidunt
                        culpa tempora odit fuga quibusdam quia reiciendis veniam nisi quae recusandae atque officia id vel amet quod
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Section5;
