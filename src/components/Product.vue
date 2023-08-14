<template>
  <div>
    <div class="container mx-auto font-Noto-Sans-Thai text-[#232F2F] pb-12 duration-700 ease-in">
      <h2 class="font-bold text-center mb-12 text-[#DBB461] pt-4">สินค้า</h2>
      <!-- สินค้า -->
      <div class="grid xl:grid-cols-4 md:grid-cols-3 gap-3  justify-center ">
        <div v-for="item in products" :key="item.name" class="">
        <div class="max-w-sm cursor-pointer  rounded overflow-hidden hover:shadow-[#DBB461] shadow-md bg-[#DBB461] hover:bg-[#DBB444]">
          <img
            class="w-full"
            :src="item.image"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-md mb-2 ">{{ item.name }}</div>
            <div class="flex  justify-between items-center lg:text-[14px] text-[12px]">
                <span>{{ item.price }}</span>
                <button @click="showData()" class="p-1   hover:bg-[#232F2F] hover:text-[#DBB461] border border-[#232F2F] rounded shadow">{{ buttonShowHide() }}รายละเอียด</button>
            </div>
            <div v-show="showDiv">
                <p class="text-gray-700 lg:text-[14px] text-[12px] pt-2 text-start">
              {{ item.details }}
            </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      products: [
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ แพคกระเป๋าถือซาติน",
          category:"",
          image:
            "https://lh5.googleusercontent.com/IBLJE28vvaQna26iFlP5e-TEL4Ikv47X2CocttIa56mJNmX_BZnuGv1d_B5FX8GAiyKRMTP3aKwQ09yi8uFKHNcqyF5_XGz0i_YRGjCJwQK6Akw0hPzX2_GX4OK8djqh5A=w1280",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ผ้าแพรเกรด A แพคกล่องเมทัลลิค",
          category:"",
          image:
            "https://lh5.googleusercontent.com/DHXucTYzhX4zUucxoW7LciJJubupZufjXioD8pRxkTs_UDmUnBXZEFTbqCTqNs7m587iio4X5cn80baGdcJtbg3MMI-HZVlzM1iwHgcz3Jv7tBxhY-xKn_HfzOrnZQfMbw=w1280",
          price: "ชุดละ 140 บาท",
          details:
            "ตกแต่งพร้อมแจก มีสีกล่องสีผ้าให้เลือกอีกมากมาย ผ้าขนาด 5 ฟุต เนื้อดี",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ",
          category:"",
          image:
            "https://lh5.googleusercontent.com/IBLJE28vvaQna26iFlP5e-TEL4Ikv47X2CocttIa56mJNmX_BZnuGv1d_B5FX8GAiyKRMTP3aKwQ09yi8uFKHNcqyF5_XGz0i_YRGjCJwQK6Akw0hPzX2_GX4OK8djqh5A=w1280",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ",
          category:"",
          image:
            "https://lh5.googleusercontent.com/IBLJE28vvaQna26iFlP5e-TEL4Ikv47X2CocttIa56mJNmX_BZnuGv1d_B5FX8GAiyKRMTP3aKwQ09yi8uFKHNcqyF5_XGz0i_YRGjCJwQK6Akw0hPzX2_GX4OK8djqh5A=w1280",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ",
          category:"",
          image:
            "https://lh5.googleusercontent.com/IBLJE28vvaQna26iFlP5e-TEL4Ikv47X2CocttIa56mJNmX_BZnuGv1d_B5FX8GAiyKRMTP3aKwQ09yi8uFKHNcqyF5_XGz0i_YRGjCJwQK6Akw0hPzX2_GX4OK8djqh5A=w1280",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ",
          category:"",
          image:
            "https://lh5.googleusercontent.com/IBLJE28vvaQna26iFlP5e-TEL4Ikv47X2CocttIa56mJNmX_BZnuGv1d_B5FX8GAiyKRMTP3aKwQ09yi8uFKHNcqyF5_XGz0i_YRGjCJwQK6Akw0hPzX2_GX4OK8djqh5A=w1280",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
      ],
      showDiv: false
    };
  },
  methods:{
    showData(){
        this.showDiv =! this.showDiv
    },
    buttonShowHide(){
            return this.showDiv ? "ซ่อน" : "แสดง"
        }
  }
};
</script>

<style>
</style>