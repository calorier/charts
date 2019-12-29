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
  beforeCreate: function() {
    window.console.log("brefor created =============son");
  },
  created: function() {
    window.console.log("created============son");
  },
  mounted: function() {
    window.console.log(
      `mounted============son===and the titile is ${this.title}`
    );
  },
  watch: {
    recordData: {
      handler() {
        this.getInfo();
      }
    }
  },
  methods: {
    getInfo() {
      this.title = this.recordData.title;
      this.records = this.recordData.records;
      window.console.log(`*************************titile is ${this.title}`);
    }
  },
  data() {
    return {
      title: "hhhhhhhhhhh",
      records: [1, 2, 3, 4, 5, 6, 7, 8, 10],
      chartOptions: {
        chart: {
          type: "column"
        },
        title: {
          text: this.title
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
        series: this.records
      }
    };
  }
};
</script>