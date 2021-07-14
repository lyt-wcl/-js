// 本文件是界面UI的根目录

import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import Overview from "./Overview";
import DetailView from "./DetailView";
import Overview2 from "./Overview2";
import Overview3 from "./Overview3";

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    view: {
        border: '1px solid black',
        borderRadius: '5px',
    },

    //左上角第一区域
    controlPanel: 
    {
        position: 'absolute',
        top: 70,
        height: 100,
        left: 70,
        width: 100,
    },
    
    //左边第二个区域
    assistView: {
        position: 'absolute',
        top: 180,
        height:500,
        left: 70,
        width: 100,
    },
    //中间第一个区域
    overview2: {
        position: 'absolute',
        top: 70,
        height: 300,
        left: 180,
        right: 680,
    },
    overview3: {
        position: 'absolute',
        top: 380,
        height: 300,
        left: 180,
        right: 680,
    },
    
    //右边第一个区域
    overview: {
        position: 'absolute',
        top: 70,
        bottom: 350,
        width: 600,
        right: 70,
    },

    //右边第二个区域
    detailView: {
        id: 'main1',
        position: 'absolute',
        bottom: 70,
        height: 270,
        width:600,
        right: 70,
    },
}))

// App组件
function App() {
    // 使用上述的css样式
    const classes = useStyles();

    // 使用classes.root使用样式中定义的root类
    // 可视化项目中，若干视图一般采用绝对布局，方便后续调整各个视图的位置与大小
    // 目前四个视图都是一样的，查看AssistView的注释
    return <div className={classes.root}>
        <div className={clsx(classes.view, classes.controlPanel)}><ControlPanel/></div>
        <div className={clsx(classes.view, classes.assistView)}><AssistView/></div>
        <div className={clsx(classes.view, classes.overview)}><Overview/></div>
        <div className={clsx(classes.view, classes.detailView)}><DetailView/></div>
        <div className={clsx(classes.view, classes.overview2)}><Overview2/></div>
        <div className={clsx(classes.view, classes.overview3)}><Overview3/></div>
    </div>;
}

export default App;
