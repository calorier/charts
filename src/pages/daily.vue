<template>
  <div>
    <el-card>
      <PieChart v-bind:recordData="recordData"></PieChart>
    </el-card>
  </div>
</template>
<script>
import PieChart from "../components/pie-chart.vue";
import { Message } from "element-ui";
import { getDailyRecord } from "../api/data";
export default {
  name: "Daily",
  data() {
    return {
      recordData: {}
    };
  },
  created() {
    this.initDailyRecord();
  },
  methods: {
    initDailyRecord() {
      let userID = this.$route.params.userID;
      let dailyID = this.$route.params.dailyID;
      let formData = new FormData();
      //TODO
      formData.append("userID", userID);
      formData.append("day", dailyID);
      getDailyRecord(formData)
        .then(chunck => {
          this.recordData = {
            title: `${chunck.date} 的卡路里量`,
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
    PieChart
  }
};
</script>