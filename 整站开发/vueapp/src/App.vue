<template>
  <div id="app">
    <common-header @change="cgTab" :bgColor="indexC">
      <span slot="title">{{indexT}}</span>
    </common-header>
    <router-view/>
    <common-footer @change="cgTab" :bgColor="indexC"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
import { defaultInstance } from '../../../vue/vueCli/node_modules/chromedriver/lib/chromedriver';

export default {
  components:{
    CommonHeader,
    CommonFooter
  }, 
  methods:{
    cgTab(name){
      switch(name){
        case 'Movie':{
          this.indexC="rgb(33, 150, 243)";
          break;
        }
        case 'Music':{
          this.indexC="rgb(0, 150, 136)";
          break;
        }
        case 'Book':{
          this.indexC="rgb(121, 85, 72)";
          break;
        }
        case 'Picture':{
          this.indexC="rgb(63, 81, 181)";
          break;
        }
        default:
        {this.indexC="rgb(33, 150, 243)";}
      }this.indexT=name;
 console.log(name);
    }
 } ,
  data () {
        return {
            list:[{
                name:'电影',
                title:'Movie',
                bgC:"rgb(33, 150, 243)",
                className:'selected'
            },{
                name:'音乐',
                title:'Music',
                bgC:"rgb(0, 150, 136)",
                className:''
            },{
                name:'书籍',
                title:'Book',
                bgC:"rgb(121, 85, 72)",
                className:''
            },{
                name:'图片',
                title:'Picture',
                bgC:"rgb(63, 81, 181)",
                className:''
            }],
            indexT:'Movie',
            indexC:"rgb(33, 150, 243)"
        }
    },
  name: 'App'
}

</script>

<style>

</style>
