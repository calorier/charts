<template>
  <div class="chart">
    <div id="container" style="min-width:400px;height:400px"></div>设置透明度：
    <span class="opacity">0.3</span>
    <div class="range">
      <span class="min">0.1</span>
      <input type="range" min="0.1" max="1" step="0.1" value="0.3" />
      <span class="max">1</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "area-chart",
  data() {
    return {};
  },
  created() {},
  watch: {}
};
</script>
