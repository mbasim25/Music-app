<template>
  
    <div class="flex flex-col">
        <div class="py-10 px-12"><p class="text-2xl font-semibold text-gray-300">Top Of The Week</p></div>
        <div class=" flex-1 " v-for="index in favs" :key="index">
            
            <ul  v-for="index in index" :key="index">
                <li class="flex justify-between items-center py-4 px-10">
                    <div class="inline-flex items-center">
                        <img :src="index.album.cover" class=" h-20 w-20 rounded-full border-2">
                        <div class="flex flex-col ml-4 text-gray-300">
                            <span class="text-xl" >{{index.title}}</span>
                            <span >{{index.artist.name}}</span>
                        </div>
                    </div>
                   <!-- <svg class="text-gray-400  w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg> -->
                </li>
            </ul>
           
         
        </div>
    </div>
</template>

<script>
import * as ac from '../actions/api';
export default {
   name: "foru",
   
   data(){
       return{
           favs:[],
           }
   },
   created(){
        ac.getfavs().then(res => this.favs.push(res));
        return(this.favs)
       
    },
   
   
}
</script>