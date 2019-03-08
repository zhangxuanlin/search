import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.less';

const SearchList = ({ title, data }) => (
    <div className={styles.SearchList}>
        {`${title}：`}
        {
            data.map(v => (
                <Link
                    to={`List?q=${v.name}`}
                    onClick={() => {
                        document.title = `${v.name}-淘宝优惠券`;
                    }}
                    key={String(v.key)}
                    className={styles.link}
                >
                    {v.name}
                </Link>
            ))
        }
    </div>
);
SearchList.defaultProps = {
    title: '',
    data: [],
};

SearchList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};

export default SearchList;
