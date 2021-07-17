import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/china';

function Overview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
             },
             title: {
                 text: '18-30岁受害人被杀害方式',
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
                        {value: 19429, name: '枪支'},
                        {value: 128, name: '毒杀'},
                        {value: 5792, name: '火'}, 
                        {value: 208, name: '窒息'},  
                        {value: 3960, name: '冷兵器'},                                
                        {value: 1182,name:'未知'}
                   ],
               }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} style={{height:"430px"}}/>;
    </div>
}

export default Overview;
