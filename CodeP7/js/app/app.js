class App {
    constructor() {

    }

    async fetch() {
        const api = new Api("data/recipes.json");
        const data = await api.getRecettes();
    
        const $recette = document.querySelector(".recette")
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
            const result_search = data.recipes;
            var buttonsearch = document.querySelector(".Recherche-Icone")
            const input = document.querySelector('.Recherche-Input');

            buttonsearch.addEventListener('click', () => {
                console.log(input.value.lenght)
                //TODO commencer la recherche si tu as plus de 3 caracteres
                if (input.value.lenght > 3 ) {
                    console.log(input.value.lenght)
                    const input_search = input.value;
                     //console.log(Search.globalSearch(result_search,Search.tabTag,Search.strSearch));
                    console.log(input_search);
                    var result_searchs = result_search.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase())||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                    console.log(result_searchs)
                }
               

            })
        });




        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngrediants);
        dropdowns.createdropdowns();

    }

    async main () {
        await this.fetch();   
        const recette = new Recette_card(this.recipe);
        recette.createrecette();

        const dropdowns = new Dropdowns(this.recipe);
        dropdowns.createdropdowns();
       
    }

     search (){
        

    }

}
const app = new App();
app.main();
