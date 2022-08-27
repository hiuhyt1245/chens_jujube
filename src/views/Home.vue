<template>
  <div class="container">
    <Carousel />
    <HomeNews />
    <HomeAbout />
    <HomeProduct />
    <HomeMap />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import HomeNews from '../components/HomeNews.vue'
import HomeAbout from '../components/HomeAbout.vue'
import HomeProduct from '../components/HomeProduct.vue'
import HomeMap from '../components/HomeMap.vue'

export default {
components:{
  Carousel,
  HomeNews,
  HomeAbout,
  HomeProduct,
  HomeMap,
},
}
</script>