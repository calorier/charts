<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>
<script>
import Highcharts from "highcharts/highcharts";
export default {
  name: "AreaChart",
  props: ["recordData"],
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.myTitle = this.recordData.title;
      this.myRecords = this.recordData.records;

      window.console.log(`son ======title is ${this.myTitle}`);
      window.console.dir(this.recordData);
    }
  },
  data() {
    return {
      myTitle: "test",
      myRecords: [1, 2, 3, 4, 5, 6],
      chartOptions: {
        chart: {
          type: "area"
        },
        title: {
          //TODO
          text: "12月卡路里记录"
        },
        yAxis: {
          title: {
            text: "卡路里数"
          }
        },
        xAixs: {
          titile: {
            text: "日期"
          }
        },
        legent: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
        plotOptions: {
          areas: {
            fillOpacity: 0.7,
            pointStart: 1,
            marker: {
              enabled: false,
              symble: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "卡路里量",
            color: "lightgreen",
            fillColor: {
              // 设置渐变的填充颜色
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[5]],
                [
                  1,
                  Highcharts.Color(Highcharts.getOptions().colors[6])
                    .setOpacity(0)
                    .get("rgba")
                ]
              ]
            },
            data: [
              3000,
              2506,
              1234,
              8000,
              9000,
              7865,
              9802,
              9023,
              8902,
              3334,
              4994,
              29991,
              8989,
              1234,
              7865,
              9000,
              9000,
              7865,
              9802,
              9023,
              9008
            ]
          }
        ]
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.highcharts-container {
  width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>