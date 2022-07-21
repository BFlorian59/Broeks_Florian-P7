class Dropdowns{
    constructor(recipe)
    {
        this.$dropdowns = document.getElementById("dropdowns");
        this.recipe = recipe;
        this.ingrediant = '';
        this.ustensil='';
        this.appliance='';
    }
        
    createdropdowns(){
        //console.log(this.recipe.appliance)
       
        this.recipe.ingredients.forEach((ingrediant) => {   
            this.ingrediant+= `<li><a class="dropdown-item" href="#">${ingrediant.ingredient}</a></li>`;      
            //console.log(ingrediant.ingredient)
            });
            

        this.recipe.ustensils.forEach((ustensil) => {
            //console.log(this.recipe.ustensils)
            this.ustensil+= `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`;      
               
        });

        // this.recipe.appliance.forEach((appliances) => {
        //     console.log(appliances)
        //     this.appliances+= `<li><a class="dropdown-item" href="#">${appliances}</a></li>`;      
               
        // });



        const inner = `

        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Ingredients
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                ${this.ingrediant}
            </ul>
        </div>


        <div class="dropdown">
            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Appareils
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            ${this.appliances}
            </ul>
        </div>

        <div class="dropdown">
            <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Ustensils
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               ${this.ustensil}
            </ul>
        </div>

        `;
        this.$dropdowns.innerHTML = inner
        //this.addEventListeners();

    }
}