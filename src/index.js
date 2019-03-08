import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import { createBrowserHistory as createHistory } from 'history';
import { Count, ToodList, About } from './models/example';
import '../mock/home/mock';
import './index.css';
// 1. Initialize
const app = dva({
    history: createHistory(), // browserHistory(h5, 不带#)替换hashHistory(老版本)
    onError: () => {
        message.error('error');
    },
});
// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(Count);
app.model(ToodList);
app.model(About);
// 4. Router
app.router(require('./routes/index').default);

// 5. Start
app.start('#root');
