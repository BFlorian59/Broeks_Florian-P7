class App {
    constructor() {
        this.ingrediants = '';
    }

    async fetch() {
        const api = new Api("data/recipes.json");
        const data = await api.getRecettes();
    
        const $recette = document.querySelector(".recette")
        
        const $filtre = document.querySelector(".filtre")

        //const $ingrediant = document.querySelector(".ingrediant")
        

        let tabUstenssibles = [];
        let tabIngrediants = [];
        let tabAppareils = [];

        


        // Tableau du resultat de ta recherche
        // tableau de tes tags selectionnés

        //Création d'une card pour chaque recette
        data.recipes.forEach((recipe) => {
            const pCard = new Recette_card(recipe);
            const pCardElement = pCard.createrecette();

            $recette.appendChild(pCardElement)  

            // ajouter les tableaux ingredients, ustensils et appareils
            Array.prototype.push.apply(tabIngrediants,recipe.ingredients);
            Array.prototype.push.apply(tabUstenssibles,recipe.ustensils)
            //tabUstenssibles.push(recipe.ustensils);
            //tabIngrediants.push(recipe.ingredients);
            tabAppareils.push(recipe.appliance);

            //TODO Aller chercher le bouton de la recherche
            // ajouter eventlisterner click
            // pour executer la recherche           
        });

            const result_search = data.recipes;
            var buttonsearch = document.querySelector(".Recherche-Icone")
            const input = document.querySelector('.Recherche-Input');
            var filtre ='';
            buttonsearch.addEventListener('click', () => {
                //TODO commencer la recherche si tu as plus de 3 caracteres
                if (input.value.length > 2 ) {
                    

                    const input_search = input.value;
                     //console.log(Search.globalSearch(result_search,Search.tabTag,Search.strSearch));
                    console.log(input_search);
                    var result_searchs = result_search.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                    console.log(result_searchs)
                    if (input!=' ') {
                        console.log(result_searchs)
                        result_searchs.forEach((ingrediant) => { 
                            ingrediant.ingredients.forEach((filtre) => { 

                                if (filtre.unit) {
                                    this.ingrediants += `<p><b>${filtre.ingredient}:</b> ${filtre.quantity } ${filtre.unit } </p>`;
                                }else if (!filtre.quantity){
                                    this.ingrediants += `<p><b>${filtre.ingredient}</b>`
                                }else{
                                    this.ingrediants += `<p><b>${filtre.ingredient}:</b> ${filtre.quantity }</p>`
                                }
                            });
                       });

                        result_searchs.forEach(resultfiltre =>
                            
                            filtre += 
                            `
                            <div class="filtre_card_wrapper">
                                <div class="img"><img src="#" alt=""/></div>
                                    <div class="titre">
                                        <h2> ${resultfiltre.name} </h2>
                                        <p><i class="fa-regular fa-clock"></i>${resultfiltre.time} min</p>
                                    </div>
                                    <div class ="body_recette">
                                        <div class="ingredient">
                                            ${this.ingrediants} 
                                        </div>
                                        <p class ="description"> ${resultfiltre.description}</p> 
                                    </div>
                                </div>   
                            </div>
                                
                            `
                        )
                            
                        document.querySelector('.recette').innerHTML = filtre;
                    }

                }else if (input.value.length < 3){
                    data.recipes.forEach((recipe) => {
                        const pCard = new Recette_card(recipe);
                        const pCardElement = pCard.createrecette();
            
                        $recette.appendChild(pCardElement)  
                        //document.querySelector('.recette').innerHTML = pCardElement;
                
                                  
                    });

                }  
               

            })
       




        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngrediants);
        dropdowns.createdropdowns();

    }

    async main () {
        await this.fetch();   
        const recette = new Recette_card(this.recipe);
        recette.createrecette();

        // const filter = new Search_card(this.result, this.recipe);
        // filter.filterrecette();

        const dropdowns = new Dropdowns(this.recipe);
        dropdowns.createdropdowns();
       
    }

     search (){
        

    }

}
const app = new App();
app.main();
