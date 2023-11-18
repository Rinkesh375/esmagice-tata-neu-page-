// Section1.js

import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import styles from "../styles/Section1.module.css"; // Import the CSS module
import family from '../Assets/Section1/family.svg';
import frame1 from '../Assets/Section1/frame1.svg';
import frame2 from '../Assets/Section1/frame2.svg';
import frame3 from '../Assets/Section1/frame3.svg';
import frame4 from '../Assets/Section1/frame4.svg';

const Section1 = () => {
  return (
    <section className={styles.section}>
      <Flex className={styles.container} p={{ base: '10px', sm: '10px', md: '10px', lg: '41px 80px 0 80px', xl: '41px 80px 0 80px', '2xl': '41px 80px 0 80px' }} flexDir={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }}>
        <Box className={styles.box1} w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '60%', '2xl': '60%' }}>
          <Heading className={styles.heading1} fontSize={{ base: '30px', sm: '30px', md: '50px', lg: '50px', xl: '50px', '2xl': '50px' }}>Turn Dreams Into Reality With <span>Personal Loans</span></Heading>
          <Flex className={`${styles.flex1} ${styles.flex2}`} gap={{ base: '20px', sm: '20px', md: '108px', lg: '100px', xl: '100px', '2xl': '100px' }}>
            <Flex className={styles.child}>
              <Image src={frame1} />
              <Box>
                <Text fontWeight={'bold'}>Avail Zero</Text>
                <Text>Processing Fee</Text>
              </Box>
            </Flex>
            <Flex className={styles.child}>
              <Image src={frame2} />
              <Box>
                <Text fontWeight={'bold'}>Quick</Text>
                <Text>Personal Loan</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex className={styles.flex1} gap={{ base: '20px', sm: '20px', md: '100px', lg: '100px', xl: '100px', '2xl': '100px' }}>
            <Flex className={styles.child}>
              <Image src={frame3} />
              <Box>
                <Text fontWeight={'bold'}>Lowest</Text>
                <Text>Interest Rates</Text>
              </Box>
            </Flex>
            <Flex className={styles.child} ml={'8px'}>
              <Image src={frame4} />
              <Box>
                <Text fontWeight={'bold'}>Minimal</Text>
                <Text>Documentation</Text>
              </Box>
            </Flex>
          </Flex>
          <Button variant={'none'} className={styles.btn}>APPLY NOW</Button>
        </Box>
        <Box className={styles.box2} w={{ base: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%', '2xl': '40%' }}>
          <Image w={'100%'} src={family} />
        </Box>
      </Flex>
    </section>
  );
}

export default Section1;
