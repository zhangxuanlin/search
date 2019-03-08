import React from 'react';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';
import { Link } from 'react-router-dom';
import HeaderImg from './HeaderImg';
import Search from './Search/';
import SearchList from '../../components/SearchList';
import styles from './list.less';
import './index.less';

const data = {
    total: 13,
    list: [{
        key: 0,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8.8,
        SalesVolume: 16950,
        href: 'http://ai.taobao.com/search/index.htm?pid=mm_111618164_19972532_68722634&unid=&source_id=search&key=充电线&prepvid=200_11.15.202.13_362_1541306498098&sort=biz30day&spm=a231o.7712113%2Fk.1003.d2',
    }, {
        key: 1,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2456967342/O1CN01oc5ofS246gPmboENu_!!0-item_pic.jpg',
        describe: '安卓数据线通用闪充usb手机高速快充原装正品充电器魅族oppor11r9s华为三星小米2vivox7x9x20加长3米短充电宝',
        CouponAfter: 5.9,
        OriginalPrice: 8.9,
        SalesVolume: 140198,
    }, {
        key: 2,
        img: 'https://img.alicdn.com/bao/uploaded/i1/1910949471/O1CN01Vtvsts2Jpldjqk3QQ_!!0-item_pic.jpg',
        describe: 'Type-c数据线5A超级快充适用华为mate10原装正品9nova2s3e荣耀magic2v10v20Play充电线器P9P10P20pro手机note',
        CouponAfter: 10.3,
        OriginalPrice: 13.5,
        SalesVolume: 79525,
    }, {
        key: 3,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 7.8,
        OriginalPrice: 8.8,
        SalesVolume: 68250,
    }, {
        key: 4,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8,
        SalesVolume: 65782,
    }, {
        key: 5,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 10.3,
        OriginalPrice: 15.3,
        SalesVolume: 62035,
    }, {
        key: 6,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8,
        SalesVolume: 58742,
    }, {
        key: 7,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 25,
        OriginalPrice: 28,
        SalesVolume: 55360,
    }, {
        key: 8,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 16.8,
        OriginalPrice: 18,
        SalesVolume: 49531,
    }, {
        key: 9,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8,
        SalesVolume: 16950,
    }, {
        key: 10,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8,
        SalesVolume: 16950,
    }, {
        key: 11,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8,
        SalesVolume: 16950,
    }, {
        key: 12,
        img: 'https://img.alicdn.com/bao/uploaded/i4/2451941673/TB2RSMpv_lYBeNjSszcXXbwhFXa_!!2451941673-0-item_pic.jpg',
        describe: 'type-c数据线适用华为p9p10p20pro荣耀v8v9v10乐视1s2小米5x三星s8手机充电器4c原装6mix2s5s正品快充tpc加长',
        CouponAfter: 6.8,
        OriginalPrice: 8,
        SalesVolume: 16950,
    }],
};
const datalist = [{
    key: 0,
    name: '手机壳',
}, {
    key: 1,
    name: '凉拖',
}, {
    key: 2,
    name: '牙刷',
}, {
    key: 3,
    name: '吹风机',
}, {
    key: 4,
    name: '保温杯',
}, {
    key: 5,
    name: '抽纸',
}, {
    key: 6,
    name: '棉拖',
}, {
    key: 7,
    name: '收纳箱',
}, {
    key: 8,
    name: '牙刷',
}];
const tamll = require('../../assets/img/tmall.png');
const hb = require('../../assets/img/hb.jpg');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1, // 初始页面
            pageSize: 10, // 初始列表数量
        };
    }

    /*
    * 翻页
    */
    onChange = (page) => {
        this.setState({
            current: page,
        });
    }

    /*
    *更改列表pageSize
    */
    onShowSizeChange = (current, pageSize) => {
        this.setState({
            pageSize,
        });
    }

    /*
    * 自定义上下页字样
    */
    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a className={styles.PageTurning}>上一页</a>;
        } if (type === 'next') {
            return <a className={styles.PageTurning}>下一页</a>;
        }
        return originalElement;
    }

    render() {
        const { current, pageSize } = this.state;
        console.log(current, pageSize);
        return (
            <div className={styles.CommodityList}>
                <div className={styles.fiexedHeader}>
                    <div>
                        <div className={styles.flexbox}>
                            <Link to="/" style={{ flex: '0 0 150px' }}>
                                <HeaderImg classname={styles.header} />
                            </Link>
                            <Search classname={styles.search} />
                        </div>
                        <div className={styles.filters}>
                            <span className={styles.item}>
                                {'销量前'}
                                <span>{data.total}</span>
                                {'条结果'}
                            </span>
                        </div>
                    </div>
                </div>
                <ul className={styles.ListUl}>
                    {
                        data.list.map(v => (
                            <li key={String(v.key)} className={styles.ListLi}>
                                <img src={v.img} alt={v.describe} />
                                <div className={styles.subtitle} title={v.describe}>
                                    <img src={tamll} alt="tmall" />
                                    {v.describe}
                                </div>
                                <div className={styles.price}>
                                    <span className={styles.CouponAfter}>
                                        {'券后￥'}
                                        {v.CouponAfter.toFixed(1)}
                                    </span>
                                    <span className={styles.OriginalPrice}>
                                        {'原价￥'}
                                        {v.OriginalPrice}
                                    </span>
                                </div>
                                <div className={styles.Discount}>
                                    <span className={styles.Coupon}>
                                        <span>券</span>
                                        <span>{`${parseInt(v.OriginalPrice - v.CouponAfter, 10)}元`}</span>
                                    </span>
                                    <span className={styles.OriginalPrice}>
                                        {'月销:'}
                                        {v.SalesVolume}
                                    </span>
                                </div>
                                <a href={v.href} className={styles.linkto}>
                                    <img src={hb} alt="hd" />
                                    {'淘宝券全网比价搜>>'}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Pagination
                        total={data.total}
                        showSizeChanger
                        showQuickJumper
                        onChange={this.onChange}
                        onShowSizeChange={this.onShowSizeChange}
                        itemRender={this.itemRender}
                        showTotal={total => `总共 ${total} 条`}
                    />
                </div>
                <div>
                    <SearchList title="热门推荐" data={datalist} />
                </div>
            </div>
        );
    }
}

export default List;
