import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const PrimaryLayout = ({ children }) => <div>{ children }</div>;

PrimaryLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrimaryLayout;
