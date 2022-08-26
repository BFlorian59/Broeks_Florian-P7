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
                console.log(tabIngrediants)
                var tabIngrediants_filtre =  tabIngrediants.filter(tab => tab.ingredient.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                console.log(tabIngrediants_filtre);
                let id = null
                tabIngrediants_filtre.forEach(element => {
                    id = tabIngrediants_filtre.find(x => x.id=== element.id);
                });
                var result_searchs = result_search.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||id.id.includes(search.id) );
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
        const tabtag = [...new Set(tag)]
        console.log(tabtag)
        console.log(tabIngrediants)
        var tabIngrediants_filtre =  tabIngrediants.filter(tab => tab.ingredient.toLocaleLowerCase().includes(tabtag.toString().toLocaleLowerCase()));
        console.log(tabIngrediants_filtre);
        let ok = " "
        tabIngrediants_filtre.forEach(element => {
            ok = tabIngrediants_filtre.find(x => x.id=== element.id);
        });
        console.log(ok)
        const result_tag = this.recipe.filter(tags => tags.name.toLocaleLowerCase().includes(tabtag.toString().toLowerCase())||tags.appliance.toLocaleLowerCase().includes(tabtag.toString().toLowerCase())||tags.ustensils.toString().toLocaleLowerCase().includes(tabtag.toString().toLowerCase())||ok.id.includes(tags.id)); 
        console.log(result_tag)
        result_tag.forEach((tagfiltres) => {
            this.ingrediants = '';
            tagfiltres.ingredients.forEach((ingre) => { 
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
                            <h2> ${tagfiltres.name} </h2>
                            <p><i class="fa-regular fa-clock"></i>${tagfiltres.time} min</p>
                        </div>
                        <div class ="body_recette">
                            <div class="ingredient">
                                ${this.ingrediants}
                            </div>
                            <p class ="description"> ${tagfiltres.description}</p> 
                        </div>
                    </div>   
                </div>                                
            `
        });
                
        $recette.innerHTML = searchtag;

    }

    addEventtag (){
        document.querySelectorAll('.items').forEach(item1 => {
            item1.addEventListener('click', () => {
                
                this.tagingre.push(item1.innerHTML)
                console.log(this.tagingre)
                this.addTagSearch()
            })
        })

        document.querySelectorAll('.items3').forEach(item2 => {
            item2.addEventListener('click', () => {
                this.tagust.push(item2.innerHTML)
                this.addTagSearch()
            })
        })

        document.querySelectorAll('.items2').forEach(item3 => {
            item3.addEventListener('click', () => {
                this.tagingre.push(item3.innerHTML)
                this.addTagSearch()
            })
        })

        var Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items').forEach(item1 => {
                item1.addEventListener('click', () => {
                    
                    this.tagingre.push(item1.innerHTML)
                    console.log(this.tagingre)
                    this.addTagSearch()
                })
            })
    
        })

        const Appareilinput = document.querySelector('.Recherche-Appareil');
        Appareilinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items3').forEach(item2 => {
                item2.addEventListener('click', () => {
                    this.tagust.push(item2.innerHTML)
                    this.addTagSearch()
                })
            })
    
        })

        const Ustensilsinput = document.querySelector('.Recherche-Ustensil');
        Ustensilsinput.addEventListener('keyup', () =>{
            document.querySelectorAll('.items2').forEach(item3 => {
                item3.addEventListener('click', () => {
                    this.tagingre.push(item3.innerHTML)
                    this.addTagSearch()
                })
            })
    
        })
    }

    removeTagSearch(){

    }




}

