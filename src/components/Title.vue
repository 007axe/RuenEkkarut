<template>
  <div id="review"  class="bg-[#DBB461] text-[#DBB461] font-Noto-Sans-Thai">
    <div class="container mx-auto pt-4">
        <h2 class="font-bold text-center text-[#232F2F]">รีวิวจากลูกค้า</h2>
    <Carousel :autoplay="2000" :wrap-around="true" :transition="500">
    <Slide v-for="item in items" :key="item.image">
        <div class="carousel__item p-6 ">
        <div  class="max-w-4xl  rounded overflow-hidden  shadow-lg bg-[#232F2F] my-14">
          <img 
            
            class="w-full bg-contain rounded overflow-hidden"
            :src="item.image"
            alt="Sunset in the mountains"
          />
        </div>
      </div>
      
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "TitleVue",
  data() {
    return{
        items:[
            {image:"https://media.discordapp.net/attachments/511170800997629954/1140568864384622602/image.png?width=417&height=468"},
            {image:"https://media.discordapp.net/attachments/511170800997629954/1140568929970962492/image.png?width=417&height=468"},
            {image:"https://media.discordapp.net/attachments/511170800997629954/1140633720844472350/image.png?width=417&height=468"},
            {image: "https://media.discordapp.net/attachments/511170800997629954/1140678227283681370/image.png?width=417&height=468"},
            {image:"https://media.discordapp.net/attachments/511170800997629954/1140680008805920819/image.png?width=417&height=468"}
        ]
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>