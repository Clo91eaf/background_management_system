<template>
  <el-row :gutter="20" style="margin-top: 20px">
    <el-col :span="12">
      <el-card class="box-card">
        <div id="Bar" :style="{ height: '300px' }"></div>
      </el-card>
      <el-card class="box-card" style="margin-top: 20px">
        <div id="Line" :style="{ height: '400px' }"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div id="Calender" :style="{ height: '300px' }"></div>
      </el-card>
      <el-card class="box-card" style="margin-top: 20px">
        <div id="Scatter" :style="{ height: '400px' }"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.drawBar();
    this.drawLine();
    this.drawCalender();
    this.drawScatter();
  },
  methods: {
    drawBar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("Bar"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      });
    },
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("Line"));

      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      });
    },
    drawCalender() {
      function getVirtulData(year) {
        year = year || "2017";
        var date = +echarts.number.parseDate(year + "-01-01");
        var end = +echarts.number.parseDate(year + "-12-31");
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time <= end; time += dayTime) {
          data.push([
            echarts.format.formatTime("yyyy-MM-dd", time),
            Math.floor(Math.random() * 10000),
          ]);
        }
        return data;
      }

      let myChart = this.$echarts.init(document.getElementById("Calender"));
      myChart.setOption({
        visualMap: {
          show: false,
          min: 0,
          max: 10000,
        },
        calendar: {
          range: "2017",
        },
        series: {
          type: "heatmap",
          coordinateSystem: "calendar",
          data: getVirtulData("2017"),
        },
      });
    },
    drawScatter() {
      let myChart = this.$echarts.init(document.getElementById("Scatter"));
      // 绘制图表
      myChart.setOption({
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68],
            ],
            type: "scatter",
          },
        ],
      });
    },
  },
};
</script>
