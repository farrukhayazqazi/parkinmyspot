import React from 'react'

import Typography from '@mui/material/Typography';

import {FooterWrapper} from './styles';
import {Wrapper} from './styles';

const Footer = (props) => {
    const {children} = props;
    return (<FooterWrapper>
        <Wrapper>
            <Typography variant='subtitle1'>
                parkinmyspot.
            </Typography>
        </Wrapper>
        </FooterWrapper>)
}

export default Footer;