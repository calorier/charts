<template>
  <div>
    <el-card>
      <AreaChart v-bind:recordData="recordData"></AreaChart>
    </el-card>
  </div>
</template>
<script>
import AreaChart from "../components/area-chart.vue";
import { Message } from "element-ui";
import { getMonthRecord } from "../api/data";
export default {
  name: "month",
  data() {
    return {
      recordData: {}
    };
  },
  created() {
    this.initMonthRecord();
  },
  methods: {
    initMonthRecord(monthID) {
      var formData = new FormData();
      //TODO to change the params
      formData.append("month", monthID);
      getMonthRecord(formData)
        .then(chunck => {
          this.recordData = {
            title: `${chunck.month} 的卡路里记录`,
            records: chunck.records
          };
        })
        .catch(err => {
          Window.console.log(err);
          Message.warning("加载错误");
        });
    }
  },
  components: {
    AreaChart
  }
};
</script>