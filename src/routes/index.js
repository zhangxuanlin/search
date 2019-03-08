import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import PrimaryLayout from './App';
import routers from './Router';

const App = () => (
    <BrowserRouter>
        <LocaleProvider locale={zhCN}>
            <PrimaryLayout>
                <Switch>
                    {
                        routers.map((route, index) => (
                            <Route
                                exact={route.exact}
                                path={route.path}
                                key={String(index)}
                                component={route.component}
                            />
                        ))
                    }
                </Switch>
            </PrimaryLayout>
        </LocaleProvider>
    </BrowserRouter>
);


export default App;
