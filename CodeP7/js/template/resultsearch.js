// class Resultsearch{

//     constructor(recipe, resultset, tagingre, tagapp, tagust, tag, tabtag){
//         this.recipe = recipe;
//         this.tagingre = tagingre;
//         this.tagapp = tagapp;
//         this.tagust = tagust;
//         this.tag =tag;
//         this.tabtag = tabtag;
//         this.resultset = resultset;
//     }

//     displaysearch(){
//         const seaerch = new Search(this.recipe, this.tagingre, this.tagapp, this.tagust, this.tag, this.tabtag, this.resultset)
//         seaerch.globalSearch()
//         console.log(this.resultset)
//         var filtre ='';
//         const $recette = document.querySelector(".recette");
        
//         this.resultset.forEach((filtres) => {
//             this.ingrediants = '';
//             filtres.ingredients.forEach((ingre) => { 
                
//                 if (ingre.unit) {
//                     this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity } ${ingre.unit } </p>`;
//                 }else if (!ingre.quantity){
//                     this.ingrediants += `<p><b>${ingre.ingredient}</b>`
//                 }else{
//                     this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity }</p>`
//                 }
//             });
//             filtre += 
//             `
//                 <div class="filtre_card_wrapper">
//                     <div class="img"><img src="#" alt=""/></div>
//                         <div class="titre">
//                             <h2> ${filtres.name} </h2>
//                             <p><i class="fa-regular fa-clock"></i>${filtres.time} min</p>
//                         </div>
//                         <div class ="body_recette">
//                             <div class="ingredient">
//                             ${this.ingrediants}
//                             </div>
//                             <p class ="description"> ${filtres.description}</p> 
//                         </div>
//                     </div>   
//                 </div>                                
//             `
    
//             //console.log(filtre)
//             $recette.innerHTML = filtre;
            
//         });
    
//     }  

    
// }