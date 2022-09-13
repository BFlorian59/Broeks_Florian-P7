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

