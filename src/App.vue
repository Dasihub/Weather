<template>
  <div>
  <div id="app" v-if="!show" v-bind:class="{app: fon_checkbox, 'black_fon': !fon_checkbox}">
    <div class="search">
      <input
          class="search_input"
          type="search"
          @keypress="fetchWatcher"
          v-model="query"
      >
    </div>
    <div class="check_flex">
      <div>
        <label for="cl">
          <input @click="fon_checkbox = !fon_checkbox" id="cl" type="checkbox">
          <span class='check'></span>
        </label>
      </div>
      <div class="lan">
        <div><router-link class="link" to="/Weather/en">en</router-link></div>
        <div style="border-right: 3px solid #eae8e8"></div>
        <div><router-link class="link" to="/Weather">ru</router-link> </div>
      </div>
    </div>
    <router-view
        v-bind:weather="weather"
        v-bind:dateBuilder_ru="dateBuilder_ru"
        v-bind:dateBuilder_en="dateBuilder_en"
    />
    <button v-if="typeof weather.main != 'undefined'" class="btn" @click.prevent="PlayAudio">Нажми на кнопку</button>
  </div>
    <audio src="./audio/audio.mp3" id="audi" />
  <div v-if="show">
    <img src="https://i2.wp.com/fb.ru/misc/i/gallery/14907/318932.jpg">
  </div>
  </div>
</template>

<script>

import Weather_ru from "./components/Weather_ru";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Weather_ru
  },
  data() {
    return {
      fon_checkbox: true,
      key_url: '3805ceecaa7cf1e91254a93920de4d84',
      weather: {},
      query: '',
      show: false
    }
  },
  methods: {
    fetchWatcher(e) {
      if (e.key === 'Enter') {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&APPID=${this.key_url}`)
              .then(data => data.json())
              .then(res => this.weather = res)
      }
    },
    dateBuilder_ru() {
      let d = new Date();
      let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      let days = ["Воскресенье", "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${date}, ${month}, ${year}`
    },
    dateBuilder_en() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${date}, ${month}, ${year}`
    },
    PlayAudio() {
      const audi = document.querySelector('#audi')
      audi.play()
      this.show = !this.show
      document.body.style.backgroundColor = 'black'
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.black_fon {
  background-color: #1a1919;
  height: 1000px;
}

.app {
  background: linear-gradient(90deg, #8260bd 0%, #e068c8 100%);
  height: 1000px;
}

.search {
  display: flex;
  justify-content: center;
}

.search_input {
  width: 80%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  margin: 10px 20px;
}

.search_input:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 16px 0px 16px 0px;
  background-color: white;
}

input[type="checkbox"]
{
  -webkit-appearance: none;
}

.check
{
  position: relative;
  display: block;
  width: 50px;
  height: 20px;
  background-color: wheat;
  cursor: pointer;
  border-radius: 20px;
  transition: ease-in .5s;
  margin: 10px 10px;
}

.check::after
{
  content:'';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 2px;
  left: 2px;
  background-color: #fff;
  border-radius: 50%;
  transition: ease-in .5s
}

input[type="checkbox"]:checked ~ .check
{
  background-color: #fff;
}

input[type="checkbox"]:checked ~ .check::after
{
  background-color: #000000;
  transform: translateX(30px)
}

.check_flex {
  display: flex;
  justify-content: space-around;
}

.lan {
  display: flex;
  background-color: #c889d3;
  width: 100px;
  justify-content: space-around;
  border-radius: 10px;
  height: 25px;
  font-size: 20px;
}

.link {
  color: white;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}


.btn{
  color: white;
  background-color: red;
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  width: 100px;
  height: 100px;
  box-shadow: 3px 3px black;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}

img {
  width: 100%;
  height: 100%;
}
</style>
