/*
    Shows red star on required form input
*/
import React from 'react';

const RequiredStar = ({ required }) => {
  return required ? <span style={{ color: 'red' }}>*</span> : null;
};

export default RequiredStar;