<template>
  <div class=" md:h-[50rem] sm:h-[40rem] h-[25rem] bg-img">
  <div class="bg-custom  text-[#E0B860] italic sm:pt-[12rem] pt-[5rem] ">
    <div
      class="container    flex justify-center md:justify-start items-center mx-auto md:h-[30rem] h-[25rem] duration-700 ease-in">
      <div data-aos="fade-up" data-aos-duration="2000" class=" md:w-[100%] w-[80%]   ">
        <div class="font-bold md:text-[4rem] sm:text-[3rem] text-[2.2rem] font-Noto-Sans-Thai  text-[#E0B860] drop-shadow-lg duration-700 text-center md:text-start md:leading-8 leading-11">
          <vue-writer :array="arr" :typeSpeed="60" />
        </div>
        <h4 class="font-Noto-Sans-Thai md:mt-4 duration-700 md:w-[40%] w-[100%] text-center md:text-start lg:text-2xl sm:text-lg text-sm ">
          รับผลิตของรับไหว้งานเเต่ง งานบวช งานเกษียณอายุราชการ เเละงานมงคลอื่นๆ ตามออร์เดอร์ รับประกันคุณภาพสินค้าด้วยประสบการณ์ที่มากกว่า 20 ปี
        </h4>
        <div
          class="mt-4 md:text-left text-center font-Noto-Sans-Thai duration-700 text-sm">
            <a :href="MessagefaceBook" target="popup"><i class="fa-brands fa-facebook mr-2 md:text-4xl text-2xl text-blue-500"></i></a>       
            <a :href="Line" target="popup"><i class="fa-brands fa-line text-2xl md:text-4xl rounded-full text-green-500"></i></a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HeadLogo",

  data() {
    return {
      MessagefaceBook:
        "https://l.facebook.com/l.php?u=http%3A%2F%2Fm.me%2Fekshopjjmall%3Ffbclid%3DIwAR1nE8Ebsw3iWZsTRgKyBvq4_9j4Ns2hJ96kN0erA2dEnZHb-jGBS-A1AxI&h=AT3bQ-wnFYJKO9_pu27w4fuzemFODb7gbF9DaCymQ77Inyq2K8lHm76PUihU5lQjYOecyzb1_xnfDVtvfRKB6benOJxLhHgMyJzdZquUtWFCAbQP9cVMoKGfGqRL-R1lNWrSxy7Bj1x43fi7yOA9gg",
      Line: "https://lin.ee/XpdyuYJ",
      arr: [
        "เรือน เอกรุจต์",
        "Ruen Ekkarut"
      ],
      imgTitle:"https://media.discordapp.net/attachments/511170800997629954/1140922587896102962/364707125_297695922796680_328747397042917966_n-transformed.png?width=624&height=468",
    };
  },
  components: {},
};
</script>

<style scoped>
.bg-img{
  
  background-image: url(https://cdn.discordapp.com/attachments/511170800997629954/1140933541480378408/367507894_1029601531373168_3676124302816852865_n.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
  height: 100%;
}
.bg-custom{
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.7); /* Black w/opacity/see-through */
}

</style>
