$(document).ready(
   /*$('#kuang').on('click', ()=>{
       $('#kuang1').slideToggle(600);
   }),*/

   $('#kuang').mouseenter( ()=>{
       $('#intro').slideDown(600);
   }),

   $('#intro').mouseleave( ()=>{
       $('#intro').slideUp(600);
   }),

   /*$('#stories').on('click', ()=>{
       $('#list').slideToggle(600);
   })*/

   $('#stories').mouseenter( ()=>{
       $('#list').slideDown(600);
   }),

   $('#list').mouseleave( ()=> {
       $('#list').slideUp(600);
   })
   

)