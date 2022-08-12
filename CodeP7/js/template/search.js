// class Search_card{
//     constructor(result, recipe)
//     {
//         this.result = result;
//         this.ingrediants_result = '';
//         this.recipe = recipe
      
//     }

//     filterrecette(){
//         console.log(this.result)        
//         this.result.ingredients.forEach((filter) => { 

//             if (filter.unit) {
//                 this.ingrediants_result += `<p><b>${filter.ingredient}:</b> ${filter.quantity } ${filter.unit } </p>`;
//             }else if (!filter.quantity){
//                 this.ingrediants_result += `<p><b>${filter.ingredient}</b>`
//             }else{
//                 this.ingrediants_result += `<p><b>${filter.ingredient}:</b> ${filter.quantity }</p>`
//             }
//         //this.ingrediantjb.push(ingrediant); 
//         //console.log(this.ingrediants)
        
//         });

//         const $filtre = document.createElement('div');
//         $filtre.classList.add('recette_card_wrapper');


//         const Card_filtre = `
//         <div class="img"><img src="#" alt=""/></div>
//         <div class="titre">
//             <h2> ${this.result.name} </h2>
//             <p><i class="fa-regular fa-clock"></i>${this.result.time} min</p>
//         </div>
//         <div class ="body_recette">
//             <div class="ingredient">
//                ${this.ingrediants_result} 
//             </div>
//             <p class ="description"> ${this.result.description}</p> 
//         </div>       
//         `
//         $filtre.innerHTML = Card_filtre
//         return $filtre;

//     }
// }