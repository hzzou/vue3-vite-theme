<template>
  <div>
    <div ref="barRef" style="width: 500px; height: 500px;"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { echarts, barOptions } from './ECharts';
export default defineComponent({
  name:'secondView',
  setup(props) {
    const barRef = ref(null);
    // console.log(echarts)
    
    onMounted(()=> {
      // console.log(barOptions)
      // console.log(barRef.value)
      if(barRef.value){
        const barChart = echarts.init(barRef.value);
        // console.log(barChart)
        barOptions && barChart.setOption(barOptions)
      }
    });
    
    return{
      barRef
    }
  }
});
</script>
<style scoped lang="scss">
  
</style>
