<template>
  <div>
    <h1>hhh</h1>
    <el-card>
      <el-divider>year{{this.route.params.yearID}}</el-divider>
      <HistogramChart v-bind:recordData="recordData"></HistogramChart>
    </el-card>
  </div>
</template>
<script>
import HistogramChart from "../components/histogram-chart";
import { Message } from "element-ui";
import { getYearRecord } from "../api/data";
export default {
  beforeCreate: function() {
    //组件实例化之前
    window.console.log("1===beforeCreate===");
  },
  created: function() {
    //组件实例化了
    this.initYearRecord();
    window.console.log("2===created===");
  },
  beforeMount: function() {
    //组件写入dom结构之前
    window.console.log("3===beforeMount===");
  },
  mounted: function() {
    //组件写入dom结构了
    window.console.log("4===mounted===");
    //基础配置数据
  },
  beforeUpdate: function() {
    //组件更新前
    window.console.log("5===beforeUpdate===");
  },
  updated: function() {
    //组件更新比如修改了文案
    window.console.log("6===updated===");
  },
  beforeDestroy: function() {
    //组件销毁之前
    window.console.log("7===beforeDestroy===");
  },
  destroyed: function() {
    //组件已经销毁
    window.console.log("8===destroyed===");
  },
  name: "Year",
  data() {
    return {
      recordData: {}
    };
  },
  methods: {
    initYearRecord() {
      let formData = new FormData();
      let userID = this.$route.params.userID;
      let yearID = this.$route.params.yearID;
      //TODO to change the params
      formData.append("user", userID);
      formData.append("year", yearID);
      getYearRecord(formData)
        .then(chunck => {
          this.recordData = {
            title: `${chunck.year} 的卡路里记录`,
            records: chunck.records
          };
          window.console.log(`============recordData is `);
          window.console.dir(this.recordData);
        })
        .catch(err => {
          window.console.log(err);
          Message.warning("加载错误");
        });
    }
  },
  components: {
    HistogramChart
  }
};
</script>