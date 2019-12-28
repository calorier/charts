<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>
<script>
import Highcharts from "highcharts/highcharts";
export default {
  name: "AreaChart",
  props: {
    recordData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "area"
        },
        title: {
          //TODO
          text: this.recordData.title
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
            name: "hh",
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
            data: this.recordData.record
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
  },
  methods: {
    callback() {}
  },
  created() {},
  watch: {}
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