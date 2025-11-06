<template>
  <q-card bordered>
    <q-card-section>
      <div class="text-h6 q-px-sm">Gráficos de informes</div>
    </q-card-section>
    <q-card-section>
      <apexchart
        type="bar"
        width="100%"
        height="500"
        :options="chartOptions"
        :series="chartSeries"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "RelatorioGrafico",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
          },
        },
        title: {
          text: "Informe DE Tickets",
          align: "center",
        },
        xaxis: {
          categories: this.chartData.series.map((serie) => serie.categories).flat(), // Combina todas las etiquetas
        },
        yaxis: {
          title: {
            text: "Quantidade de Tickets",
          },
        },
        legend: {
          position: "bottom",
        },
        tooltip: {
          enabled: true,
        },
      };
    },
    chartSeries() {
      return this.chartData.series.map((serie) => ({
        name: serie.name,
        data: serie.data,
      }));
    },
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 500px;
}
</style>
  
