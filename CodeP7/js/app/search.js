 class  Search{

    constructor(recipe){
        this.ingrediants =' '
        this.recipe = recipe
    }
   

     globalSearch(){
        const $recette = document.querySelector(".recette")
        const result_search = this.recipe;
        
        var buttonsearch = document.querySelector(".Recherche-Icone")
        const input = document.querySelector('.Recherche-Input');
        var filtre ='';
        buttonsearch.addEventListener('click', () => {
            //TODO commencer la recherche si tu as plus de 3 caracteres
            if (input.value.length > 2 ) {

                const input_search = input.value;
                //console.log(Search.globalSearch(result_search,Search.tabTag,Search.strSearch));
                // TODO ici compléter la recherche (sur les ingrédients ... description )
                var result_searchs = result_search.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                
                if (input !=' ') {
                    result_searchs.forEach((ingrediant) => { 
                        //console.log(ingrediant)
                        ingrediant.ingredients.forEach((filtre) => { 
                            //console.log(filtre)
                            if (filtre.unit) {
                                this.ingrediants += `<p><b>${filtre.ingredient}:</b> ${filtre.quantity } ${filtre.unit } </p>`;
                            }else if (!filtre.quantity){
                                this.ingrediants += `<p><b>${filtre.ingredient}</b>`
                            }else{
                                this.ingrediants += `<p><b>${filtre.ingredient}:</b> ${filtre.quantity }</p>`
                            }
                        });
                    });
                    filtre = '';
                    result_searchs.forEach(resultfiltre =>
                            
                        filtre += 
                        `
                        <div class="filtre_card_wrapper">
                            <div class="img"><img src="#" alt=""/></div>
                                <div class="titre">
                                    <h2> ${resultfiltre.name} </h2>
                                    <p><i class="fa-regular fa-clock"></i>${resultfiltre.time} min</p>
                                </div>
                                <div class ="body_recette">
                                    <div class="ingredient">
                                        ${this.ingrediants} 
                                    </div>
                                    <p class ="description"> ${resultfiltre.description}</p> 
                                </div>
                            </div>   
                        </div>                                
                        `)
                            
                    $recette.innerHTML = filtre;

                   
                }
                if (result_searchs.length == 0) {
                    var error ='';
                    error = `
                    <div id= "error">
                        <p>Aucune recette ne correspond à votre critère</p>
                    </div>
                        `

                    $recette.innerHTML = error;
                }
            }else if (input.value.length < 3){

                filtre = '';
                $recette.innerHTML ='';
               
                this.recipe.forEach((recipe) => {                    
                    const pCard = new Recette_card(recipe);
                    const pCardElement = pCard.createrecette();
                    $recette.appendChild(pCardElement)  
                
                });
            }  
        })
        //TODO return un array de recette       
    }


    addTagSearch(){
        // const $recette = document.querySelector(".recette")
        // var tag ='';
        // document.querySelectorAll('.items').forEach(item1 => {
        //     item1.addEventListener('click', () => {
        //         console.log(this.recipe)
        //         const result_tag = this.recipe.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));

        //         result_tag.forEach((ingrediant) => { 
        //             //console.log(ingrediant)
        //             ingrediant.ingredients.forEach((filtre) => { 
        //                 console.log(filtre)
        //                 if (filtre.unit) {
        //                     this.ingrediants += `<p><b>${filtre.ingredient}:</b> ${filtre.quantity } ${filtre.unit } </p>`;
        //                 }else if (!filtre.quantity){
        //                     this.ingrediants += `<p><b>${filtre.ingredient}</b>`
        //                 }else{
        //                     this.ingrediants += `<p><b>${filtre.ingredient}:</b> ${filtre.quantity }</p>`
        //                 }
        //             });
        //         });
        //         result_tag.forEach(resulttag =>
                            
        //             tag += 
        //             `
        //             <div class="filtre_card_wrapper">
        //                 <div class="img"><img src="#" alt=""/></div>
        //                     <div class="titre">
        //                         <h2> ${resulttag.name} </h2>
        //                         <p><i class="fa-regular fa-clock"></i>${resulttag.time} min</p>
        //                     </div>
        //                     <div class ="body_recette">
        //                         <div class="ingredient">
        //                             ${this.ingrediants} 
        //                         </div>
        //                         <p class ="description"> ${resulttag.description}</p> 
        //                     </div>
        //                 </div>   
        //             </div>                                
        //             `)
                        
        //         $recette.innerHTML = tag;
        //         //this.deletetag();
               
        //     })
        // })
    }

    removeTagSearch(){
        
    }


}

