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
                var tabIngrediants_filtre =  resultIngre.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                console.log("result après add Carotte tab ingredient ");
                console.log(tabIngrediants_filtre);
                let lstRecipesSelected = [];
                // tabingreselcted => liste de recttes selectionnés sur la liste global par rapport aux ingrédiants
                tabIngrediants_filtre.forEach(element => {
                    element.id.forEach(id => {
                        lstRecipesSelected.push(this.recipe[id-1]);
                             
                    })           
                });
                lstRecipesSelected.forEach(element => { 
                    tabingreselcted.push(element);
                });
            
                var result_searchs = lstrecipe.filter(search => search.name.toLocaleLowerCase().includes(input_search)||search.description.toLocaleLowerCase().includes(input_search));

                const result = result_searchs.concat(tabingreselcted);
                this.resultset = [...new Set(result)];

                const search = new Resultsearch(this.recipe, this.resultset);
                search.displaysearch();
               
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
               
                this.recipe.forEach((recipe) => {                    
                    const pCard = new Recette_card(recipe);
                    const pCardElement = pCard.createrecette();
                    $recette.appendChild(pCardElement); 
                
                });
            }  
            
        });    
        function getLstRecipes( lstRecipes){
            let tabIngrediants= [];
            lstRecipes.forEach((recipe) => {
               
    
                let recette = null;
                recipe.ingredients.forEach(ingre => {   
                    recette = null;
                     recette = tabIngrediants.find(x => x.ingredient == ingre.ingredient);
                    //console.log(recette)
                    if(recette != undefined){
                        //TODO ici vérifier si l'id de la recette n'est pas déjà ajouté.
                        if(!recette.id.includes(recipe.id)){
                            recette.id.push(recipe.id);
                        }
    
                        tabIngrediants.slice(tabIngrediants.indexOf(recette),1);
                    }else{              
                    recette = {
                        ingredient: ingre.ingredient,
                        id: [recipe.id]
                    };
                    }
                    tabIngrediants.push(recette)
                    //console.log(tabIngrediants)
                });
            });
           
            return tabIngrediants;
        }
    }
   

    //recherche par tag
    addTagSearch(){
        const $recette = document.querySelector(".recette");
        const tag = this.tagingre.concat(this.tagapp).concat(this.tagust);
        this.tabtag = [...new Set(tag)];
        var result_tag = [];   

        this.recipe.forEach(recipe =>{
            if(this.tabtag.includes(recipe.appliance)){
                result_tag.push(recipe);  
            }

            recipe.ustensils.forEach(element => {
                if(this.tabtag.includes(element)){
                    result_tag.push(recipe);  

                }
            });

            recipe.ingredients.forEach(element =>{
                if(this.tabtag.includes(element.ingredient)){
                    result_tag.push(recipe);            

                }
            });
        });
        
        result_tag = result_tag.map(recette =>{
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
        document.querySelectorAll('.items').forEach(ingredient => {
            ingredient.addEventListener('click', () => {
                this.tagingre.push(ingredient.innerHTML);
                this.removeTagSearch();
                this.addTagSearch();
                this.globalSearch();
            });
        });

        

        document.querySelectorAll('.items3').forEach(appliance => {
            appliance.addEventListener('click', () => {
                this.tagapp.push(appliance.innerHTML);
                this.addTagSearch();
                this.removeTagSearch();
                this.globalSearch();
            });
        });

        document.querySelectorAll('.items2').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                this.tagust.push(ustensils.innerHTML);
                this.addTagSearch();
                this.removeTagSearch();
                this.globalSearch();
            });
        });

        var Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items').forEach(ingredient => {
                ingredient.addEventListener('click', () => {
                    this.tagingre.push(ingredient.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
                    this.globalSearch();
                });
            });
    
        });

        const Appareilinput = document.querySelector('.Recherche-Appareil');
        Appareilinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items3').forEach(appliance => {
                appliance.addEventListener('click', () => {
                    this.tagapp.push(appliance.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
                    this.globalSearch();
                });
            });
    
        });

        const Ustensilsinput = document.querySelector('.Recherche-Ustensil');
        Ustensilsinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items2').forEach(ustensils => {
                ustensils.addEventListener('click', () => {
                    this.tagust.push(ustensils.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
                    this.globalSearch();
                });
            });
    
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


        document.querySelectorAll('.liste_tag b').forEach(ingredients => {
            ingredients.addEventListener('click', () => {
                this.tagingre.splice(this.tagingre.indexOf(ingredients.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    });
                        
                } 
                              
            });
        });     
        

        document.querySelectorAll('.liste_tag2 ').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                ustensils.remove();      
            });
        });

        document.querySelectorAll('.liste_tag2 b').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                this.tagust.splice(this.tagust.indexOf(ustensils.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {           
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    
                    });
                
                }      

            });
        });

        document.querySelectorAll('.liste_tag3 ').forEach(appliance => {
            appliance.addEventListener('click', () => {
                appliance.remove();      
            });
        });

        document.querySelectorAll('.liste_tag3 b').forEach(appliance => {
            appliance.addEventListener('click', () => {
                console.log(appliance.innerHTML)
                this.tagapp.splice(this.tagapp.indexOf(appliance.innerHTML),1);
                this.addTagSearch();             
                if (this.tabtag.length < 1) {          
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    
                    });
                
                }
            });
        });        
    }
}

