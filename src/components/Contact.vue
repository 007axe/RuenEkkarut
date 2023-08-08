<template>
  <div class="bg-[#DBB461] font-Noto-Sans-Thai py-5">
    <div class="container mx-auto flex flex-col justify-center">
    <h1 class="font-bold text-center text-4xl mb-5 text-[#282568] ">ติดต่อ</h1>
    <div class="flex justify-center">
        <iframe class="rounded-md w-[600px] md:h-[450px] h-[300px]" :src="map"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "Contact",
    data(){
        return{
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.607894968213!2d100.54591987596818!3d13.802494996115893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c14d7006243%3A0x4ef54f56a9bf403d!2z4LmA4LiI4LmA4LiI4Lih4Lit4Lil4Lil4LmM!5e0!3m2!1sth!2sth!4v1691495595014!5m2!1sth!2sth"
        }
    }
}
</script>

<style>

</style>