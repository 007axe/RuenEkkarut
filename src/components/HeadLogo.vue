<template>
  <div class="bg-[#232F2F] text-[#E0B860] italic mt-16">
    <div class="container flex   justify-center md:justify-start items-center mx-auto md:h-[30rem] h-[18rem] duration-700 ease-in">
        <div>
          
          <div class="font-bold md:text-[6rem] sm:text-6xl text-5xl font-Noto-Sans-Thai duration-700">เรือน เอกรุจต์</div>
          <h1 class="font-bold md:text-[3rem] text-xl font-Noto-Sans-Thai md:text-start text-center  md:mt-4">
            <vue-writer :array="arr" :typeSpeed="60" />
          </h1>
          
        </div>
  </div>

  </div>
  
</template>

<script>
export default {
    name: "HeadLogo",
    data() {
    return {
      arr: ["รับผลิตของชำร่วย", "รับผลิตของรับไหว้งานเเต่ง", "รับผลิตของสมนาคุณ"]
    }
  },
  components: {

  }
}
</script>

<style>

</style>