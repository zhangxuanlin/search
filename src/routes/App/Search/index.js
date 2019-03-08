import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchList from '../../../components/SearchList';
import styles from './index.less';

const data = [{
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

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.node = null;
    }

    /*
    * 搜索
    * 请求搜索接口
    * 跳转至商品列表页
    */
    Search = () => {
        const { history } = this.props;
        document.title = `${this.node.value}-淘宝优惠券`;
        history.push(`/List?q=${this.node.value}`);
    }

    render() {
        const { classname } = this.props;
        return (
            <div className={`${styles.SearchInput} ${classname}`}>
                <input type="text" ref={(node) => { this.node = (node); }} />
                <button onClick={this.Search}>搜索</button>
                <SearchList title="热门搜索" data={data} />
            </div>
        );
    }
}

Search.defaultProps = {
    classname: '',
};

Search.propTypes = {
    classname: PropTypes.string,
    history: PropTypes.object.isRequired,
};

export default withRouter(Search);
