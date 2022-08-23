 class  Search{

    constructor(recipe){
        this.ingrediants =' ';
        this.recipe = recipe;
        this.tagingre = [];
        this.tagapp = [];
        this.tagust = [];
        this.tag =[];
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
                var result_searchs = result_search.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()) ||tabIngrediants.includes(input_search));
                console.log(tabIngrediants)
                result_searchs.forEach((filtres) => {
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
                    //console.log(filtre) 
                    
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
                    
                });
                   
                            
                    $recette.innerHTML = filtre;

                   
                
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


    removeTagSearch(){

    }


}

