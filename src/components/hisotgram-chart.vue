<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>
<script>
export default {
  name: "HistogramChart",
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
          type: "column"
        },
        title: {
          text: this.recordData.title
        },
        xAxis: {
          title: {
            text: "月份"
          }
        },
        yAxis: {
          title: {
            text: "卡路里"
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 12,
            groupPadding: 0,
            shadow: false,
            datalabels: {
              inside: true
            }
          }
        },
        series: this.recordData.records
      }
    };
  }
};
</script>