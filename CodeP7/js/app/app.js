class App {
    constructor() {
        this.ingrediants = '';
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
            //TODO boucler sur les tableaux et associer par exemple l'ingrédient à la recette

            // tabIngrediants = [{ingredient:'thon',[2,14,3]}, ... ]
            Array.prototype.push.apply(tabIngrediants,recipe.ingredients)
            Array.prototype.push.apply(tabUstenssibles,recipe.ustensils)
            //tabUstenssibles.push(recipe.ustensils);
            //tabIngrediants.push(recipe.ingredients);
            tabAppareils.push(recipe.appliance);

            
            //console.log(tabid)
            

            
            // recipe.ingredients.forEach(ingre => {
            //     let tab = [];
            //     tab.push(recipe.id)
            //     let recette = [{
            //         ingredient: ingre.ingredient,
            //         id: tab
            //     }];
            //     //tab.push(ingre.ingredient)
            //     //console.log(recette)
            //     tabIngrediants.push(recette)
            //     console.log(recette)
            // });
            
            //TODO Aller chercher le bouton de la recherche
            // ajouter eventlisterner click
            // pour executer la recherche    
            
            const search = new Search(data.recipes);
            search.globalSearch();

            // const searchtag = new Search(data.recipes);
            // searchtag.addTagSearch();
        });
        //console.log(tabIngrediants)

        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngrediants);
        dropdowns.createdropdowns();

    }

    async main () {
        await this.fetch();   
        const recette = new Recette_card(this.recipe);
        recette.createrecette();

        const dropdowns = new Dropdowns(this.recipe);
        dropdowns.createdropdowns();

        const search = new Search(this.recipe);
        search.globalSearch();
    }
}
const app = new App();
app.main();
