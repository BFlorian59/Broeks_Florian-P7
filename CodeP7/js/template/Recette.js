class Recette_card{
    constructor(recipe)
    {
        this.recipe = recipe;
        this.ingrediants = '';
      
    }

    createrecette(){
        //console.log(this.recipe.appliance)
        //console.log(this.recipe)
        
        this.recipe.ingredients.forEach((ingrediant) => { 

            if (ingrediant.unit) {
                this.ingrediants += `<p><b>${ingrediant.ingredient}:</b> ${ingrediant.quantity } ${ingrediant.unit } </p>`;
            }else if (!ingrediant.quantity){
                this.ingrediants += `<p><b>${ingrediant.ingredient}</b>`
            }else{
                this.ingrediants += `<p><b>${ingrediant.ingredient}:</b> ${ingrediant.quantity }</p>`
            }
        //this.ingrediantjb.push(ingrediant); 
        //console.log(this.ingrediants)
        
        });
        const $section = document.createElement('div');
        $section.classList.add('recette_card_wrapper');
        

        const Card_recette = `
        <div class="img"><img src="#" alt=""/></div>
        <div class="titre">
            <h2> ${this.recipe.name} </h2>
            <p>${this.recipe.time} min</p>
        </div>
        <div class ="body_recette">
            <div class="ingredient">
               ${this.ingrediants} 
            </div>
            <p class ="description"> ${this.recipe.description}</p> 
        </div>       
        `
        $section.innerHTML = Card_recette
        return $section;
    }
}