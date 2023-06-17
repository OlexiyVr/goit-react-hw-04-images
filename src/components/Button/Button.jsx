import React from 'react';
import PropTypes from 'prop-types';

import { BtnContainer, Btn } from './Button.styled';

const Button = ({ onClick }) => (
  <BtnContainer>
    <Btn type="button" onClick={onClick}>
      LOAD MORE
    </Btn>
  </BtnContainer>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;


