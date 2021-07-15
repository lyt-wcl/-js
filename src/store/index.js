// 本文件处理数据逻辑

import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";
import initialState from './data';
import reducer from './reducer';

// 创建数据中心的这样一个上下文，一般称为store
const store = createContext();

// 包装成数据组件
function StateProvider({children}) {
    // 绑定数据以及数据处理方法
    const [state, dispatch] = useReducer(reducer, initialState);

    // 初始化时，读取本地数据
    useEffect(() => {
        fetchCsvData('./2010年各州数据.csv')
        .then(res => {
            dispatch({
                type: 'init2010',
                payload: res
            })
        })
    }, [])
    useEffect(() => {
        fetchCsvData('./2011年各州数据.csv')
        .then(res => {
            dispatch({
                type: 'init2011',
                payload: res
            })
        })
    }, [])
    useEffect(() => {
        fetchCsvData('./2012年各州数据.csv')
        .then(res => {
            dispatch({
                type: 'init2012',
                payload: res
            })
        })
    }, [])
    useEffect(() => {
        fetchCsvData('./2013年各州数据.csv')
        .then(res => {
            dispatch({
                type: 'init2013',
                payload: res
            })
        })
    }, [])
    useEffect(() => {
        fetchCsvData('./2014年各州数据.csv')
        .then(res => {
            dispatch({
                type: 'init2014',
                payload: res
            })
        })
    }, [])

    useEffect(() => {
        fetchCsvData('./USA.csv')
          .then(res => {
              dispatch({
                  type: 'init',
                  payload: res
              })
          })
      
    }, [])
    

    // 为子元素包裹上数据的上下文环境，方便所有子元素读取
    return <store.Provider value={{state, dispatch}}>
        {children}
    </store.Provider>
}

export {store, StateProvider}
