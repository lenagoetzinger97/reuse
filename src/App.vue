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

<style lang="scss" scoped>
  @import "./scss/main.scss";
</style>
