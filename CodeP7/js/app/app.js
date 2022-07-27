class App {
    constructor() {

    }

    async fetch() {
        const api = new Api("data/recipes.json");
        const data = await api.getRecettes();
    
        const $recette = document.querySelector(".recette")
        //const $ingrediant = document.querySelector(".ingrediant")
        const $link = document.querySelector("dropdowns")

        let tabUstenssibles = [];
        let tabIngrediants = [];
        let tabAppareils = [];

        //Création d'une card pour chaque recette
        data.recipes.forEach((recipe) => {
            const pCard = new Recette_card(recipe);
            const pCardElement = pCard.createrecette();

            $recette.appendChild(pCardElement)  

            Array.prototype.push.apply(tabIngrediants,recipe.ingredients);
            Array.prototype.push.apply(tabUstenssibles,recipe.ustensils)
            //tabUstenssibles.push(recipe.ustensils);
            //tabIngrediants.push(recipe.ingredients);
            tabAppareils.push(recipe.appliance);


        });



        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngrediants, this.recipe);
        dropdowns.createdropdowns();

    }

    async main () {
        await this.fetch();   

        const recette = new Recette_card(this.recipe);
        recette.createrecette();

        const dropdowns = new Dropdowns(this.recipe);
        dropdowns.createdropdowns();  
       
    }

}
const app = new App();
app.main();