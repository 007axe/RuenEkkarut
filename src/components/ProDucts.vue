<template>
  <div id="porduct "  >
    <div  class="container mx-auto font-Noto-Sans-Thai text-[#232F2F] pb-12 duration-700 ease-in">
      <h2  class=" font-bold text-center text-[#DBB461] mt-4 mb-4" data-aos="fade-right" data-aos-duration="2000">สินค้า</h2>
      <!-- สินค้า -->
      <div class="grid xl:grid-cols-4 md:grid-cols-3 gap-3  justify-center ">
        <div v-for="(item, index) in products" :key="item.name" class="">
        <div data-aos="fade-right" data-aos-duration="2000" class="max-w-sm cursor-pointer  rounded overflow-hidden hover:shadow-[#DBB461] shadow-md bg-[#DBB461] hover:bg-[#DBB444]">
          <img
            class="w-full lg:h-[250px] h-[200px] object-cover"
            :src="item.image"
            alt="products image"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-sm mb-2 ">{{ item.name }}</div>
            <div class="flex  justify-between items-center lg:text-[14px] text-[12px]">
                <span>{{ item.price }}</span>
                <button @click="showData(index)" class="p-1   hover:bg-[#232F2F] hover:text-[#DBB461] border border-[#232F2F] rounded shadow">{{ buttonShowHide() }}รายละเอียด</button>
            </div>
            <div v-show="item.showDiv">
                <p class="text-gray-700 lg:text-[14px] text-[12px] pt-2 text-start md:w-full w-[234px]">
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
  name: "ProDucts",
  data() {
    return {
      
      products: [
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ แพคกระเป๋าถือซาติน",
          showDiv: false,
          category:"",
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356697317_286262403940032_1242141603487593017_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=WoX3bWjTgcMAX-ysFQn&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBvTkyFTTZxk7jfE8qX7uoGRF89-dvDF5p8PTnBDAaPQA&oe=64DE42B7",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ผ้าแพรเกรด A แพคกล่องเมทัลลิค",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356672169_288645957035010_5810116991155713572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=dSpo_m7_YHYAX_VZrhd&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfAE5CFXgyycObjfLosc51IHxNix-7Tk3KZgL7jINYQ9tg&oe=64DE4A3F",
          price: "ชุดละ 140 บาท",
          details:
            "ตกแต่งพร้อมแจก มีสีกล่องสีผ้าให้เลือกอีกมากมาย ผ้าขนาด 5 ฟุต เนื้อดี",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ แพคกระเป๋าถือซาติน",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356697317_286262403940032_1242141603487593017_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=WoX3bWjTgcMAX-ysFQn&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBvTkyFTTZxk7jfE8qX7uoGRF89-dvDF5p8PTnBDAaPQA&oe=64DE42B7",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ผ้าแพรเกรด A แพคกล่องเมทัลลิค",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356672169_288645957035010_5810116991155713572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=dSpo_m7_YHYAX_VZrhd&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfAE5CFXgyycObjfLosc51IHxNix-7Tk3KZgL7jINYQ9tg&oe=64DE4A3F",
          price: "ชุดละ 140 บาท",
          details:
            "ตกแต่งพร้อมแจก มีสีกล่องสีผ้าให้เลือกอีกมากมาย ผ้าขนาด 5 ฟุต เนื้อดี",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ แพคกระเป๋าถือซาติน",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356697317_286262403940032_1242141603487593017_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=WoX3bWjTgcMAX-ysFQn&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBvTkyFTTZxk7jfE8qX7uoGRF89-dvDF5p8PTnBDAaPQA&oe=64DE42B7",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ผ้าแพรเกรด A แพคกล่องเมทัลลิค",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356672169_288645957035010_5810116991155713572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=dSpo_m7_YHYAX_VZrhd&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfAE5CFXgyycObjfLosc51IHxNix-7Tk3KZgL7jINYQ9tg&oe=64DE4A3F",
          price: "ชุดละ 140 บาท",
          details:
            "ตกแต่งพร้อมแจก มีสีกล่องสีผ้าให้เลือกอีกมากมาย ผ้าขนาด 5 ฟุต เนื้อดี",
        },
        {
          name: "ชุดผ้าห่มฝ้ายทอมือ แพคกระเป๋าถือซาติน",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356697317_286262403940032_1242141603487593017_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=WoX3bWjTgcMAX-ysFQn&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBvTkyFTTZxk7jfE8qX7uoGRF89-dvDF5p8PTnBDAaPQA&oe=64DE42B7",
          price: "ชุดละ 250 บาท",
          details:
            "ผ้าห่มขนาด 100 x 200 cm ตัวกระเป๋ามีสีให้เลือกมากกว่า 20 โทนสี ตัวกระเป๋าใช้งานได้จริงเหมือนซื้อ 1 ได้ 2 ตกแต่งพร้อมแจกป้ายชื่อฟรี พร้อมออกแบบ รับประกันความสวย ถูกใจผู้รับอย่างแน่นอน",
        },
        {
          name: "ผ้าแพรเกรด A แพคกล่องเมทัลลิค",
          category:"",
          showDiv: false,
          image:
            "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/356672169_288645957035010_5810116991155713572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=dSpo_m7_YHYAX_VZrhd&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfAE5CFXgyycObjfLosc51IHxNix-7Tk3KZgL7jINYQ9tg&oe=64DE4A3F",
          price: "ชุดละ 140 บาท",
          details:
            "ตกแต่งพร้อมแจก มีสีกล่องสีผ้าให้เลือกอีกมากมาย ผ้าขนาด 5 ฟุต เนื้อดี",
        },
      ],

      
    };
  },
  
  methods:{
    showData(index){
        this.products[index].showDiv =  !this.products[index].showDiv
    },
    buttonShowHide(){
            return this.products.showDiv ? "ซ่อน" : "แสดง"
        }
  },
  
};
</script>

<style>
</style>