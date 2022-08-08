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
            var buttonsearch = document.querySelector(".Recherche-Icone")
            buttonsearch.addEventListener('click', () => {
                const input = document.querySelector('.Recherche-Input');
                const input_search = input.value;
                console.log(input_search);
                const result_search = data.recipes.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()));
                console.log(result_search)

            })
        });




        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngrediants);
        dropdowns.createdropdowns();

    }

    async main () {
        await this.fetch();   
        await this.search();
        const recette = new Recette_card(this.recipe);
        recette.createrecette();

        const dropdowns = new Dropdowns(this.recipe);
        dropdowns.createdropdowns();
       
    }

    async search (){


    }

}
const app = new App();
app.main();
