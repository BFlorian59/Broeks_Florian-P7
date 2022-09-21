class Resultsearch{

    constructor(recipe, resultset, tabtag, searchtag, $recette){
        this.recipe = recipe;
        this.resultset = resultset;
        this.tabtag = tabtag;
        this.searchtag = searchtag;
        this.$recette = $recette
    }

    displaysearch(){
        
        var filtre ='';
        const $recette = document.querySelector(".recette");
        
        for (let index = 0; index <  this.resultset.length; index++) {
            const filtres = this.resultset[index];
            this.ingrediants = ''; 
            for (let index = 0; index < filtres.ingredients.length; index++) {
                const ingre = filtres.ingredients[index];
                if (ingre.unit) {
                    this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity } ${ingre.unit } </p>`;
                }else if (!ingre.quantity){
                    this.ingrediants += `<p><b>${ingre.ingredient}</b>`
                }else{
                    this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity }</p>`
                }
            }
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
    
            //console.log(filtre)
        }
        $recette.innerHTML = filtre;

    }  


    displaysearchtag(result_tag, $recette, tabtag){
        console.log(result_tag)
        var searchtag ='';
        console.log(result_tag.length)
        if(result_tag.length == 0 && tabtag.length > 1){
            var error ='';
            error = `
            <div id= "error">
                <p>Aucune recette ne correspond à votre critère</p>
            </div>
            `
            $recette.innerHTML = error;
        }

        if(result_tag.length > 0 ){

            for (let index = 0; index < result_tag.length; index++) {
                const recipe = result_tag[index];
                this.ingrediants = '';
                for (let index = 0; index < recipe.ingredients.length; index++) {
                    const ingre = recipe.ingredients[index];
                    if (ingre.unit) {
                        this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity } ${ingre.unit } </p>`;
                    }else if (!ingre.quantity){
                        this.ingrediants += `<p><b>${ingre.ingredient}</b>`
                    }else{
                        this.ingrediants += `<p><b>${ingre.ingredient}:</b> ${ingre.quantity }</p>`
                    }
                    
                }
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
            }
            $recette.innerHTML = searchtag;
        }
        if (result_tag.length < 1 && tabtag.length < 1) {
            $recette.innerHTML = ' ';
        }
        
    }   
   
    
}