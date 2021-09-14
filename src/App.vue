<template>
  <el-button @click="$router.push('/')">Home</el-button>
  <el-button @click="$router.push('/vuex')">Vuex</el-button>
  <el-button @click="$router.push('/axios')">Axios</el-button>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
