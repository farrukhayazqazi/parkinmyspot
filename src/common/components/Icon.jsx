import React from 'react'

import * as Icon from 'react-feather';

import {pimgdark} from '../../constants/colors';

import PropTypes from 'prop-types';

const CustomIcon = (props) => {
    const {
      icon,
      color
    } = props;
    const RenderIcon = Icon[icon];

  return (<RenderIcon color={color || pimgdark}/>)
};

CustomIcon.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
};

export default CustomIcon;