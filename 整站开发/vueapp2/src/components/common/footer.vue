<template>
    <ul class="footer" :style="{backgroundColor:indexC}">
        <common-header :bgColor=indexC>
             <span slot="title">
               {{indexT}}
             </span>
        </common-header>
            <li v-for=" obj in list" @click="cgTitle(obj)" >
                <div :class="obj.className">{{obj.name}}</div>
            </li>
        </ul>
</template>

<script>
import CommonHeader from '@/components/common/Header'
export default {
  props: ['bgColor'],
  components:{CommonHeader},
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
    methods:{
        cgTitle(obj){
            this.indexT=obj.title
            this.indexC=obj.bgC
            for(let item of this.list){
                item.className=''
            }
            obj.className='selected'
        }
    }
}
</script>

<style scoped>
.footer{
    height: 1rem;
    background: rgb(33, 150, 243);
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    width:100%;
    display: flex;
}
.footer li{
    flex-grow: 1;
    text-align: center;
}

.footer li div{
    color: #cccccc;
}
.footer li a.router-link-exact-active{
   
}
.footer .selected{
     color:white;
}
</style>
