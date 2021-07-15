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
import Overview4 from "./Overview4";
import Overview5 from "./Overview5";

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
        left: 70,
        height: 100,        
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
    //中上间第一个区域
    overview2: {
        position: 'absolute',
        top: 70,
        height: 300,
        left: 180,
        width:400,
    },
    //中上第二个区域
    overview4: {
        position: 'absolute',
        top: 70,
        height: 300,
        left: 580,
        width:400,
    },

    //下中间第一个区域
    overview3: {
        position: 'absolute',
        top: 380,
        height: 300,
        left: 180,
        width:400,
    },
    overview5: {
        position: 'absolute',
        top: 380,
        height: 300,
        left: 580,
        width:400,
    },
    
    //右边第一个区域
    overview: {
        position: 'absolute',
        top: 70,
        height: 300,
        width: 600,
        left: 990,
    },

    //右边第二个区域
    detailView: {
        position: 'absolute',
        top: 380,
        height: 290,
        width:600,
        left: 990,
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
        <div className={clsx(classes.view, classes.overview4)}><Overview4/></div>
        <div className={clsx(classes.view, classes.overview5)}><Overview5/></div>
    </div>;
}

export default App;
