<template>axios</template>

<script setup>
import axios from '../utils/axios'

axios
  .get('/users/XPoet')
  .then((res) => {
    console.log('res: ', res)
  })
  .catch((err) => {
    console.log('err: ', err)
  })
</script>

<style scoped></style>
