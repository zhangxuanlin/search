import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import styles from './style.less';

const { Header, Content, Sider } = Layout;

class Layouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            SelectedKeys: window.location.pathname,
        };
    }

    /*
     * 点击menu
     */
    onSelectKey = (select) => {
        this.setState({
            SelectedKeys: select.key,
        });
    }

    /*
     * 显示隐藏触发器
     */
    toggle = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    }

    render() {
        const { collapsed, SelectedKeys } = this.state;
        const { children } = this.props;
        return (
            <Layout className={styles.layout}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsed={collapsed}
                >
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[SelectedKeys]} onClick={this.onSelectKey}>
                        <Menu.Item key="/home">
                            <Icon type="user" />
                            <span><Link to="/home">首页</Link></span>
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <Icon type="video-camera" />
                            <span><Link to="/about">关于页</Link></span>
                        </Menu.Item>
                        <Menu.Item key="/map">
                            <Icon type="upload" />
                            <span><Link to="/map">地图</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className={styles.Content}>
                        <div className={styles.Main}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

Layouts.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layouts;
