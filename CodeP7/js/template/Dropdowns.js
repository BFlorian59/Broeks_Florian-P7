class Dropdowns{
    constructor(tabUstenssibles,tabAppareils,tabIngrediants)
    {
        this.$dropdowns = document.getElementById("dropdowns");
        //this.recipe = recipe;
        this.ingrediants = tabIngrediants;
        this.ingrediant='';
        this.ustensils=tabUstenssibles;
        this.ustensil ='';
        this.appliances=tabAppareils;
        this.appliance='';
    }


    addEventListeners () {
        document.querySelector("#fleche").style.display = "none";
        document.querySelector("#Recherche1").style.display = "none";
        const listboxOptions = document.querySelector("#dropdown-menu1");
        document.querySelector("#dropdownMenuButton1").addEventListener("click", () => {
            if (!listboxOptions.getAttribute("style") || listboxOptions.style.display === "none") {
                document.querySelector("#dropdownMenuButton1").setAttribute("aria-expanded", true);

                document.querySelector("#Ingredients").style.display = "none";
                document.querySelector("#Recherche1").style.display = "block";
                document.querySelector("#fleche").style.display = "block";
                document.querySelector("#dropdownMenuButton1").setAttribute("style", "border-radius: 0%; width: 133%;");
            } else {

                document.querySelector("#dropdownMenuButton1").setAttribute("aria-expanded", false);
                document.querySelector("#Ingredients").style.display = "block";
                document.querySelector("#Recherche1").style.display = "none";
            }
        })

        document.querySelector("#Recherche2").style.display = "none";
        const listboxOptions2 = document.querySelector("#dropdown-menu2");
        document.querySelector("#dropdownMenuButton2").addEventListener("click", () => {
            if (!listboxOptions2.getAttribute("style") || listboxOptions2.style.display === "none") {
                document.querySelector("#dropdownMenuButton2").setAttribute("aria-expanded", true);
                document.querySelector("#Appareils").style.display = "none";
                document.querySelector("#Recherche2").style.display = "block";
                document.querySelector("#dropdownMenuButton2").setAttribute("style", "border-radius: 0%; width: 133%;");
            } else {
                document.querySelector("#dropdownMenuButton2").setAttribute("aria-expanded", false);
                document.querySelector("#Appareils").style.display = "block";
                document.querySelector("#Recherche2").style.display = "none";
            }
        });

        document.querySelector("#Recherche3").style.display = "none";
        const listboxOptions3 = document.querySelector("#dropdown-menu3");
        document.querySelector("#dropdownMenuButton3").addEventListener("click", () => {
            if (!listboxOptions3.getAttribute("style") || listboxOptions3.style.display === "none") {
                document.querySelector("#dropdownMenuButton3").setAttribute("aria-expanded", true);
                document.querySelector("#Ustensils").style.display = "none";
                document.querySelector("#Recherche3").style.display = "block";
                document.querySelector("#dropdownMenuButton3").setAttribute("style", "border-radius: 0%; width: 133%;");
            } else {
                document.querySelector("#dropdownMenuButton3").setAttribute("aria-expanded", false);
                document.querySelector("#Ustensils").style.display = "block";
                document.querySelector("#Recherche3").style.display = "none";
            }
        });
    }
        
    createdropdowns(){
        //console.log(this.recipe.appliance)
       //console.log(this.ingrediant)
       this.ingrediants.forEach((ingre) => {  
        //console.log(lala)
        //console.log(lala.ingredient) 
            this.ingrediant+= `<li><a class="dropdown-item" href="#">${ingre.ingredient}</a></li>`;      
            console.log(ingre.ingredient)
            });
            

        this.ustensils.forEach((ustensil) => {
        //console.log(this.recipe.ustensils)
        this.ustensil+= `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`;      
               
        });

        this.appliances.forEach((appliances) => {
            //console.log(appliances)
            this.appliance+= `<li><a class="dropdown-item" href="#">${appliances}</a></li>`;      
               
        });

        const inner = `

        <div class="dropdown">
            <div id="Recherche1">
                    <form class="Form-Inline My-2 My-Lg-0" id="form">
                        <div class="Recherche-Barr">
                            <input class="Recherche-Ingredient btn-primary" type="Search" Placeholder="Rechercher un ingredient">
                        </div>
                    </form>
            </div>
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <b id ="Ingredients">Ingredients</b>
                <i class="fa-solid fa-sort-up" id="fleche"></i>
                
            </button>
            <ul class="dropdown-menu" id="dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                ${this.ingrediant}
            </ul>
        </div>


        <div class="dropdown">
            <div id="Recherche2">
                <form class="Form-Inline My-2 My-Lg-0">
                    <div class="Recherche-Barr">
                        <input class="Recherche-Appareil btn-success" type="Search" Placeholder="Rechercher un Appareil">
                    </div>
                </form>
            </div>
            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <b id ="Appareils">Appareils</b>
            </button>
            <ul class="dropdown-menu" id="dropdown-menu2" aria-labelledby="dropdownMenuButton2">
            ${this.appliance}
            </ul>
        </div>

        <div class="dropdown">
            <div id="Recherche3">
                <form class="Form-Inline My-2 My-Lg-0">
                    <div class="Recherche-Barr">
                        <input class="Recherche-Ustensil btn-danger" type="Search" Placeholder="Rechercher un Ustensil">
                    </div>
                </form>
            </div>
            <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
            <b id ="Ustensils">Ustensils</b>
                
            </button>
            <ul class="dropdown-menu" id="dropdown-menu3" aria-labelledby="dropdownMenuButton3">
               ${this.ustensil}
            </ul>
        </div>

        `;
        this.$dropdowns.innerHTML = inner
        this.addEventListeners();

    }
}