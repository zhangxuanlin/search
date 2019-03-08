import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

const HeaderImg = ({ classname }) => <header className={`${styles.header} ${classname}`} />;

HeaderImg.defaultProps = {
    classname: '',
};

HeaderImg.propTypes = {
    classname: PropTypes.string,
};

export default HeaderImg;
