// Section3.js

import { Box, Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import styles from "../styles/Section3.module.css";  // Import the CSS module
import hdfc from '../Assets/Section3/hdfc.svg';
import icici from '../Assets/Section3/icici.svg';
import baroda from '../Assets/Section3/baroda.svg';

const Section3 = () => {
  return (
    <section className={styles.container}>
      <Flex className={styles.wrapper} gap={'10px'} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
        <Text className={styles.title} w={{ base: '100%', sm: '100%', md: '100%', lg: '20%', xl: '20%', '2xl': '20%' }}>Our Partners</Text>
        <Grid w={'80%'} className={styles.grid} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)', '2xl': 'repeat(4, 1fr)' }}>
          <VStack className={styles.gridItem}>
            <Image src={hdfc} />
            <Text fontSize={'17px'}>HDFC Bank</Text>
          </VStack>
          <VStack className={styles.gridItem}>
            <Image src={icici} />
            <Text fontSize={'17px'}>ICICI Bank</Text>
          </VStack>
          <VStack className={styles.gridItem}>
            <Image src={icici} />
            <Text fontSize={'17px'}>ICICI Bank</Text>
          </VStack>
          <VStack className={styles.gridItem}>
            <Image src={baroda} />
            <Text fontSize={'17px'}>Bank of Baroda</Text>
          </VStack>
        </Grid>
      </Flex>
    </section>
  );
}

export default Section3;
