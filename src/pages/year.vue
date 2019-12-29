<template>
  <div>
    <el-card>
      <HistogramChart v-bind:recordData="recordData"></HistogramChart>
    </el-card>
  </div>
</template>
<script>
import HistogramChart from "../components/hisotgram-chart";
import { Message } from "element-ui";
import { getYearRecord } from "../api/data";
export default {
  name: "Year",
  data() {
    return {
      recordData:{}
    };
  },
  created() {
    this.initYearRecord();
  },
  methods: {
    initYearRecord(yearID) {
      var formData = new FormData();
      //TODO to change the params
      formData.append("year", yearID);
      getYearRecord(formData)
        .then(chunck => {
          this.yearData = {
              "title":`${chunck.year} 的卡路里记录`,
              "records":chunck.records
          };
        })
        .catch(err => {
          Window.console.log(err);
          Message.warning("加载错误");
        });
    }
  },
  components: {
    HistogramChart
  }
};
</script>