<template>
  <div class="container" v-if="typeof weather.main != 'undefined'">
    <h1 class="data">{{ weather.name }}</h1>
    <div class="weather">
      <div class="date">{{ dateBuilder_ru() }}</div>
      <h1 class="temp">{{ Math.floor(weather.main.temp) }}℃</h1>
      <h1 class="fran">{{ (Math.floor(weather.main.temp) * 9/5) + 32 }}°F</h1>
    </div>
    <div class="container_categories">
      <div class="bx">
        <div class="wind box">
          <div><img src="../assets/tabler_wind.png"></div>
          <div class="text" style="margin-left: -10px">Ветер:</div>
          <div class="text_info">{{ Math.floor(weather.wind.speed) }}м/с</div>
        </div>
        <div class="pressure box">
          <div><img src="../assets/ion_speedometer.png"></div>
          <div class="text" style="margin-left: 10px">Давление:</div>
          <div class="text_info" style="margin-left: 10px">{{ Math.floor(weather.main.pressure) }}мм</div>
        </div>
        <div class="visibility box">
          <div><img src="../assets/ic_round-visibility.png">
          </div><div class="text" style="margin-left: -5px">Видимость:</div>
          <div class="text_info">{{ Math.floor(weather.main.humidity) }}м</div>
        </div>
        <div class="temp_max box">
          <div><img src="../assets/up-arrow.png">
          </div><div class="text">Макс:</div>
          <div class="text_info">{{ Math.floor(weather.main.temp_max) }}℃</div>
        </div>
      </div>
        <div class="temp_min box">
          <div><img src="../assets/down-arrow.png"></div>
          <div class="text">Мин:</div>
          <div class="text_info">{{ Math.floor(weather.main.temp_min) }}℃</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather_ru',
  props: {
    dateBuilder_ru: {
      type: Function,
      require: true
    },
    weather: {
      type: Object,
      require: true,
      main: {
        temp: String
      },
      fon: {
        type: Boolean
      }
    }
  }
}
</script>

<style scoped>
@import "../style/style.css";
@import "../style/media.css";
</style>