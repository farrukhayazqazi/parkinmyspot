import React from 'react';

import {Wrapper} from './styles';
import {HeroTypography} from './styles';
import {HeroImage} from './styles';

import hero from '../../assets/images/main.jpg';


const HeroSection = () => {
  return (<>
    <HeroTypography variant='h4'>
      Find a parking spot for your vehicle near you.
    </HeroTypography>
    <Wrapper>
      <HeroImage src={hero} alt="main"/>
    </Wrapper>
  </>)
}

export default HeroSection; 