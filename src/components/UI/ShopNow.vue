<template>
  <a :href="link">
    <button
      :style="{
        width: width,
        height: height
       }"
    >
      Shop Now
    </button>
  </a>
</template>

<script>
export default {
  'name': 'ShopNow',
  data() {
    return {
      link: '#'
    }
  },
  props: {
    width: {
      type: String,
      required: false,
      default: '210px'
    },
    height: {
      type: String,
      required: false,
      default: '52px'
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  border-radius: 62px;
  background-color: #000000;
  color: #FFFFFF;

  font-family: Satoshi, sans-serif;
  font-size: 16px;
}
</style>