<template>
<!-- component -->
<!-- This is an example component -->
<div class="pt-8  ">
   <form @submit.prevent="HandleSearch" class="rounded-full mx-24 md:mx-60 min-w-min shadow-md">
          <input class="rounded-full w-full py-2 px-6 div4 text-white leading-tight focus:outline-none transform focus:scale-x-110 transition duration-300" type="text" placeholder="Search" v-model="search_query" >
  </form>
  <div class="py-10 px-12" ><p class="text-2xl font-semibold text-gray-300">Search results</p></div>
        <div class=" flex-1 " v-for="index in tracks_list" :key="index">
            
            <ul >
                <li class="flex justify-between items-center py-4 px-10">
                    <div class="inline-flex items-center">
                        <img :src="index.album.cover" class=" h-20 w-20 rounded-full border-2"> 
                        <div class="flex flex-col ml-4 text-gray-300">
                            <span class="text-xl" >{{index.title}}</span>
                            <span>{{index.artist.name}}</span>
                        </div>
                    </div>
                </li>
            </ul>
           
         
        </div>
</div>

    
</template>

<script>
import axios from 'axios';
import {ref} from "vue";
import env from "@/env.js"
export default {
   name: "search",
   setup(){
      const search_query = ref("");
      const tracks_list = ref([]);

         const request = axios.create({
            baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/',
            timeout : 30000,
            headers: {'X-RapidAPI-Key': env.API_KEY} 
         });

      const HandleSearch = async () => {
         tracks_list.value = await request(`search?q=${search_query.value}`)

            .then(response => response.data.data)
            .catch(error => console.log(error));
         
      }
     

     
      return{
         search_query,
         tracks_list,
         HandleSearch,
      }
   }
   
  
}
</script>











<style scoped>
.div4{
   background-color:#414141 !important;

}
</style>