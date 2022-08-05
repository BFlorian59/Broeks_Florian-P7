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

            // ajout de tableau
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
                //executer la recherche
            })



        });



        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngrediants, this.recipe);
        dropdowns.createdropdowns();

    }

    async main () {
        await this.fetch();   

        const recette = new Recette_card(this.recipe);
        recette.createrecette();
       
    }

    async search (){
        

        

    }

}
const app = new App();
app.main();