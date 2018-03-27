<template>
    <div>
      
        <ul class="list">
            <li @click="getDetail(obj.id)" class="movie" v-for="obj in movie" :key="obj.id" >
                    <div class="movie-img">
                        <img :src="obj.img" alt="">
                    </div>
                    <div class="movie-info">
                       <div class="movie-info-title">
                          <h5 class="nm">{{obj.nm}}</h5>
                        <p class="movie-info-score">评分：{{obj.sc}}</p>
                       </div>
                       <p class="cat">{{obj.cat}}</p>
                        <p class="movie-info-detail">主演：{{obj.star}}</p>
                        <p class="movie-info-detail">{{obj.showInfo}}</p>
                    </div>
            </li>
            <span class=" bottom" v-show="true">{{show}}</span>
        </ul>
    </div>
</template>

<script>
import CommonHeader from "@/components/common/Header";
import CommonFooter from "@/components/common/Footer";
import axios from "axios";
export default {
  data() {
    return {
      movie: [],
      isShow: true,
      show:'下拉加载'
    };
  },
  methods: {
    getData() {
      axios
        .get("/static/maoyan.json")
        .then(res => {
          let mvData=res.data.data.movies
          this.movie =this.movie.concat(mvData.slice(this.movie.length, this.movie.length+10)) ;
          this.isShow=false;
          this.show='下拉加载';
        })
        .catch(() => {
          alert("error");
        });
    },
    getDetail(movidId){
      this.$router.push(`/MovieDetail/${movidId}`)
    }
  },
  created() {
    this.getData();
  },
  mounted () {
    window.onscroll=()=>{
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
      let clientHeight= document.documentElement.clientHeight// 视图高度     
      let scrollHeight = document.documentElement.scrollHeight;
      if(scrollTop+clientHeight>=scrollHeight-1){
        this.isShow=true;
        this.show='图片加载中...'
         setTimeout(() => {
            this.getData();
         }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.list {
  margin: 1rem 0;
  margin-bottom: 1rem;
}
.movie {
  display: flex;
  /* height: 3rem; */
  padding: 0.1rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  flex: 1;
  width: 0;
  margin: 0.1rem;

}
.movie-img img{
   /* width: 50px; */
}
.movie-info {
  flex: 4;
  width: 0;
  height: 30px;
}
.nm {
  font-weight: bolder;
  float: left;
}
.bottom{
   height: 1rem;
  text-align: center;
  display: block; 
  line-height: 1rem;
  background-color: #ccc;
  opacity: 0.5;
 width: 100%;

}
.loading {
  position: fixed;
  bottom: 1rem;
}
.movie-info-detail{
  color:rgb(112, 112, 112);
  font-size: 13px;
  max-width: 160px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.movie-info-score{
  float:right;
color:#FFB400;
}
.movie-info-title{
 overflow:hidden;
}
</style>
