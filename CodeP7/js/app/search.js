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

            if (this.tabtag.length < 1) {
                lstrecipe = this.recipe;
            }

            // commencer la recherche si tu as plus de 3 caracteres
            if (input.value.length > 2 ) {
                const input_search = input.value;
                //compléter la recherche (sur les ingrédients ... description )
                let tabingreselcted = [];
                let resultIngre = getLstRecipes(lstrecipe);
                console.log(resultIngre);
                //var tabIngredients_filtre =  resultIngre.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                var tabIngredients_filtre = [];
                for(let i = 0; i < resultIngre.length; i++ ){
                    for(let j = 0; j < resultIngre[i].ingredient.length; j++ ){
                        //console.log(resultIngre[i].ingredient)
                        let ingreinput = resultIngre[i].ingredient.toLocaleLowerCase().indexOf(input_search.toLocaleLowerCase());
                        if(ingreinput > -1){
                            tabIngredients_filtre.push(resultIngre[i]);
                        }
                    }
                }
                // console.log("result après add Carotte tab ingredient ");
                // console.log(tabIngrediants_filtre);
                let lstRecipesSelected = [];

                for (let index = 0; index < tabIngredients_filtre.length; index++) {
                    const element = tabIngredients_filtre[index];
                    for (let i = 0; i < element.id.length; i++) {
                        const id = element.id[i];
                        lstRecipesSelected.push(this.recipe[id-1]);
                        //console.log(lstRecipesSelected)
                    }
                    
                }

                for (let index = 0; index < lstRecipesSelected.length; index++) {
                    const element = lstRecipesSelected[index];
                    tabingreselcted.push(element);
                    
                }
                            
                //var result_searchs = lstrecipe.filter(search => search.name.toLocaleLowerCase().includes(input_search)||search.description.toLocaleLowerCase().includes(input_search));
                
                var result_searchs = [];
                for(let i = 0; i < lstrecipe.length; i++ ){
                    for(let j = 0; j < lstrecipe[i].name.length ; j++ ){
                        let nameinput = lstrecipe[i].name.toLocaleLowerCase().indexOf(input_search.toLocaleLowerCase());
                        if(nameinput > -1){
                            result_searchs.push(lstrecipe[i]);
                        }
                    }

                    for(let j = 0; j < lstrecipe[i].description.length ; j++ ){
                        let descriptioninput = lstrecipe[i].description.toLocaleLowerCase().indexOf(input_search.toLocaleLowerCase());
                        if(descriptioninput > -1){
                            result_searchs.push(lstrecipe[i]);
                        }
                    }
                    
                }

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
            let tabIngredients= [];
            for (let index = 0; index < lstRecipes.length; index++) {
                const recipe = lstRecipes[index];

                for (let i = 0; i < recipe.ingredients.length; i++) {
                    const ingre = recipe.ingredients[i];
                    
                    let lstingredient = null;
                    //console.log(ingre);
                    //lstingredient = tabIngredients.find(x => x.ingredient == ingre.ingredient);
                    
                    for (let index = 0; index < tabIngredients.length; index++) {

                        const element = tabIngredients[index];
                        if (element.ingredient == ingre.ingredient) {  
                                                       
                             lstingredient = element;
                        }
                    }
                    //console.log(lstingredient)

                    if(lstingredient != null){
                    //TODO ici vérifier si l'id de la recette n'est pas déjà ajouté.
                        
                        if (!lstingredient.id == false) {
                            lstingredient.id.push(recipe.id);
                            //console.log(lstingredient.id);
                        }
                        
                        // if(!lstingredient.id.includes(recipe.id)){ 
                        //     lstingredient.id.push(recipe.id);
                        // }
                        tabIngredients.slice(tabIngredients.indexOf(lstingredient),1);
                        
                    }else{              
                        lstingredient = {
                            ingredient: ingre.ingredient,
                            id: [recipe.id]
                        };
                    }
                    tabIngredients.push(lstingredient);

                }
                
            }
            return tabIngredients;
        }
    }
   

    //recherche par tag
    addTagSearch(){
        const input = document.querySelector('.Recherche-Input');
        const $recette = document.querySelector(".recette");
        const tag = this.tagingre.concat(this.tagapp).concat(this.tagust);
        this.tabtag = [...new Set(tag)];
        var result_tag = [];  
        var lstrecipe = this.recipe;

        if(input.value.length > 2){
            lstrecipe =  this.globalSearch();
            console.log('ok')
        }
        
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

        result_tag = this.Recherchepartags(result_tag);   

        //result_tag = result_tag.filter(tag => tag !== undefined);
        result_tag = [...new Set(result_tag)];

        var tabtag = this.tabtag;
        const searchtag = new Resultsearch();
        searchtag.displaysearchtag(result_tag,$recette, tabtag);
        
        return result_tag;
    }


    // recherche par plusieurs tags
    Recherchepartags(lstRecipes){
        // console.log(result_tag)
        // console.log(lstRecipes);
        // console.log(this.tabtag)
      
        let ResultLstRecipes = [];
        for(let i = 0; i < lstRecipes.length; i++){
      
            let cpt =0;
            for(let j = 0; j < lstRecipes.length; j++){
      
                if(lstRecipes[j].id==lstRecipes[i].id){
                    cpt++;
                }
                //console.log("nombre d'occurrence ",cpt);
                //console.log("taille de tableau",lstRecipes.length);
                //console.log("mon incrément",j);
      
                let newcpt = (j+1);
      
                if(lstRecipes.length == newcpt){
      
                    if(cpt == this.tabtag.length){
                        ResultLstRecipes.push(lstRecipes[i]);
      
                    }
      
                }
            }            
        }
        return ResultLstRecipes;
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
        
        for (let index = 0; index < document.querySelectorAll('.liste_tag').length; index++) {
            const ingredients = document.querySelectorAll('.liste_tag')[index];
            ingredients.addEventListener('click', () => {
                this.tagingre.splice(this.tagingre.indexOf(document.querySelectorAll('.liste_tag b').innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    for (let index = 0; index < this.recipe.length; index++) {
                        const recipe = this.recipe[index];
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);

                    }                        
                } 
                ingredients.remove();              
            });
        } 

        for (let index = 0; index < document.querySelectorAll('.liste_tag2').length; index++) {
            const ustensils = document.querySelectorAll('.liste_tag2')[index];
            ustensils.addEventListener('click', () => {
                this.tagust.splice(this.tagust.indexOf(document.querySelectorAll('.liste_tag2 b').innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    for (let index = 0; index < this.recipe.length; index++) {
                        const recipe = this.recipe[index];
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    }                        
                } 
                ustensils.remove();              
            });
        } 

        for (let index = 0; index < document.querySelectorAll('.liste_tag3').length; index++) {
            const appliance = document.querySelectorAll('.liste_tag3')[index];
            appliance.addEventListener('click', () => {
                this.tagapp.splice(this.tagapp.indexOf(document.querySelectorAll('.liste_tag3 b').innerHTML),1);
                this.addTagSearch();
                if (this.tabtag.length < 1) {
                    for (let index = 0; index < this.recipe.length; index++) {
                        const recipe = this.recipe[index];
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
                        $recette.appendChild(pCardElement);
                    }                        
                } 
                appliance.remove();              
            });
        }      
    }
}

