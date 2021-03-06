import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Default({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
