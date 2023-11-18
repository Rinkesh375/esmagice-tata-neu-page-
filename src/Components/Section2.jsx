// Section2.js

import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import styles from "../styles/Section2.module.css"; // Import the CSS module
import star from '../Assets/Section2/Star.svg';
import star2 from '../Assets/Section2/star2.svg';
import man from '../Assets/Section2/man.svg';

const Section2 = () => {
  return (
    <section className={styles.section}>
      <Box className={styles.boxContainer} p={{ base: '10px', sm: '10px', md: '10px', lg: '6% 7% 0 4%', xl: '6% 7% 0 4%', '2xl': '6% 7% 0 4%' }}>
        <Flex alignItems={'center'} ml={'20px'}>
          <Image w={'4%'} src={star} />
          <Heading fontSize={'25px'}>Personal Loan Highlights</Heading>
        </Flex>
        <Flex gap={'10px'} mt={'40px'} w={'100%'} flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }} justifyContent={'space-between'}>
          <Image h={'400px'} w={{ base: '100%', sm: '100%', md: '100%', lg: '38%', xl: '38%', '2xl': '38%' }} src={man} />
          <Box className={styles.box} w={{ base: '100%', sm: '100%', md: '100%', lg: '55%', xl: '55%', '2xl': '55%' }} p={'20px 30px'} bg={'#FCF8FF'} borderRadius={'10px'}>
            <Box>
              <Flex alignItems={'center'} gap={'7px'}>
                <Image src={star2} />
                <Text fontWeight={'500'}>Interest Rate</Text>
              </Flex>
              <Text ml={'5.4%'} color={'gray.500'}>Usually <span style={{ color: 'var(--1, #8800EC)', fontWeight: 'bold' }}>10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
            </Box>
            <Box>
              <Flex alignItems={'center'} gap={'7px'}>
                <Image src={star2} />
                <Text fontWeight={'500'}>Loan Amount</Text>
              </Flex>
              <Text ml={'5.4%'} color={'gray.500'}>Can go up to <span style={{ color: 'var(--1, #8800EC)', fontWeight: 'bold' }}>Rs 40 lakh:</span> some lenders may offer a higher loan amount</Text>
            </Box>
            <Box>
              <Flex alignItems={'center'} gap={'7px'}>
                <Image src={star2} />
                <Text fontWeight={'500'}>Processing Fees</Text>
              </Flex>
              <Text ml={'5.4%'} color={'gray.500'}><span style={{ color: 'var(--1, #8800EC)', fontWeight: 'bold' }}>0.5% to 4%</span> of the loan amount (may vary across lenders)</Text>
            </Box>
            <Box>
              <Flex alignItems={'center'} gap={'7px'}>
                <Image src={star2} />
                <Text fontWeight={'500'}>Tenure</Text>
              </Flex>
              <Text ml={'5.4%'} color={'gray.500'}>Up to <span style={{ color: 'var(--1, #8800EC)', fontWeight: 'bold' }}>5 years</span> (some lenders offer a repayment period till 8 years)</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </section>
  );
}

export default Section2;
