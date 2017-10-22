import React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import AvatarCard from './AvatarCard';

function Swipe(props) {
  return (
    <Swiper
      loop={false}
      removeClippedSubviews={false}
      activeDotColor="#000"
      width="100%"
      height={295}
    >
      {props.images.map((i, index) => <AvatarCard key={i + index} img={i} />)}
    </Swiper>
  );
}

export default Swipe;
