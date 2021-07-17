
import * as echarts from "echarts";
import usaJson from "./USA.json";
import React, { useEffect, useMemo, useRef, useState , useContext} from "react";
import { store } from "../store";
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

const initData =  [
  [
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
  ],
  [
    { name: "Alabama", value: 0 },
    { name: "Alaska", value: 36 },
    { name: "Arizona", value: 379 },
    { name: "Arkansas", value: 160 },
    { name: "California", value: 1931 },
    { name: "Colorado", value: 167 },
    { name: "Connecticut", value: 130 },
    { name: "Delaware", value: 48 },
    { name: "District of Columbia", value: 116 },
    { name: "Florida", value: 1136 },
    { name: "Georgia", value: 557 },
    { name: "Hawaii", value: 24 },
    { name: "Idaho", value: 31 },
    { name: "Illinois", value: 486 },
    { name: "Indiana", value: 307 },
    { name: "Iowa", value: 47 },
    { name: "Kansas", value: 117 },
    { name: "Kentucky", value: 161 },
    { name: "Louisiana", value: 509 },
    { name: "Maine", value: 35 },
    { name: "Maryland", value: 429 },
    { name: "Massachusetts", value: 184 },
    { name: "Michigan", value: 668 },
    { name: "Minnesota", value: 82 },
    { name: "Mississippi", value: 195 },
    { name: "Missouri", value: 402 },
    { name: "Montana", value: 19 },
    { name: "Nebraska", value: 71 },
    { name: "Nevada", value: 155 },
    { name: "New Hampshire", value: 17 },
    { name: "New Jersey", value: 398 },
    { name: "New Mexico", value: 132 },
    { name: "New York", value: 769 },
    { name: "North Carolina", value: 507 },
    { name: "North Dakota", value: 14 },
    { name: "Ohio", value: 499 },
    { name: "Oklahoma", value: 227 },
    { name: "Oregon", value: 92 },
    { name: "Pennsylvania", value: 689 },
    { name: "Rhode Island", value: 20 },
    { name: "South Carolina", value: 334 },
    { name: "South Dakota", value: 19 },
    { name: "Tennessee", value: 421 },
    { name: "Texas", value: 1217 },
    { name: "Utah", value: 55 },
    { name: "Vermont", value: 11 },
    { name: "Virginia", value: 319 },
    { name: "Washington", value: 183 },
    { name: "West Virginia", value: 84 },
    { name: "Wisconsin", value: 147 },
    { name: "Wyoming", value: 20 },
    { name: "Puerto Rico", value: 0 }
  ],
  [
    { name: "Alabama", value: 2 },
    { name: "Alaska", value: 40 },
    { name: "Arizona", value: 365 },
    { name: "Arkansas", value: 176 },
    { name: "California", value: 2047 },
    { name: "Colorado", value: 172 },
    { name: "Connecticut", value: 145 },
    { name: "Delaware", value: 57 },
    { name: "District of Columbia", value: 0 },
    { name: "Florida", value: 1170 },
    { name: "Georgia", value: 584 },
    { name: "Hawaii", value: 23 },
    { name: "Idaho", value: 29 },
    { name: "Illinois", value: 528 },
    { name: "Indiana", value: 307 },
    { name: "Iowa", value: 51 },
    { name: "Kansas", value: 90 },
    { name: "Kentucky", value: 211 },
    { name: "Louisiana", value: 511 },
    { name: "Maine", value: 33 },
    { name: "Maryland", value: 403 },
    { name: "Massachusetts", value: 122 },
    { name: "Michigan", value: 731 },
    { name: "Minnesota", value: 116 },
    { name: "Mississippi", value: 179 },
    { name: "Missouri", value: 423 },
    { name: "Montana", value: 23 },
    { name: "Nebraska", value: 56 },
    { name: "Nevada", value: 136 },
    { name: "New Hampshire", value: 15 },
    { name: "New Jersey", value: 405 },
    { name: "New Mexico", value: 112 },
    { name: "New York", value: 682 },
    { name: "North Carolina", value: 503 },
    { name: "North Dakota", value: 14 },
    { name: "Ohio", value: 475 },
    { name: "Oklahoma", value: 239 },
    { name: "Oregon", value: 97 },
    { name: "Pennsylvania", value: 766 },
    { name: "Rhode Island", value: 37 },
    { name: "South Carolina", value: 349 },
    { name: "South Dakota", value: 16 },
    { name: "Tennessee", value: 440 },
    { name: "Texas", value: 1267 },
    { name: "Utah", value: 57 },
    { name: "Vermont", value: 10 },
    { name: "Virginia", value: 334 },
    { name: "Washington", value: 215 },
    { name: "West Virginia", value: 72 },
    { name: "Wisconsin", value: 181 },
    { name: "Wyoming", value: 17 },
    { name: "Puerto Rico", value: 0 }
  ],
  [
    { name: "Alabama", value: 2 },
    { name: "Alaska", value: 41 },
    { name: "Arizona", value: 383 },
    { name: "Arkansas", value: 156 },
    { name: "California", value: 1930 },
    { name: "Colorado", value: 186 },
    { name: "Connecticut", value: 93 },
    { name: "Delaware", value: 41 },
    { name: "District of Columbia", value: 115 },
    { name: "Florida", value: 1129 },
    { name: "Georgia", value: 567 },
    { name: "Hawaii", value: 24 },
    { name: "Idaho", value: 30 },
    { name: "Illinois", value: 453 },
    { name: "Indiana", value: 350 },
    { name: "Iowa", value: 42 },
    { name: "Kansas", value: 118 },
    { name: "Kentucky", value: 174 },
    { name: "Louisiana", value: 478 },
    { name: "Maine", value: 30 },
    { name: "Maryland", value: 406 },
    { name: "Massachusetts", value: 136 },
    { name: "Michigan", value: 645 },
    { name: "Minnesota", value: 127 },
    { name: "Mississippi", value: 147 },
    { name: "Missouri", value: 405 },
    { name: "Montana", value: 16 },
    { name: "Nebraska", value: 64 },
    { name: "Nevada", value: 168 },
    { name: "New Hampshire", value: 23 },
    { name: "New Jersey", value: 420 },
    { name: "New Mexico", value: 119 },
    { name: "New York", value: 651 },
    { name: "North Carolina", value: 477 },
    { name: "North Dakota", value: 11 },
    { name: "Ohio", value: 474 },
    { name: "Oklahoma", value: 216 },
    { name: "Oregon", value: 85 },
    { name: "Pennsylvania", value: 667 },
    { name: "Rhode Island", value: 31 },
    { name: "South Carolina", value: 318 },
    { name: "South Dakota", value: 13 },
    { name: "Tennessee", value: 363 },
    { name: "Texas", value: 1272 },
    { name: "Utah", value: 51 },
    { name: "Vermont", value: 11 },
    { name: "Virginia", value: 336 },
    { name: "Washington", value: 194 },
    { name: "West Virginia", value: 58 },
    { name: "Wisconsin", value: 182 },
    { name: "Wyoming", value: 17 },
    { name: "Puerto Rico", value: 0 }
  ],
  [
    { name: "Alabama", value: 1 },
    { name: "Alaska", value: 48 },
    { name: "Arizona", value: 313 },
    { name: "Arkansas", value: 169 },
    { name: "California", value: 1872 },
    { name: "Colorado", value: 165 },
    { name: "Connecticut", value: 90 },
    { name: "Delaware", value: 53 },
    { name: "District of Columbia", value: 114 },
    { name: "Florida", value: 1156 },
    { name: "Georgia", value: 608 },
    { name: "Hawaii", value: 15 },
    { name: "Idaho", value: 30 },
    { name: "Illinois", value: 456 },
    { name: "Indiana", value: 337 },
    { name: "Iowa", value: 63 },
    { name: "Kansas", value: 93 },
    { name: "Kentucky", value: 168 },
    { name: "Louisiana", value: 452 },
    { name: "Maine", value: 29 },
    { name: "Maryland", value: 337 },
    { name: "Massachusetts", value: 132 },
    { name: "Michigan", value: 576 },
    { name: "Minnesota", value: 110 },
    { name: "Mississippi", value: 173 },
    { name: "Missouri", value: 439 },
    { name: "Montana", value: 30 },
    { name: "Nebraska", value: 57 },
    { name: "Nevada", value: 185 },
    { name: "New Hampshire", value: 16 },
    { name: "New Jersey", value: 359 },
    { name: "New Mexico", value: 128 },
    { name: "New York", value: 642 },
    { name: "North Carolina", value: 493 },
    { name: "North Dakota", value: 15 },
    { name: "Ohio", value: 455 },
    { name: "Oklahoma", value: 199 },
    { name: "Oregon", value: 84 },
    { name: "Pennsylvania", value: 646 },
    { name: "Rhode Island", value: 27 },
    { name: "South Carolina", value: 336 },
    { name: "South Dakota", value: 20 },
    { name: "Tennessee", value: 414 },
    { name: "Texas", value: 1324 },
    { name: "Utah", value: 72 },
    { name: "Vermont", value: 11 },
    { name: "Virginia", value: 352 },
    { name: "Washington", value: 206 },
    { name: "West Virginia", value: 74 },
    { name: "Wisconsin", value: 171 },
    { name: "Wyoming", value: 14 },
    { name: "Puerto Rico", value: 0 }
  ]
]
const Chart = () => {
  const {state, dispatch} = useContext(store);

  const [data, setData] = useState([]);

  const option = useMemo(() => {
    return {
      title: {
        text: "各州凶杀案数",
        left: "left"
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
        left: "right",
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
         data: data
        }
      ]
    }
  }, [data])

  useEffect(() => {
    console.log(state.count)  
      setData(initData[state.count-2010])
    
  }, [state.count])


  const $chart = useRef(null);

  useEffect(() => { 

    const myChart = echarts.init($chart.current);
    myChart.showLoading();

    myChart.setOption(option);
    myChart.hideLoading();

  }, [option])

  return <div ref={$chart} style={{height: '360px'}}/>
}

export default Chart;
