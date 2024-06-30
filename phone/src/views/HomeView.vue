<template>
  <swiper
    :pagination="{ type: 'fraction' }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="../components/icons/lfd73n3ops11a1sm1iz6ygk62erqduan.jpg" alt="Image 1">
    </swiper-slide>
    <swiper-slide>
      <img src="../components/icons/o06vjdks6fw1bqgvx9qovcfvjl7mrw94.jpg" alt="Image 2">
    </swiper-slide>
    <swiper-slide>
      <img src="../components/icons/lfd73n3ops11a1sm1iz6ygk62erqduan.jpg" alt="Image 3">
    </swiper-slide>
    <swiper-slide>
      <img src="../components/icons/o06vjdks6fw1bqgvx9qovcfvjl7mrw94.jpg" alt="Image 4">
    </swiper-slide>
    <swiper-slide>
      <img src="../components/icons/lfd73n3ops11a1sm1iz6ygk62erqduan.jpg" alt="Image 5">
    </swiper-slide>
    <swiper-slide>
      <img src="../components/icons/o06vjdks6fw1bqgvx9qovcfvjl7mrw94.jpg" alt="Image 6">
    </swiper-slide>
  </swiper>
  <div class="container">
    <div class="box">
      <div class="box2">
        <a href="Iphone">
          <img src="../components/icons/iphone15.jpg" alt="iPhone 1">
        </a>
      </div>
    </div>
    <div class="box">
      <div class="box2">
        <a href="Iphone">
          <img src="../components/icons/iphone15.jpg" alt="iPhone 2">
        </a>
      </div>
    </div>
    <div class="box">
      <div class="box2">
        <a href="Android">
          <img src="../components/icons/android.jpg" alt="Android">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.box2 img {
  height: 500px;
  width: 400px;
}
.box {
  display: block;
  margin-bottom: 100px;
}
.box2 {
  width: 400px;
  height: 500px;
  margin: 10px;
  background-color: rebeccapurple;
}
.swiper {
  width: 100%;
  height: 500px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Custom Tippy theme */
.tippy-box[data-theme~='custom'] {
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
}
.tippy-box[data-theme~='custom'] .tippy-arrow {
  color: #333;
}
</style>
