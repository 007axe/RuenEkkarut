<template>

    <nav class="fixed top-0 z-10 bg-[#232F2F] w-full italic font-Noto-Sans-Thai ">
      <div class="container mx-auto">

      <div class=" lg:container mx-auto flex justify-between items-center md:px-0 px-3 py-3 duration-700 ease-in">
        <a href="#"><img :src="img1" alt="logo-home" class="md:w-20 w-14 rounded-full cursor-pointer" /></a>
        <div>
          <span @click="MenuOpen()" class=" absolute md:hidden right-4 top-4 cursor-pointer text-4xl text-[#DBB461]">
              <i :class="[openNav ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']"></i>
          </span>
          <ul :class="[openNav ? 'left-0' : 'left-[-100%]']" class=" md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:bg-inherit bg-[#232F2F] md:w-auto w-full top-20 duration-700 ease-in">
            <li class="md:ml-8 md:my-0 my-6 " v-for="link in Links">
              <a :href="link.link" class="text-xl text-[#DBB461] hover:border-solid hover:border hover:border-[#E0B860] hover:rounded-xl hover:shadow hover:shadow-[#E0B860] hover:px-2 ">{{link.name}}</a>
          </li>
          </ul>
        </div>
      </div>
  </div>
  </nav>
 
  </template>
  
  <script>
  
  export default {
    name: "Present",
    data() {
      return {
        img1: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/365561972_297776782788594_8388459294095850690_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=muwqL02ypFAAX9UEfM_&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCV7jvTDlilovBDdbqHtmoL_HMBlusXnNufPVMwjjs6bQ&oe=64DBF020",
        Links: [
          { name: "หน้าแรก", link: "#" },
          { name: "รีวิว", link: "#review" },
          { name: "สินค้า", link: "#porduct" },
          { name: "ติดต่อ", link: "#contact" },
          { name: "เกี่ยวกับ", link: "#" }
        ],
        openNav: false,
      }
    },
    methods:{
      MenuOpen(){
        this.openNav = !this.openNav
    }
  
    }
  };
  </script>
  
  <style>
  </style>