<template>
  <el-carousel :interval="1000000" type="card" :height="itemHeight" arrow="always">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img class="el-carousel-item-img" :src="item.img"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import img1 from "./../../assets/image/1.jpg";
import img2 from "./../../assets/image/2.jpg";
import img3 from "./../../assets/image/3.jpg";
import img4 from "./../../assets/image/4.jpg";
import img5 from "./../../assets/image/5.jpg";
import img6 from "./../../assets/image/6.jpg";
import img7 from "./../../assets/image/7.jpg";
import img8 from "./../../assets/image/8.jpg";
import img9 from "./../../assets/image/9.jpg";
import img10 from "./../../assets/image/10.jpg";
import img11 from "./../../assets/image/11.jpg";
import img12 from "./../../assets/image/12.jpg";
import img13 from "./../../assets/image/13.jpg";
import img14 from "./../../assets/image/14.jpg";
import img15 from "./../../assets/image/15.jpg";
var imgList = [
  { img: img1},
  { img: img2},
  { img: img3},
  { img: img4},
  { img: img5},
  { img: img6},
  { img: img7},
  { img: img8},
  { img: img9},
  { img: img10},
  { img: img11},
  { img: img12},
  { img: img13},
  { img: img14},
  { img: img15}
];
import $ from 'jquery'
export default {
  name:'notable',
  data() {
    return {
      imgList: imgList,
      itemHeight:'300px',
      itemWidth: ''
    };
  },
  mounted(){
    this.itemWidth=$('.el-carousel-item-img')[0].width
    console.log($('.el-carousel-item-img')[0].width)
    console.log(this.itemWidth)
  },
  computed:{
    itemHeight:function(){
      console.log(this.itemWidth*2/3)
      return this.itemWidth*9/16+'px'
    }
  }
}
</script>
<style>
@import "./../../css/home/notable.scss";
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>