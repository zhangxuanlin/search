import Loadable from 'react-loadable';
import Loading from '../App/Loading';

export const Search = Loadable({
    loader: () => import('../App/Search.js'),
    loading: Loading,
});

export const List = Loadable({
    loader: () => import('../App/List.js'),
    loading: Loading,
});
