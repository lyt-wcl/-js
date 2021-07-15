import * as echarts from "echarts";
import usaJson from "./USA.json";
import React, { useEffect, useRef } from "react";

echarts.registerMap("USA", usaJson, {
  Alaska: {
    // 把阿拉斯加移到美国主大陆左下方
    left: -131,
    top: 25,
    width: 15
  },
  Hawaii: {
    left: -110, // 夏威夷
    top: 28,
    width: 5
  },
  "Puerto Rico": {
    // 波多黎各
    left: -76,
    top: 26,
    width: 2
  }
});
const option = {
  title: {
    text: "USA Population Estimates (2012)",
    subtext: "Data from www.census.gov",
    sublink: "http://www.census.gov/popest/data/datasets.html",
    left: "right"
  },
  tooltip: {
    trigger: "item",
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: function (params) {
      var value = (params.value + "").split(".");
      value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
      return params.seriesName + "<br/>" + params.name + ": " + value;
    }
  },
  visualMap: {
    left: "right",
    min: 0,
    max: 2000,
    inRange: {
      color: [
        "#313695",
        "#4575b4",
        "#74add1",
        "#abd9e9",
        "#e0f3f8",
        "#ffffbf",
        "#fee090",
        "#fdae61",
        "#f46d43",
        "#d73027",
        "#a50026"
      ]
    },
    text: ["High", "Low"], // 文本，默认为数值文本
    calculable: true
  },
  toolbox: {
    show: true,
    //orient: 'vertical',
    left: "left",
    top: "top",
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: "USA PopEstimates",
      type: "map",
      roam: true,
      map: "USA",
      emphasis: {
        label: {
          show: true
        }
      },
      // 文本位置修正
      textFixed: {
        Alaska: [20, -20]
      },

      data: [
        { name: "Alabama", value: 191 },
        { name: "Alaska", value: 43 },
        { name: "Arizona", value: 400 },
        { name: "Arkansas", value: 141 },
        { name: "California", value: 1948 },
        { name: "Colorado", value: 145 },
        { name: "Connecticut", value: 134 },
        { name: "Delaware", value: 52 },
        { name: "District of Columbia", value: 134 },
        { name: "Florida", value: 1130 },
        { name: "Georgia", value: 565 },
        { name: "Hawaii", value: 27 },
        { name: "Idaho", value: 22 },
        { name: "Illinois", value: 472 },
        { name: "Indiana", value: 291 },
        { name: "Iowa", value: 39 },
        { name: "Kansas", value: 107 },
        { name: "Kentucky", value: 189 },
        { name: "Louisiana", value: 493 },
        { name: "Maine", value: 27 },
        { name: "Maryland", value: 445 },
        { name: "Massachusetts", value: 219 },
        { name: "Michigan", value: 606 },
        { name: "Minnesota", value: 105 },
        { name: "Mississippi", value: 174 },
        { name: "Missouri", value: 450 },
        { name: "Montana", value: 23 },
        { name: "Nebraska", value: 58 },
        { name: "Nevada", value: 175 },
        { name: "New Hampshire", value: 13 },
        { name: "New Jersey", value: 392 },
        { name: "New Mexico", value: 142 },
        { name: "New York", value: 863 },
        { name: "North Carolina", value: 468 },
        { name: "North Dakota", value: 9 },
        { name: "Ohio", value: 481 },
        { name: "Oklahoma", value: 209 },
        { name: "Oregon", value: 93 },
        { name: "Pennsylvania", value: 699 },
        { name: "Rhode Island", value: 30 },
        { name: "South Carolina", value: 278 },
        { name: "South Dakota", value: 17 },
        { name: "Tennessee", value: 397 },
        { name: "Texas", value: 1363 },
        { name: "Utah", value: 58 },
        { name: "Vermont", value: 7 },
        { name: "Virginia", value: 387 },
        { name: "Washington", value: 175 },
        { name: "West Virginia", value: 57 },
        { name: "Wisconsin", value: 170 },
        { name: "Wyoming", value: 8 },
        { name: "Puerto Rico", value: 0 }
      ]
    }
  ]
};

const Chart = () => {
  const $chart = useRef(null);

  useEffect(() => { 

    const myChart = echarts.init($chart.current);
    myChart.showLoading();

    myChart.setOption(option);
    myChart.hideLoading();

  }, [])

  return <div ref={$chart} style={{height: '300px'}}/>
}

export default Chart;