<template>
    <div>
        <!-- <a-player></a-player> -->
        <ul>
            <!-- <li v-for="data in musicData" :key=""></li> -->

        </ul>
    </div>
</template>

<script>
import aPlayer from 'vue-aplayer'
import axios from 'axios'
export default {
    components: {
        aPlayer
    },
    data () {
        return {
            musicList:[],
        }
    },
    created () {
        axios.get('static/musicdata.json').then((res)=>{
            this.musicData=res.data.musicData;
            console.log(res);
            console.log(this.musicData);

        })
    
    }
}
</script>

<style scoped>

</style>
