import React from 'react';
import HeaderImg from './HeaderImg';
import Search from './Search/';
import styles from './search.less';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.node = null;
    }

    componentDidMount() {
        document.title = '淘宝优惠券';
    }

    render() {
        return (
            <div className={styles.Search}>
                <HeaderImg />
                <Search />
            </div>
        );
    }
}

export default Home;
