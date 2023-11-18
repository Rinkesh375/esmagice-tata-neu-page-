// Navbar.js

import React from 'react';
import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import styles from "../styles/Navbar.module.css" // Import the CSS module

import logo from '../Assets/Logo.svg';
import search from '../Assets/search.svg';
import location from '../Assets/location.svg';
import cart from '../Assets/cart.svg';
import bell from '../Assets/bell.svg';
import userProfile from '../Assets/userProfile.svg';

const Navbar = () => {
  const {isOpen , onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className={styles.navbar}> {/* Use the CSS module class */}
      <Flex boxShadow={'base'} p={'24px'} alignItems={'center'} justifyContent={'space-between'}>
        <Flex className={styles.container1}>
          <Box fontSize={'20px'} display={{ base: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none', '2xl': 'none' }}>
            <HamburgerIcon ref={btnRef} onClick={() => { onOpen(); }} />
          </Box>
          <Image src={logo} />
          <Flex gap='24px' className={styles.links}>
            <Link to='#'>Offers</Link>
            <Link to='#'>Stories</Link>
            <Link to='#'>Tata Pay</Link>
            <Link to='#'>NeuPass</Link>
          </Flex>
        </Flex>
        <Flex className={styles.container2}>
          <Flex className={styles.innerflex}>
            <Input _focusVisible={'none'} placeholder='Search Tata Neu' _placeholder={{ color: 'black' }} />
            <Image src={search} />
          </Flex>
          <Flex alignItems={'center'} gap={'3px'}>
            <Text className={styles.location} fontWeight={'500'}>122018</Text>
            <Image src={location} />
          </Flex>
          <Flex>
            <Image src={cart} />
          </Flex>
          <Flex position={'relative'}>
            <Box className={styles.notificationDot}></Box>
            <Image src={bell} />
          </Flex>
          <Flex>
            <Image src={userProfile} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
