// 本文件是界面UI的根目录

import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";

import Overview from "./Overview";
import DetailView from "./DetailView";
import Overview2 from "./Overview2";
import Overview3 from "./Overview3";
import Overview4 from "./Overview4";
import Overview5 from "./Overview5";
import Overview6 from "./Overview6";
import Overview7 from "./Overview7";
import Paragraph1 from "./Paragraph1";
import Paragraph2 from "./Paragraph2";
import Paragraph3 from "./Paragraph3";
import Paragraph4 from "./Paragraph4";
import Paragraph5 from "./Paragraph5";
import Paragraph6 from "./Paragraph6";

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    view: {
        border: '0px solid grey',
        borderRadius: '5px',
        backgroundColor:'#ffffffbe',
    },

    //右边第一个区域 美国历年（1
    overview: {
        position: 'absolute',
        top: 70,
        height: 350,
        width: 800,
        left: 480,
    },

    paragraph1: {
        position: 'absolute',
        top: 400,
        height: 300,
        width: 800,
        left: 450,
        color:'#ffffff',
        fontSize:30,
    },

    //下中间第一个区域 各州历年(2.1
    overview3: {
        position: 'absolute',
        top: 720,
        height: 400,
        left: 130,
        width:700,
    },

    //右边第二个区域 地图(2.2
    detailView: {
        position: 'absolute',
        top: 720,
        height: 400,
        width:700,
        left: 850,
    },

    paragraph2: {
        position: 'absolute',
        top: 1150,
        height: 300,
        width: 800,
        left: 450,
        color:'#ffffff',
        fontSize:30,
    },

    //被害者年龄分布(3
    overview5: {
        position: 'absolute',
        top: 1470,
        height: 350,
        width: 800,
        left: 480,
    },

    paragraph3: {
        position: 'absolute',
        top: 1840,
        height: 300,
        width: 800,
        left: 450,
        color:'#ffffff',
        fontSize:30,
    },

    //婴儿和杀人犯(4
    overview4: {
        position: 'absolute',
        top: 2160,
        height: 350,
        width: 800,
        left: 480,
    },

    paragraph4: {
        position: 'absolute',
        top: 2530,
        height: 300,
        width: 800,
        left: 450,
        color:'#ffffff',
        fontSize:30,
    },

    //2010-2014年0-17岁受害人被杀害方式(5.1
    overview6: {
        position: 'absolute',
        top: 2850,
        height: 400,
        left: 130,
        width:700,
    },
    //2010-2014年18-30岁受害人被杀害方式(5.2
    overview7: {
        position: 'absolute',
        top: 2850,
        height: 400,
        width:700,
        left: 850,
    },

    paragraph5: {
        position: 'absolute',
        top: 3270,
        height: 300,
        width: 800,
        left: 450,
        color:'#ffffff',
        fontSize:30,
    },

    //作案方式(6
    overview2: {
        position: 'absolute',
        top: 3590,
        height: 350,
        width: 800,
        left: 480,
    },
    
    paragraph6: {
        position: 'absolute',
        top: 3960,
        height: 300,
        width: 800,
        left: 450,
        color:'#ffffff',
        fontSize:30,
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
        <div className={clsx(classes.view, classes.overview)}><Overview/></div>
        <div className={clsx(classes.view, classes.detailView)}><DetailView/></div>
        <div className={clsx(classes.view, classes.overview2)}><Overview2/></div>
        <div className={clsx(classes.view, classes.overview3)}><Overview3/></div>
        <div className={clsx(classes.view, classes.overview4)}><Overview4/></div>
        <div className={clsx(classes.view, classes.overview5)}><Overview5/></div>
        <div className={clsx(classes.view, classes.overview6)}><Overview6/></div>
        <div className={clsx(classes.view, classes.overview7)}><Overview7/></div>
        <div className={classes.paragraph1}><Paragraph1/></div>
        <div className={classes.paragraph2}><Paragraph2/></div>
        <div className={classes.paragraph3}><Paragraph3/></div>
        <div className={classes.paragraph4}><Paragraph4/></div>
        <div className={classes.paragraph5}><Paragraph5/></div>
        <div className={classes.paragraph6}><Paragraph6/></div>
    </div>;
}

export default App;
