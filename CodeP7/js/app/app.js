class App {
    constructor() {

    }

    async fetch() {
        const api = new Api("data/recipes.json");
        const data = await api.getRecettes();
    
        const $recette = document.querySelector(".recette")
        //const $ingrediant = document.querySelector(".ingrediant")
        const $link = document.querySelector("#dropdown")


        //Création d'une card pour chaque recette
        data.recipes.forEach((recipe) => {
            const pCard = new Recette_card(recipe);
            const pCardElement = pCard.createrecette();

            $recette.appendChild(pCardElement)
            const dropdowns = new Dropdowns(recipe);
            dropdowns.createdropdowns();

        });

    }

    async main () {
        await this.fetch();   
        
        const dropdowns = new Dropdowns(this.recipe);
        dropdowns.createdropdowns();

        const recette = new Recette_card(this.recipe);
        recette.createrecette();

        
    }

}
const app = new App();
app.main();