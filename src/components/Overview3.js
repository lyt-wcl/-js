import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";

function Overview() {
    const {state, dispatch} = useContext(store);
    const getOption = () => {
        if(state.count==0)
        return {
            title: {
                text: '各州历年凶杀案',
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
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            legend: {
                data:['2010年','2011年','2012年','2013年','2014年'],
                selected:{'2010年':true,'2011年':false,'2012年':false,'2013年':false,'2014年':false},
                selectedMode: 'single',
            },
            xAxis: {
                type: 'category',
                data: state.data2010.map(item=>item.state)
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
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
            series: [
            {
                data: state.data2010.map(item=>item.sum),
                name: '2010年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2011.map(item=>item.sum),
                name: '2011年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2012.map(item=>item.sum),
                name: '2012年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2013.map(item=>item.sum),
                name: '2013年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2014.map(item=>item.sum),
                name: '2014年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            }
            ]               
        };
        else if(state.count==1)
        return {
            title: {
                text: '各州历年凶杀案',
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
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            legend: {
                data:['2010年','2011年','2012年','2013年','2014年'],
                selected:{'2010年':false,'2011年':true,'2012年':false,'2013年':false,'2014年':false},
                selectedMode: 'single',
            },
            xAxis: {
                type: 'category',
                data: state.data2010.map(item=>item.state)
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
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
            series: [
            {
                data: state.data2010.map(item=>item.sum),
                name: '2010年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2011.map(item=>item.sum),
                name: '2011年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2012.map(item=>item.sum),
                name: '2012年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2013.map(item=>item.sum),
                name: '2013年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2014.map(item=>item.sum),
                name: '2014年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            }
            ]               
        };
        if(state.count==2)
        return {
            title: {
                text: '各州历年凶杀案',
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
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            legend: {
                data:['2010年','2011年','2012年','2013年','2014年'],
                selected:{'2010年':false,'2011年':false,'2012年':true,'2013年':false,'2014年':false},
                selectedMode: 'single',
            },
            xAxis: {
                type: 'category',
                data: state.data2010.map(item=>item.state)
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
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
            series: [
            {
                data: state.data2010.map(item=>item.sum),
                name: '2010年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2011.map(item=>item.sum),
                name: '2011年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2012.map(item=>item.sum),
                name: '2012年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2013.map(item=>item.sum),
                name: '2013年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2014.map(item=>item.sum),
                name: '2014年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            }
            ]               
        };
        if(state.count==4)
        return {
            title: {
                text: '各州历年凶杀案',
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
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            legend: {
                data:['2010年','2011年','2012年','2013年','2014年'],
                selected:{'2010年':false,'2011年':false,'2012年':false,'2013年':true,'2014年':false},
                selectedMode: 'single',
            },
            xAxis: {
                type: 'category',
                data: state.data2010.map(item=>item.state)
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
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
            series: [
            {
                data: state.data2010.map(item=>item.sum),
                name: '2010年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2011.map(item=>item.sum),
                name: '2011年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2012.map(item=>item.sum),
                name: '2012年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2013.map(item=>item.sum),
                name: '2013年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2014.map(item=>item.sum),
                name: '2014年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            }
            ]               
        };
        else
        return {
            title: {
                text: '各州历年凶杀案',
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
                    restore: {},  //还原
                    saveAsImage: {}   //保存为图片
                }
            },
            legend: {
                data:['2010年','2011年','2012年','2013年','2014年'],
                selected:{'2010年':false,'2011年':false,'2012年':false,'2013年':false,'2014年':true},
                selectedMode: 'single',
            },
            xAxis: {
                type: 'category',
                data: state.data2010.map(item=>item.state)
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
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
            series: [
            {
                data: state.data2010.map(item=>item.sum),
                name: '2010年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2011.map(item=>item.sum),
                name: '2011年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2012.map(item=>item.sum),
                name: '2012年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2013.map(item=>item.sum),
                name: '2013年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            },
            {
                data: state.data2014.map(item=>item.sum),
                name: '2014年',
                type: 'bar',
                smooth: true,
                showBackground: true,
                backgroundStyle: 
                {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
            }
            ]               
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
