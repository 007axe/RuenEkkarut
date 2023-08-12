<template>
  <div class="bg-[#DBB461] font-Noto-Sans-Thai py-5">
    <div class="container mx-auto flex flex-col justify-center">
      <h1 class="font-bold text-center text-4xl mb-5 text-[#232F2F]">ติดต่อ</h1>
      <div class="container md:flex mb-8 mx-auto">
        <div class="md:w-[60%] w-[100%] md:mb-0 mb-6">
          <iframe
            class="rounded-md md:w-[80%] w-[100%] h-[100%] duration-700 ease-in"
            :src="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="flex md:text-start text-center duration-700 ease-in">
          <div class="text-[#232F2F]">
            <h1 class="mb-4">สอบถามเพิ่มเติมเกี่ยวกับสินค้าได้ที่</h1>
            <div class="md:flex items-center mb-2">
              <i class="fa-solid fa-envelope text-3xl mr-3"></i>
              <p class="text-lg text">ruenekkarut@gmail.com</p>
            </div>
            <div class="md:flex items-center mb-2">
              <i class="fa-brands fa-facebook text-3xl mr-3"></i>
              <p><a
                @click="faceBook"
                target="popup"
                class="text-lg text-[#232F2F] no-underline"
                >เรือน เอกรุจต์ - Ruen Ekkarut</a
              ></p>
            </div>
            <div class="md:flex items-center mb-2">
              <i class="fa-solid fa-phone text-3xl mr-3"></i>
              <p class="text-lg">084-587-9935</p>
            </div>
            <div class="md:flex items-center mb-2">
              <i class="fa-solid fa-location-pin text-3xl ml-1 mr-4"></i>
              <p class="text-lg">
                ชั้นล่าง JJ Mail 588 ถนน กำแพงเพชร 2 กรุงเทพมหานคร 10900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.607894968213!2d100.54591987596818!3d13.802494996115893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c14d7006243%3A0x4ef54f56a9bf403d!2z4LmA4LiI4LmA4LiI4Lih4Lit4Lil4Lil4LmM!5e0!3m2!1sth!2sth!4v1691495595014!5m2!1sth!2sth",
      faceBook: "https://www.facebook.com/ruenekkarut",
    };
  },
};
</script>

<style scoped>
</style>