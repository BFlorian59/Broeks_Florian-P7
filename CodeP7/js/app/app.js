var tabIngredients = [];
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
            Array.prototype.push.apply(tabUstenssibles,recipe.ustensils)
            tabAppareils.push(recipe.appliance);           

            let recette = null;
            recipe.ingredients.forEach(ingre => {   
                recette = null;
                 recette = tabIngredients.find(x => x.ingredient == ingre.ingredient);
                //console.log(recette)
                if(recette != undefined){
                    //TODO ici vérifier si l'id de la recette n'est pas déjà ajouté.
                    if(!recette.id.includes(recipe.id)){
                        recette.id.push(recipe.id);
                    }

                    tabIngredients.slice(tabIngredients.indexOf(recette),1);
                }else{              
                recette = {
                    ingredient: ingre.ingredient,
                    id: [recipe.id]
                };
                }
                tabIngredients.push(recette)
            });
        });
        const search = new Search(data.recipes);
        search.globalSearch();

        const dropdowns = new Dropdowns(tabUstenssibles,tabAppareils,tabIngredients, data.recipes);
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
