<template>
  <div id="app">
    <h1>Chart.js</h1>
    <canvas id="myChart" width="400" height="400"></canvas> 
  </div>
</template>

<script>
import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from `chart.js`

export default {
  mounted() {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
    
    const ctx = document.getElementById('myChart');
    const chart = new Chart(ctx, {
    type: 'line',
    // data: ...
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart Title'
            }
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    }
})
  console.log(chart);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
