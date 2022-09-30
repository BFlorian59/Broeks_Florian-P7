class Resultsearch{

    constructor(recipe, tabsearchsset, tabtag, searchtag, $recette){
        this.recipe = recipe;
        this.tabsearchsset = tabsearchsset;
        this.tabtag = tabtag;
        this.searchtag = searchtag;
        this.$recette = $recette
    }

     // permet d'afficher les recettes filtrer par la barre de recherche dans le html
    displaysearch(){



        var filtre ='';
        const $recette = document.querySelector(".recette");
        
        this.tabsearchsset.forEach((filtres) => {
            this.ingrediants = '';
            filtres.ingredients.forEach((ingre) => { 
                
                if (ingre.unit) {
                    this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity } ${ingre.unit } </p>`;
                }else if (!ingre.quantity){
                    this.ingrediants += `<p><b>${ingre.ingredient}</b>`
                }else{
                    this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity }</p>`
                }
            });
            filtre += 
            `
                <div class="filtre_card_wrapper">
                    <div class="img"><img src="#" alt=""/></div>
                        <div class="titre">
                            <h2> ${filtres.name} </h2>
                            <p><i class="fa-regular fa-clock"></i>${filtres.time} min</p>
                        </div>
                        <div class ="body_recette">
                            <div class="ingredient">
                            ${this.ingrediants}
                            </div>
                            <p class ="description"> ${filtres.description}</p> 
                        </div>
                    </div>   
                </div>                                
            `
        });

        $recette.innerHTML = filtre;

    }  


    // permet d'afficher les recettes filtrer selon les tags sélectionnés dans le html
    displaysearchtag(result_tag, $recette, tabtag){
        var searchtag ='';
        if(result_tag.length == 0 && tabtag.length > 1){
            var error ='';
            error = `
            <div id= "error">
                <p>Aucune recette ne correspond à votre critère</p>
            </div>
            `
            $recette.innerHTML = error;
        }

        if(result_tag.length > 0 && tabtag.length > 0 ){
            result_tag.forEach((recipe)=>{
                this.ingrediants = '';
                recipe.ingredients.forEach((ingre) => { 
                    if (ingre.unit) {
                        this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity } ${ingre.unit } </p>`;
                    }else if (!ingre.quantity){
                        this.ingrediants += `<p><b>${ingre.ingredient}</b>`
                    }else{
                        this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity }</p>`
                    }
                });
                                        
                searchtag += 
                `
                    <div class="filtre_card_wrapper">
                        <div class="img"><img src="#" alt=""/></div>
                            <div class="titre">
                                <h2> ${recipe.name} </h2>
                                <p><i class="fa-regular fa-clock"></i>${recipe.time} min</p>
                            </div>
                            <div class ="body_recette">
                                <div class="ingredient">
                                    ${this.ingrediants}
                                </div>
                                <p class ="description"> ${recipe.description}</p> 
                            </div>
                        </div>   
                    </div>                                
                ` 
            
            })
            $recette.innerHTML = searchtag;
            
        }

        if (result_tag.length < 1 && tabtag.length < 1) {
            $recette.innerHTML = ' ';
        }
        
    }   
   
    
}