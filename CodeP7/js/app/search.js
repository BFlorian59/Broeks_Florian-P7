 class Search{

    constructor(recipe){
        this.ingrediants =' ';
        this.recipe = recipe;
        this.tagingre = [];
        this.tagapp = [];
        this.tagust = [];
        this.tag =[];
        this.tabtag = [];
        this.tabsearchsset =[];
    }
   

    // recherche mot clé 
    globalSearch(){
        
        const $recette = document.querySelector(".recette");
        var lstrecipe = this.recipe;
        var tabsearchsset = []
       
        var buttonsearch = document.querySelector(".Recherche-Icone");
        const input = document.querySelector('.Recherche-Input');
        
        buttonsearch.addEventListener('click', () => {

            //condition tag selectionné
            if(this.tabtag.length > 0){
                lstrecipe =  this.addTagSearch();
                console.log(lstrecipe)
            }

            if (this.tabtag.length < 1) {
                lstrecipe = this.recipe;
            }

            // commencer la recherche si tu as plus de 3 caracteres
            if (input.value.length > 2 ) {

                const input_search = input.value;
                //compléter la recherche (sur les ingrédients ... description )
                let tabingreselcted = [];
                
                let resultIngre = getLstRecipes(lstrecipe);
                 // filtrer les ingredient qui correspond au mot clé
                var tabIngredients_filtre =  resultIngre.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                // console.log("result après add Carotte tab ingredient ");
                // console.log(tabIngredients_filtre);
                let lstRecipesSelected = [];
                // tabingreselcted => liste de recttes selectionnés sur la liste global par rapport aux ingrédiants
                 // mette dans un tableau les recettes qui correspond au ingredient qui on était filtré 
                tabIngredients_filtre.forEach(element => {
                    element.id.forEach(id => {
                        lstRecipesSelected.push(this.recipe[id-1]);         
                    })           
                });

                // filtrer les recettes qui correspond au mot clé présent dans le nom ou dans la description
                var result_searchs = lstrecipe.filter(search => search.name.toLocaleLowerCase().includes(input_search)||search.description.toLocaleLowerCase().includes(input_search));

                // fusionner le tableau des recette filtré avec les ingrédients avec le tableau des recette filtré avec le nom et la description
                const tabsearchs = result_searchs.concat(lstRecipesSelected);
                this.tabsearchsset = [...new Set(tabsearchs)];
                tabsearchsset = this.tabsearchsset

                const search = new Resultsearch(this.recipe, this.tabsearchsset);
                search.displaysearch();
               
                if (this.tabsearchsset.length == 0) {
                    var error ='';
                    error = `
                    <div id= "error">
                        <p>Aucune recette ne correspond à votre critère</p>
                    </div>
                        `

                    $recette.innerHTML = error;
                }
                
                return tabsearchsset
            }else if (input.value.length < 3){

                $recette.innerHTML ='';
               
                this.recipe.forEach((recipe) => {                    
                    const pCard = new Recette_card(recipe);
                    const pCardElement = pCard.createrecette();
                    $recette.appendChild(pCardElement); 
                
                });
            }  
            
        });   
        
        // obtenir une liste de recette avec les id de recette qui sont associés
        function getLstRecipes( lstRecipes){
            let tabIngredients= [];
            lstRecipes.forEach((recipe) => {
               
    
                let lstingredient = null;
                recipe.ingredients.forEach(ingre => {   
                    lstingredient = null;
                    lstingredient = tabIngredients.find(x => x.ingredient == ingre.ingredient);
                    if(lstingredient != undefined){
                        //ici vérifier si l'id de la recette n'est pas déjà ajouté.
                        if(!lstingredient.id.includes(recipe.id)){
                            lstingredient.id.push(recipe.id);
                        }
    
                        tabIngredients.slice(tabIngredients.indexOf(lstingredient),1);
                    }else{              
                        lstingredient = {
                            ingredient: ingre.ingredient,
                            id: [recipe.id]
                        };
                    }
                    tabIngredients.push(lstingredient);
                    //console.log(tabIngrediants)
                });
            });
           
            return tabIngredients;
        }
    }
   

    //recherche par tag
    addTagSearch(result_tag){
        const $recette = document.querySelector(".recette");
        const input = document.querySelector('.Recherche-Input');
        const tag = this.tagingre.concat(this.tagapp).concat(this.tagust);
        this.tabtag = [...new Set(tag)];
        var result_tag = [];  
        var lstrecipe = this.recipe;
            
            // if(input.value.length > 2 && this.tabtag.length > 0){
            //     lstrecipe =  this.globalSearch();
            //     console.log(lstrecipe)

            // }

        

        // filtrer les recettes selon les tags sélectionnés
        lstrecipe.forEach(recipe =>{
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
        
        // recherche par plusieurs tags
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
                this.tagingre.splice(this.tagingre.indexOf(document.querySelectorAll('.liste_tag b').innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    });
                        
                } 
                ingredients.remove();      
            });
        });

        document.querySelectorAll('.liste_tag2').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                this.tagust.splice(this.tagust.indexOf(document.querySelectorAll('.liste_tag2 b').innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    });
                        
                } 
                ustensils.remove();      
            });
        });

        document.querySelectorAll('.liste_tag3').forEach(appliance => {
            appliance.addEventListener('click', () => {
                this.tagapp.splice(this.tagapp.indexOf(document.querySelectorAll('.liste_tag3 b').innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    });
                        
                } 
                appliance.remove();      
            });
        }); 
              
    }
}

