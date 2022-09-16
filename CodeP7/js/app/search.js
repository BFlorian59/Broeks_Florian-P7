class  Search{

    constructor(recipe){
        this.ingrediants =' ';
        this.recipe = recipe;
        this.tagingre = [];
        this.tagapp = [];
        this.tagust = [];
        this.tag =[];
        this.tabtag = [];
        this.resultset =[];
    }
   

    // recherche mot clé 
    globalSearch(){
        
        const $recette = document.querySelector(".recette");
        var lstrecipe = this.recipe;
       
        var buttonsearch = document.querySelector(".Recherche-Icone");
        const input = document.querySelector('.Recherche-Input');
        
        buttonsearch.addEventListener('click', () => {

            //condition tag selectionné
            if(this.tabtag.length > 0){
                lstrecipe =  this.addTagSearch();
            }

            // commencer la recherche si tu as plus de 3 caracteres
            if (input.value.length > 2 ) {
                const input_search = input.value;
                //compléter la recherche (sur les ingrédients ... description )
                let tabingreselcted = [];
                
                let resultIngre = getLstRecipes(lstrecipe)
                console.log(resultIngre)
                var tabIngrediants_filtre =  resultIngre.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                console.log(tabIngrediants_filtre)

                // console.log("result après add Carotte tab ingredient ");
                // console.log(tabIngrediants_filtre);
                let lstRecipesSelected = [];

                for (let index = 0; index < tabIngrediants_filtre.length; index++) {
                    const element = tabIngrediants_filtre[index];
                    for (let i = 0; i < element.id.length; i++) {
                        const id = element.id[i];
                        lstRecipesSelected.push(this.recipe[id-1]);
                    }
                    
                }

                for (let index = 0; index < lstRecipesSelected.length; index++) {
                    const element = lstRecipesSelected[index];
                    tabingreselcted.push(element);
                    
                }
            
                var result_searchs = lstrecipe.filter(search => search.name.toLocaleLowerCase().includes(input_search)||search.description.toLocaleLowerCase().includes(input_search));
                console.log(tabingreselcted)
                const result = result_searchs.concat(tabingreselcted);
                this.resultset = [...new Set(result)];

                const search = new Resultsearch(this.recipe, this.resultset);
                search.displaysearch();
                console.log(this.resultset)
                if (this.resultset.length == 0) {
                    var error ='';
                    error = `
                    <div id= "error">
                        <p>Aucune recette ne correspond à votre critère</p>
                    </div>
                        `

                    $recette.innerHTML = error;
                }
            }else if (input.value.length < 3){

                $recette.innerHTML ='';
               
                for (let index = 0; index < this.recipe.length; index++) {
                    const recipe = this.recipe[index];
                    const pCard = new Recette_card(recipe);
                    const pCardElement = pCard.createrecette();
                    $recette.appendChild(pCardElement); 
                }
            }  
            
        });    
        function getLstRecipes( lstRecipes){
            let tabIngrediants= [];
            for (let index = 0; index < lstRecipes.length; index++) {
                const recipe = lstRecipes[index];

                for (let i = 0; i < recipe.ingredients.length; i++) {
                    const ingre = recipe.ingredients[i];
                    
                    let recette = [];
                    //console.log(ingre);
                    recette = tabIngrediants.find(x => x.ingredient == ingre.ingredient);
                    //console.log(tabIngrediants)
                    // for (let index = 0; index < tabIngrediants.length; index++) {

                    //     const element = tabIngrediants[index];
                    //     if (element.ingredient == ingre.ingredient) {                              
                    //          recette = element;
                    //     }
                    //     return recette;
                    // }

                    if(recette != undefined){
                    //TODO ici vérifier si l'id de la recette n'est pas déjà ajouté.
                        
                        // if (!recette.id == false) {
                        //     recette.id.push(recipe.id);
                        //     console.log(recette.id);
                        // }
                        
                        if(!recette.id.includes(recipe.id)){ 
                            recette.id.push(recipe.id);
                        }
                        tabIngrediants.slice(tabIngrediants.indexOf(recette),1);
                        //console.log(tabIngrediants)
                        // for (let index = 0; index < tabIngrediants.length; index++) {
                            
                        //     const element = tabIngrediants[index];
                        //     if (element == tabIngrediants.indexOf(recette),1) {
                                
                        //         console.log(el)
                        //     }
                        // }
                        
                    }else{              
                        recette = {
                            ingredient: ingre.ingredient,
                            id: [recipe.id]
                        };
                    }
                    tabIngrediants.push(recette);

                }
                
            }
            return tabIngrediants;
        }
    }
   

    //recherche par tag
    addTagSearch(){
        const $recette = document.querySelector(".recette");
        const tag = this.tagingre.concat(this.tagapp).concat(this.tagust);
        this.tabtag = [...new Set(tag)];
        var result_tag = [];  
        
        for (let index = 0; index < this.recipe.length; index++) {
            const recipe = this.recipe[index];

            for (let index = 0; index < this.tabtag.length; index++) {
                const tabtag = this.tabtag[index];
                if (tabtag  ==recipe.appliance ) {
                    
                    result_tag.push(recipe);
                }  
            }

            // if(this.tabtag.includes(recipe.appliance)){
            //     result_tag.push(recipe);  
            // }

            for (let i = 0; i < recipe.ustensils.length; i++) {
                const ustensil = recipe.ustensils[i];

                for (let index = 0; index < this.tabtag.length; index++) {
                    const tabtag = this.tabtag[index];
                    if (tabtag  == ustensil) {
                        
                        result_tag.push(recipe);
                    }
                    
                }
            }

            for (let i = 0; i < recipe.ingredients.length; i++) {
                const ingredient = recipe.ingredients[i];

                for (let index = 0; index < this.tabtag.length; index++) {
                    const tabtag = this.tabtag[index];
                    if (tabtag  == ingredient.ingredient) {
                        
                        result_tag.push(recipe);
                    }
                }
            }
            
        }

        // for (let index = 0; index < result_tag.length; index++) {
           
        //     const recette = result_tag[index];
        //     if(result_tag.filter(tag => tag==recette).length == this.tabtag.length){
        //         result_tag.push(recette)
        //         console.log(result_tag)
        //         return recette;

        //     }
        // }


        result_tag = result_tag.map(recette =>{
            

            console.log(this.tabtag.length)
            if(result_tag.filter(tag => tag==recette).length == this.tabtag.length){
                return recette;

            }
            
        });     
       

        result_tag = result_tag.filter(tag => tag !== undefined);
        result_tag = [...new Set(result_tag)];

        var tabtag = this.tabtag;
        const searchtag = new Resultsearch();
        searchtag.displaysearchtag(result_tag,$recette, tabtag);
        
        return result_tag;
    }

    //appeler les méthodes et mettre les tags dans un tableau quand on appuie sur les tags
    addEventtag (){

        for (let index = 0; index < document.querySelectorAll('.items').length; index++) {
            const ingredient = document.querySelectorAll('.items')[index];
            ingredient.addEventListener('click', () => {
                this.tagingre.push(ingredient.innerHTML);
                this.removeTagSearch();
                this.addTagSearch();
                this.globalSearch();
            });
        }
        
        for (let index = 0; index < document.querySelectorAll('.items3').length; index++) {
            const appliance = document.querySelectorAll('.items3')[index];
            appliance.addEventListener('click', () => {
                this.tagapp.push(appliance.innerHTML);
                this.removeTagSearch();
                this.addTagSearch();
                this.globalSearch();
            });
        }
        
        for (let index = 0; index < document.querySelectorAll('.items2').length; index++) {
            const ustensils = document.querySelectorAll('.items2')[index];
            ustensils.addEventListener('click', () => {
                this.tagust.push(ustensils.innerHTML);
                this.removeTagSearch();
                this.addTagSearch();
                this.globalSearch();
            });
        }

        var Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            for (let index = 0; index < document.querySelectorAll('.items').length; index++) {
                const ingredient = document.querySelectorAll('.items')[index];
                ingredient.addEventListener('click', () => {
                    this.tagingre.push(ingredient.innerHTML);
                    this.removeTagSearch();
                    this.addTagSearch();
                    this.globalSearch();
                });
            }
    
        });

        const Appareilinput = document.querySelector('.Recherche-Appareil');
        Appareilinput.addEventListener('keyup', () =>{
            for (let index = 0; index < document.querySelectorAll('.items3').length; index++) {
                const appliance = document.querySelectorAll('.items3')[index];
                appliance.addEventListener('click', () => {
                    this.tagapp.push(appliance.innerHTML);
                    this.removeTagSearch();
                    this.addTagSearch();
                    this.globalSearch();
                });
            }
    
        });

        const Ustensilsinput = document.querySelector('.Recherche-Ustensil');
        Ustensilsinput.addEventListener('keyup', () =>{
            for (let index = 0; index < document.querySelectorAll('.items2').length; index++) {
                const ustensils = document.querySelectorAll('.items2')[index];
                ustensils.addEventListener('click', () => {
                    this.tagust.push(ustensils.innerHTML);
                    this.removeTagSearch();
                    this.addTagSearch();
                    this.globalSearch();
                });
            }
    
        });      
    }


    // enlever les tags
    removeTagSearch(){

        const $recette = document.querySelector(".recette")
        document.querySelectorAll('.liste_tag').forEach(ingredients => {
            ingredients.addEventListener('click', () => {
                ingredients.remove();      
            });
        });

        
        for (let index = 0; index < document.querySelectorAll('.liste_tag b').length; index++) {
            const ingredients = document.querySelectorAll('.liste_tag b')[index];
            ingredients.addEventListener('click', () => {
                this.tagingre.splice(this.tagingre.indexOf(ingredients.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    for (let index = 0; index < this.recipe.length; index++) {
                        const recipe = this.recipe[index];
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    }                        
                } 
                              
            });
        } 
        

        for (let index = 0; index < document.querySelectorAll('.liste_tag2 ').length; index++) {
            const ustensils = document.querySelectorAll('.liste_tag2')[index];
            ustensils.addEventListener('click', () => {
                ustensils.remove();      
            });
            
        }

        for (let index = 0; index <  document.querySelectorAll('.liste_tag2 b').length; index++) {
            const ustensils =  document.querySelectorAll('.liste_tag2 b')[index];
            ustensils.addEventListener('click', () => {
                this.tagust.splice(this.tagust.indexOf(ustensils.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    for (let index = 0; index < this.recipe.length; index++) {
                        const recipe = this.recipe[index];
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    }                        
                } 
                              
            });
        } 

        for (let index = 0; index < document.querySelectorAll('.liste_tag3 ').length; index++) {
            const appliance = document.querySelectorAll('.liste_tag3 ')[index];
            appliance.addEventListener('click', () => {
                appliance.remove();      
            });
            
        }

        for (let index = 0; index <  document.querySelectorAll('.liste_tag3 ').length; index++) {
            const appliance =  document.querySelectorAll('.liste_tag3 ')[index];
            appliance.addEventListener('click', () => {
                this.tagapp.splice(this.tagapp.indexOf(appliance.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    for (let index = 0; index < this.recipe.length; index++) {
                        const recipe = this.recipe[index];
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    }                        
                } 
                              
            });
        }        
    }
}

