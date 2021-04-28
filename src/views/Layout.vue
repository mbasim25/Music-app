<template >
   <div class="flex flex-col lg:flex lg:h-screen overflow-hidden">
       <div class="hidden bg-gray-400 lg:h-8 xl:h-24 lg:flex ">
           <div class="div1 hidden xl:inline-flex xl:w-0 2xl:flex-grow"></div>
           <div class="div1 flex-1 xl:flex-grow 2xl:flex-none 2xl:w-236"></div>
           <div class="div3 lg:w-8 xl:w-12 xl:flex-none "></div>
           <div class="div3 w-72 flex-none 2xl:flex-1"></div>
       </div>
       <div class="flex flex-col lg:flex lg:flex-1 lg:flex-row overflow-hidden ">
           <div class="hidden lg:inline-flex div1 lg:w-8 xl:w-12 lg:flex-none 2xl:flex-grow"></div>
           <div class="flex flex-col div1 lg:flex-1 lg:flex lg:flex-row 2xl:flex-none 2xl:w-368  ">
               <div class=" justify-center gap-2 p-3 flex div2 lg:w-16 xl:w-72 lg:flex-none lg:rounded-l-lg lg:flex lg:flex-col lg:justify-start  xl:pl-10 xl:pt-8  xl:gap-6">
                   <div class="hidden fff text-2xl xl:inline-flex pt-3 xl:pb-4 items-center"> 
                       <svg class="w-10 h-10 stroke-current text-gray-100 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg><p class="ml-2 font-bold ">DISCOVERY</p>
                    </div>
                   <ul class=" fff text-xl font-bold xl:ml-2  lg:flex lg:flex-col lg:justify-between"><p class="hidden xl:inline-flex">EXPLORE</p> 
                       <router-link to="/for-you" class="mx-4 md:mx-8 lg:mx-1 lg:my-3 group inline-flex items-center text-base font-medium  xl:ml-4 xl:mt-6"> 
                           <svg class=" text-gray-300 group-hover:text-white w-6 h-6 lg:w-7 lg:h-7 xl:w-5 xl:h-5 xl:ml-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                           </svg><p class="hidden xl:inline-flex text-gray-200 group-hover:text-white ml-2">Charts</p> </router-link>
                       <router-link to="/search" class="mx-4 md:mx-8 lg:mx-1 lg:my-4 group inline-flex items-center text-base font-medium xl:ml-4 xl:mt-2"> 
                          <svg class="text-gray-300 group-hover:text-white w-6 h-6 lg:w-7 lg:h-7 xl:w-5 xl:h-5 xl:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                           </svg><p class="hidden xl:inline-flex text-gray-200 group-hover:text-white ml-2">Search</p> </router-link>
                       <!-- <router-link to="/favs" class="mx-4 md:mx-8 lg:mx-1 lg:my-4 group inline-flex items-center text-base font-medium xl:ml-4 xl:mt-2"> 
                           <svg class="text-gray-300 group-hover:text-white w-6 h-6 lg:w-7 lg:h-7 xl:w-5 xl:h-5 xl:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg><p class="hidden xl:inline-flex text-gray-200 group-hover:text-white ml-2">Favs</p> </router-link> -->
                   </ul>
                   <ul class="  fff text-xl font-bold xl:ml-2 lg:flex lg:flex-col  lg:justify-between"><p class="hidden xl:inline-flex">SERVICES</p> 
                       <router-link to="#" class="mx-4 md:mx-8 lg:mx-1 lg:my-4 group inline-flex items-center text-base font-medium xl:ml-4 xl:mt-6 "> 
                           <svg class="text-gray-300 group-hover:text-white w-6 h-6 lg:w-7 lg:h-7 xl:w-5 xl:h-5 xl:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                           </svg><p class="hidden xl:inline-flex text-gray-200 group-hover:text-white ml-2">Get the App</p> </router-link>
                       <router-link to="#" class="mx-4 md:mx-8 lg:mx-1 lg:my-4 group inline-flex items-center text-base font-medium xl:ml-4 xl:mt-2 "> 
                           <svg class="text-gray-300 group-hover:text-white w-6 h-6 lg:w-7 lg:h-7 xl:w-5 xl:h-5 xl:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg><p class="hidden xl:inline-flex text-gray-200 group-hover:text-white ml-2">Premium</p> </router-link>
                       <router-link to="#" class="mx-4 md:mx-8 lg:mx-1 lg:my-4 group inline-flex items-center text-base font-medium xl:ml-4 xl:mt-2 "> 
                           <svg class="text-gray-300 group-hover:text-white w-6 h-6 lg:w-7 lg:h-7 xl:w-5 xl:h-5 xl:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                           </svg><p class="hidden xl:inline-flex text-gray-200 group-hover:text-white ml-2">Settings</p> </router-link >
                   </ul>
               </div>
            
                <div class="  div3 min-h-screen lg:min-h-0 lg:flex-1 lg:max-w-full xl:min-w-min xl:max-w-4xl overflow-y-auto sidebar-music"><router-view class="" /></div>
            
               
               <div class="hidden div1 lg:w-72 xl:w-72 lg:inline-flex lg:flex-none "></div>
           </div>
           <div class="hidden div3 lg:w-8 xl:w-12 lg:inline-flex lg:flex-none xl:min-w-min 2xl:min-w-min 2xl:flex-grow "></div>
       </div>
      <div class="hidden bg-gray-400 lg:h-8 xl:h-24 lg:flex">
           <div class="div1 hidden xl:inline-flex xl:w-0 2xl:flex-grow"></div>
           <div class="div1 flex-1 xl:flex-grow 2xl:flex-none 2xl:w-236"></div>
            <div class="div3 lg:w-8 xl:w-12 xl:flex-none "></div>
           <div class="div3 w-72 flex-none 2xl:flex-1"></div>
       </div>
   </div>
</template>


<script>
export default {
   name: "Layout",
  
}
</script>


<style >
.div1{
    background-color: #db1d40 !important;
}
.div2{
     background-color: #7e2236 !important;
}
.div3{
     background-color: #232323 !important;
}
.fff{
     color: #fff !important;
}
.sidebar-music::-webkit-scrollbar
{
    width:4px;
    background-color: #232323;
}
.sidebar-music::-webkit-scrollbar-thumb
{
    border-radius:6px;
    background-color: #f0e6e8;
}
.sidebar-content::-webkit-scrollbar
{
    width:8px;
    background-color: #181818;
}
.sidebar-content::-webkit-scrollbar-thumb
{
    border-radius:8px;
    background-color: #121212;
}
</style>