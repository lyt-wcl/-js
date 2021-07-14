import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/china';

function Overview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        return {
            //提示框组件,鼠标移动上去显示的提示内容
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
     },
     title: {
         text: '2010-2014作案武器数据',
         left: 'center'
     },
     legend: {
         orient: 'vertical',
         left: 'left',
     },
     series: [
         {
             name: '访问来源',
             type: 'pie',
             radius: '80%',
             avoidLabelOverlap: false,
             //标签
             label: {
                 normal: {
                     show: true,
                     position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
 
                    textStyle : {                   
                     align : 'center',
                     baseline : 'middle',
                     fontFamily : '微软雅黑',
                     fontSize : 15,
                     fontWeight : 'bolder'
                  }
                 },
             },
             data: [
                 {value: 39473, name: '枪'},
                 {value: 4911, name: '未知'},
                 {value: 15801, name: '冷兵器'},
                 {value: 416, name: '毒杀'},
                 {value: 101, name: '溺水'},
                 {value: 15, name: '高处坠落'},
                 {value: 29, name: 'Explosive'},
                 {value: 528, name: 'Suffocation'},
                 {value: 477, name: 'Strangulation'},
                 {value: 11935, name: '火灾'},
                 {value: 11482, name: 'Firearm'}
             ],
             emphasis: {
                 itemStyle: {
                     shadowBlur: 10,
                     shadowOffsetX: 0,
                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                 }
             }
         }
     ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
