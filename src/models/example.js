import services from '../services/example';
// count
export const Count = {
    namespace: 'home', // 状态名称
    state: { // 状态初始值
        count: 0,
        i: 1,
    },
    reducers: { // 同步操作
        add(state) { return { ...state, count: state.count + 1 }; }, // 累计 + 1
        minus(state) { return { ...state, count: state.count - 1 }; }, // 累计 - 1
    },
    effects: {
    },
};

export const About = {
    namespace: 'about',
    state: {
        i: 0,
        personList: {},
        loading: true,
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                personList: action.personList,
                loading: false,
            };
        },
    },
    effects: {
        * getData({ payload }, { put, call }) {
            const { data } = yield call(services.getTableList);
            console.log(payload, 7);
            yield put({
                type: 'save',
                personList: data,
            });
        },
        //      * delete({ payload: id }) {
        //          console.log(id);
        //          //          yield call(remove, id); // remove为'../services/example'里的删除接口
        //          //          yield put({
        //          //              type: 'reload',
        //          //          });
        //      },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/about') {
                    dispatch({ type: 'getData' });
                }
            });
        },
    },
};

export const ToodList = {
    namespace: 'toodlist',
    state: [{
        key: 1,
        name: 'aaaa',
    }, {
        key: 2,
        name: 'bbbb',
    }, {
        key: 3,
        name: 'cccc',
    }],
    reducers: {
        /* 新增 */
        addRow(state, action) {
            return [...state, {
                key: action.payload.id + 1,
                name: action.payload.name,
            }];
        },
        /* 修改 */
        editRow(state, action) {
            return state.map(v => (v.key === action.payload.id ? {
                ...v,
                name: action.payload.name,
            } : v));
        },
        /* 删除 */
        deleteRow(state, action) {
            return state.filter(v => v.key !== action.id);
        },
    },
    effects: {
        * deleteRows({ payload }, { put, call }) {
            yield call(() => {
                console.log('异步成功');
            });
            yield put({ type: 'deleteRow', id: payload.id });
        },
    },
//  subscriptions: {
//      keyboardWatcher({ dispatch }) {
//          key('⌘+up, ctrl+up', () => { dispatch({ type:'addRow' }) });
//      },
//  },
};
