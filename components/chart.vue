<template>
  <apexchart
      :key="series"
      height="400"
      width="100%"
      type="bar"
      :options="options"
      :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "chart",
  data(){
    return{
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style scoped>

</style>
