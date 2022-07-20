class Dropdowns{
    constructor(recipe)
    {
        this.$dropdowns = document.getElementById("dropdowns");
        this.recipe = recipe;
        

    }

    // addEventListeners () {
    //     const listboxOptions = document.querySelector(".dropdown-content");
    //     document.querySelector("#button").addEventListener("click", () => {
    //         if (!listboxOptions.getAttribute("style") || listboxOptions.style.display === "none") {
    //             listboxOptions.style.display = "block";
    //             document.querySelector(".arrow--up").style.display = "block";
    //             document.querySelector(".arrow--down").style.display = "none";
    //         } else {
    //             listboxOptions.style.display = "none";
    //             document.querySelector(".arrow--up").style.display = "none";
    //             document.querySelector(".arrow--down").style.display = "block";
    //         }
    //     });
    // }
        
    createdropdowns(){

        //console.log(this.recipe.appliance)
       
        this.recipe.ingredients.forEach((ingrediant) => {
            
            this.ingrediant+= `<li><a class="dropdown-item" href="#">${ingrediant.ingredient}</a></li>`;      
           
            });
            //console.log(this.recipe.appliance)

        this.recipe.ustensils.forEach((ustensil) => {
            //console.log(this.recipe.ustensils)
            this.ustensil+= `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`;      
               
        });

        // this.recipe.appliances.forEach((appliences) => {
        //     console.log(this.recipe.appliance)
        //     this.appliances+= `<li><a class="dropdown-item" href="#">${appliences}</a></li>`;      
               
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