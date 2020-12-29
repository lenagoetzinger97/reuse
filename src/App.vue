<!-- neue components in <template> und in <script> (2x!) ergänzen -->
<template>
  <div id="app">
    <Intro msg="Das ist ein Test"/>
    <Data/>
  </div>
</template>

<script>
import Data from './components/Data.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Data,
    Intro
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
