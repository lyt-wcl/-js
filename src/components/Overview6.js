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
                 text: '0-17岁受害人被杀害方式',
                 left: 'center'
             },
             legend: {
                 orient: 'vertical',
                 left: 'right',
             },
            series: [
                    {
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
                           fontSize : 15,
                           fontWeight : 'bolder'
                         }
                       },
                   },
                    data: [
                        {value: 2580, name: '枪支'},
                        {value: 112, name: '毒杀'},
                        {value: 821, name: '火'}, 
                        {value: 279, name: '窒息'},  
                        {value: 2094, name: '冷兵器'},                
                        {value: 916,name:'未知'}
                   ],
               }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} style={{height:"425px"}}/>;
    </div>
}

export default Overview;
