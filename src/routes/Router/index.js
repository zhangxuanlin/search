import { Search, List } from './async';

const routers = [{
    path: '/',
    exact: true,
    component: Search,
}, {
    path: '/list',
    exact: true,
    component: List,
}];

export default routers;
