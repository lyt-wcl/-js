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
        //formatter: "{a} <br/>{b}: {c} ({d}%)"//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
     },
     title: {
         text: '被害婴儿与杀人犯的关系',
         left: 'center'
     },
     legend: {
         orient: 'vertical',
         left: 'right',
     },
    series: [
        {
             name: '关系',
             type: 'pie',
             radius: '50%',
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
                {value: 1133, name: '家庭成员'},
                {value: 35, name: '继子/继女'},  
                {value: 103, name: '熟人'},
                {value: 483, name: '未知'},
                {value: 27, name: '陌生人'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            type: 'pie',
            radius: '50%',
            avoidLabelOverlap: false,
            //标签
            label: {
                normal: {
                   show: true,
                   position: 'outside',
                   formatter: '{b}',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                   textStyle : {                   
                   align : 'center',
                   baseline : 'middle',
                   fontSize : 15,
                   fontWeight : 'bolder'
                 }
               },
           },
            data: [
                {value: 1133, name: '家庭成员'},
                {value: 35, name: '继子/继女'},  
                {value: 103, name: '熟人'},
                {value: 483, name: '未知'},
                {value: 27, name: '陌生人'},                    
           ],
       }

    ]
    
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
