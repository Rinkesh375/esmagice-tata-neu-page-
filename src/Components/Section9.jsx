// Section9.js

import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../styles/Section9.module.css";
import friends from '../Assets/Footer/friends.svg';

const Section9 = () => {
  return (
    <section className={styles.section}>
      <Flex gap={'10px'} justifyContent={'space-between'} flexDir={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }} alignItems={'center'}>
        <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%', '2xl': '40%' }}>
          <Text mb={'20px'} fontSize={'35px'} fontWeight={'500'}>
            Refer & Earn Now
          </Text>
          <Text mb={'10px'}>Get a ₹500 Big Basket gift card</Text>
          <Button mb={'18px'} mt={'10px'} variant={'none'} className={styles.btn}>
            REFER AND EARN
          </Button>
          <Text textDecor={'underline'} fontSize={'11px'}>
            Terms and Conditions apply
          </Text>
        </Box>
        <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%', '2xl': '40%' }}>
          <Image src={friends} />
        </Box>
      </Flex>
    </section>
  );
};

export default Section9;
