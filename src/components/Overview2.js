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
        formatter: "{b}: {c} ({d}%)"//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
     },
     title: {
         text: '2010-2014作案方式数据',
         left: 'center'
     },
     legend: {
         orient: 'vertical',
         left: 'right',
     },
    series: [
        {
             name: '作案方式',
             type: 'pie',
             radius: '70%',
             avoidLabelOverlap: false,

             //标签
            label: {
                 normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}: {c} ({d}%)',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
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
                {value: 39473, name: '枪杀'},
                {value: 416, name: '毒杀'},
                {value: 11935, name: '火灾'},
                {value: 1106, name: '窒息'},
                {value: 15801, name: '冷兵器',itemStyle:{color:'#2c7fb8'}},                    
                {value: 4955, name: '其他',itemStyle:{color:'rgb(12,44,132)'}},   
                  
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
    ]
    
        };
    };
    return <div>
        <ReactEcharts option={getOption()} style={{height:"358px"}}/>;
    </div>
}

export default Overview;
