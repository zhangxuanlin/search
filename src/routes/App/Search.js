import React from 'react';
import { Link } from 'react-router-dom';
import styles from './search.less';

const searchList = [{
    key: 0,
    name: '充电器',
}, {
    key: 1,
    name: '钢化膜',
}, {
    key: 2,
    name: '耳机',
}, {
    key: 3,
    name: '热水壶',
}, {
    key: 4,
    name: '袜子',
}, {
    key: 5,
    name: '抽纸',
}, {
    key: 6,
    name: '棉拖',
}, {
    key: 7,
    name: '鼠标',
}, {
    key: 8,
    name: '男鞋',
}, {
    key: 9,
    name: '被子四件套',
}, {
    key: 10,
    name: '手机',
}, {
    key: 11,
    name: '电脑主机',
}, {
    key: 12,
    name: '键盘',
}, {
    key: 13,
    name: '雨伞',
}, {
    key: 14,
    name: '充电宝',
}, {
    key: 15,
    name: '电脑',
}];

class Search extends React.PureComponent {
    constructor(props) {
        super(props);
        this.node = null;
    }

    /*
    * 搜索
    */
    Search = () => {
        console.log(this.node.value);
    }

    render() {
        return (
            <div className={styles.Search}>
                <header className={styles.header} />
                <div className={styles.SearchInput}>
                    <input type="text" ref={(node) => { this.node = (node); }} />
                    <button onClick={this.Search}>搜索</button>
                    <div className={styles.SearchList}>
                        {'热门搜索：'}
                        {
                            searchList.map(v => (
                                <Link to={`List?q=${v.name}`} key={String(v.key)} className={styles.link}>{v.name}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
