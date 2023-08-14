<template>
  <div class="bg-[#232F2F] text-[#E0B860] italic mt-16">
    <div
      class="container flex justify-center md:justify-start items-center mx-auto md:h-[30rem] h-[18rem] duration-700 ease-in">
      <div>
        <div class="font-bold md:text-[6rem] sm:text-6xl text-5xl font-Noto-Sans-Thai duration-700">
          เรือน เอกรุจต์
        </div>
        <h1 class="font-bold md:text-[3rem] text-xl font-Noto-Sans-Thai md:text-start text-center md:mt-4 duration-700">
          <vue-writer :array="arr" :typeSpeed="60" />
        </h1>
        <div
          class="flex md:flex-row flex-col md:justify-start justify-center mt-6 md:text-left text-center font-Noto-Sans-Thai duration-700">
          <button class="text-[#E0B860] py-2 md:w-[30%] w-[50%] md:mx-0 mx-auto  hover:bg-blue-700 border border-[#E0B860] rounded shadow mb-2 md:mr-2">
            <a :href="MessagefaceBook" target="popup">ติดต่อ Facebook</a>
          </button>
          <button class="text-[#E0B860] py-2 md:w-[25%] w-[40%] md:mx-0 mx-auto hover:bg-green-700 border border-[#E0B860] rounded shadow mb-2">
            <a :href="Line" target="popup">ติดต่อ Line</a>
          </button>
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
        "รับผลิตของชำร่วย",
        "รับผลิตของรับไหว้งานเเต่ง",
        "รับผลิตของสมนาคุณ",
      ],
    };
  },
  components: {},
};
</script>

<style></style>
