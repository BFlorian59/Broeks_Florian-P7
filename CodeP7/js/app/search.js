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
   

    globalSearch(){
        //condition tag selectionné
        // recherche mot clé 
        const $recette = document.querySelector(".recette")
        var result_search = this.recipe;
       
        var buttonsearch = document.querySelector(".Recherche-Icone")
        const input = document.querySelector('.Recherche-Input');
        
        
       
        var filtre ='';
        buttonsearch.addEventListener('click', () => {
            console.log(this.tabtag)
            if(this.tabtag.length > 0){
                console.log(result_search)
                result_search =  this.addTagSearch();
                result_search = result_search.map(recipeId =>{
                    return recipeId.id;
                })
                console.log("mes id de recette selectionnées ")
                console.log(result_search)
            }
            //TODO commencer la recherche si tu as plus de 3 caracteres
            if (input.value.length > 2 ) {

                const input_search = input.value;
                //console.log(Search.globalSearch(result_search,Search.tabTag,Search.strSearch));
                // TODO ici compléter la recherche (sur les ingrédients ... description )
                console.log("tab ingredient ")
                console.log(tabIngrediants)
                var tabIngrediants_filtre =  tabIngrediants.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                console.log("result après add Carotte tab ingredient ")
                console.log(tabIngrediants_filtre);
                let lstRecipesSelected = [];
                let ingrs = [];
                tabIngrediants_filtre.forEach(element => {
                         element.id.forEach(id => {
                             lstRecipesSelected.push(this.recipe[id-1])
                             
                        })           
                     });
                     lstRecipesSelected.forEach(element => { 
                        ingrs.push(element)
                     });
                var result_searchs = result_search.filter(search => search.name.includes(input_search)||search.description.includes(input_search));
                const result = result_searchs.concat(ingrs);
                this.resultset = [...new Set(result)];

                const search = new Resultsearch(this.recipe, this.resultset);
                search.displaysearch();

                console.log(this.resultset);                   
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
    }

    addTagSearch(){
        const $recette = document.querySelector(".recette");
        const tag = this.tagingre.concat(this.tagapp).concat(this.tagust);
        this.tabtag = [...new Set(tag)]
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
        })
        result_tag = [...new Set(result_tag)];
        
        const searchtag = new Resultsearch();
        searchtag.displaysearchtag(result_tag,$recette);
        
        return result_tag;
    }

    addEventtag (){
        document.querySelectorAll('.items').forEach(ingredient => {
            ingredient.addEventListener('click', () => {
                //console.log(ingredient);
                this.tagingre.push(ingredient.innerHTML);
                //console.log(this.tagingre);
                this.removeTagSearch();
                this.addTagSearch();
                this.globalSearch();
               

            })
        })

        

        document.querySelectorAll('.items3').forEach(appliance => {
            appliance.addEventListener('click', () => {
                this.tagapp.push(appliance.innerHTML);
                console.log(this.tagapp)
                this.addTagSearch();
                this.removeTagSearch();
                this.globalSearch();
            })
        })

        document.querySelectorAll('.items2').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                this.tagust.push(ustensils.innerHTML);
                console.log(this.tagust)
                this.addTagSearch();
                this.removeTagSearch();
                this.globalSearch();
            })
        })

        var Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items').forEach(ingredient => {
                ingredient.addEventListener('click', () => {
                    this.tagingre.push(ingredient.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
                    this.globalSearch();
                })
            })
    
        })

        const Appareilinput = document.querySelector('.Recherche-Appareil');
        Appareilinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items3').forEach(appliance => {
                appliance.addEventListener('click', () => {
                    this.tagapp.push(appliance.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
                    this.globalSearch();
                })
            })
    
        })

        const Ustensilsinput = document.querySelector('.Recherche-Ustensil');
        Ustensilsinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items2').forEach(ustensils => {
                ustensils.addEventListener('click', () => {
                    this.tagust.push(ustensils.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
                    this.globalSearch();
                })
            })
    
        })       
    }

    removeTagSearch(){
        const $recette = document.querySelector(".recette")
        document.querySelectorAll('.liste_tag').forEach(ingredients => {
            ingredients.addEventListener('click', () => {
                ingredients.remove();      
            })
        })


        document.querySelectorAll('.liste_tag b').forEach(ingredients => {
            ingredients.addEventListener('click', () => {
                this.tagingre.splice(this.tagingre.indexOf(ingredients.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement)
                    })
                        
                } 
                              
            })
        })     
        

        document.querySelectorAll('.liste_tag2 ').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                ustensils.remove();      
            })
        })

        document.querySelectorAll('.liste_tag2 b').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                this.tagust.splice(this.tagust.indexOf(ustensils.innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {           
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement)
                    
                    })
                
                }      

            })
        })

        document.querySelectorAll('.liste_tag3 ').forEach(appliance => {
            appliance.addEventListener('click', () => {
                appliance.remove();      
            })
        })

        document.querySelectorAll('.liste_tag3 b').forEach(appliance => {
            appliance.addEventListener('click', () => {
                console.log(appliance.innerHTML)
                this.tagapp.splice(this.tagapp.indexOf(appliance.innerHTML),1);
                this.addTagSearch();             
                if (this.tabtag.length < 1) {          
                    this.recipe.forEach((recipe) => {                    
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement)
                    
                    })
                
                }
            })
        })        
    }
}

