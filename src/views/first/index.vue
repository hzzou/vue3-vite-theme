<template>
  <div class="first-view">
    <h2>标题</h2>
    <article class="body">
      <h5>body</h5>
      <el-progress style="margin-bottom: 10px" :text-inside="true" :stroke-width="26" :percentage="70" />
      <el-button type="primary">按钮</el-button>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'firstView',
  setup(){

  }
})
</script>
<style scoped lang="scss">
  .first-view{
    margin: 0 auto;
    display: grid;
    .body{
      background-color: rgba(255, 0, 0, 0.3);
      padding: 20px;
    }
  }
</style>