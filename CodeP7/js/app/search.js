 class  Search{

    constructor(recipe){
        this.ingrediants =' ';
        this.recipe = recipe;
        this.tagingre = [];
        this.tagapp = [];
        this.tagust = [];
        this.tag =[];
        this.tabtag = [];
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
                console.log(tabIngrediants)
                var tabIngrediants_filtre =  tabIngrediants.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
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
                var result_searchs = result_search.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                console.log(result_searchs)
                const result = result_searchs.concat(ingrs);
                const resultset = [...new Set(result)]
                console.log(resultset)
                resultset.forEach((filtres) => {
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
                    //console.log(filtre)
                    $recette.innerHTML = filtre;
                    
                });
            
                                   
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
        const $recette = document.querySelector(".recette")
        var searchtag ='';
        const tag = this.tagingre.concat(this.tagapp).concat(this.tagust);
        this.tabtag = [...new Set(tag)]
        var result_tag = [];        
        result_tag = this.recipe.forEach(recipe =>{

            if(this.tabtag.includes(recipe.appliance)){
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
            }
            recipe.ustensils.forEach(element => {
                if(this.tabtag.includes(element)){
                    //console.log(recipe)
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
                }
            }); 

            recipe.ingredients.forEach(element =>{
                if(this.tabtag.includes(element.ingredient)){
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
                }
            })
            $recette.innerHTML = searchtag;            
        })
        

    }

    addEventtag (){
        document.querySelectorAll('.items').forEach(ingredient => {
            ingredient.addEventListener('click', () => {
                console.log(ingredient);
                this.tagingre.push(ingredient.innerHTML);
                console.log(this.tagingre);
                this.removeTagSearch();
                this.addTagSearch();
               

            })
        })

        

        document.querySelectorAll('.items3').forEach(appliance => {
            appliance.addEventListener('click', () => {
                this.tagapp.push(appliance.innerHTML);
                console.log(this.tagapp)
                this.addTagSearch();
                this.removeTagSearch();
            })
        })

        document.querySelectorAll('.items2').forEach(ustensils => {
            ustensils.addEventListener('click', () => {
                this.tagust.push(ustensils.innerHTML);
                console.log(this.tagust)
                this.addTagSearch();
                this.removeTagSearch();
            })
        })

        var Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items').forEach(ingredient => {
                ingredient.addEventListener('click', () => {
                    this.tagingre.push(ingredient.innerHTML);
                    this.addTagSearch();
                    this.removeTagSearch();
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
                })
            })
    
        })       
    }

    removeTagSearch(){
        const $recette = document.querySelector(".recette")
        document.querySelectorAll('.liste_tag ').forEach(ingredients => {
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

