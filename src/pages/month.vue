<template>
  <div>
    <el-card>
      <AreaChart v-bind:recordData="recordData" v-if="flag"></AreaChart>
    </el-card>
  </div>
</template>
<script>
import AreaChart from "../components/area-chart.vue";
import { Message } from "element-ui";
import { getMonthRecord } from "../api/data";
export default {
  name: "Month",
  data() {
    return {
      flag: false,
      recordData: {}
    };
  },
  created() {
    //this.initMonthRecord();
  },
  mounted() {
    var formData = new FormData();
    //TODO to change the params
    let monthID = this.$route.params.monthID;
    let userID = this.$route.params.userID;
    formData.append("userID", userID);
    formData.append("month", monthID);
    getMonthRecord(formData)
      .then(chunck => {
        this.recordData = {
          title: `${chunck.month} 的卡路里记录`,
          records: chunck.records
        };
        window.console.log("==============the record data is");
        window.console.dir(this.recordData);
        this.flag = true;
      })
      .catch(err => {
        window.console.log(err);
        Message.warning("加载错误");
      });
  },
  updated() {
    window.console.log("===============updated");
  },
  methods: {
    initMonthRecord() {}
  },
  components: {
    AreaChart
  }
};
</script>