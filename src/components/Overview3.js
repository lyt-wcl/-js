import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/china';

function Overview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        return {
            title: {
                text: '美国历年的凶杀案',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#000000'          // 主标题文字颜色
                }
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { 
                        readOnly: false
                    }, //数据视图
                    magicType: {
                        type: ['line', 'bar']
                    },  //切换为折线图，切换为柱状图
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            legend: {
                data:['凶杀案数']
            },
            xAxis: {
                type: 'category',
                data: state.data2.map(item=>item.state)
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
                // {
                //     backgroundColor: 'rgba(0,256,256,0)',       // 背景颜色
                // },
                // {
                //     fillerColor: 'rgba(144,197,237,0.2)',
                // },
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: 0,      // 左边在 10% 的位置。
                    end: 100         // 右边在 60% 的位置。
                },
                {   // 这个dataZoom组件，也控制x轴。
                    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                    start: 10,      // 左边在 10% 的位置。
                    end: 60         // 右边在 60% 的位置。
                }
                
                ],
            series: [{
                data: state.data2.map(item=>item.sum),
                name: '凶杀案数',
                type: 'line',
                smooth: true,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
            
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
