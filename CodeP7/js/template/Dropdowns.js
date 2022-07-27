class Dropdowns{
    constructor(tabUstenssibles,tabAppareils,tabIngrediants, recipe)
    {
        this.$dropdowns = document.getElementById("dropdowns");
        this.recipe = recipe;
        this.ingrediants = tabIngrediants;
        this.ingrediant='';
        this.ustensils=tabUstenssibles;
        this.ustensil ='';
        this.appliances=tabAppareils;
        this.appliance='';
    }


    addEventListeners () {
        document.querySelector("#fleche_up").style.display = "none";
        document.querySelector("#Recherche1").style.display = "none";
        const listboxOptions = document.querySelector("#dropdown-menu1");
        document.querySelector("#dropdownMenuButton1").addEventListener("click", () => {
            if (!listboxOptions.getAttribute("style") || listboxOptions.style.display === "none") {
                document.querySelector("#dropdownMenuButton1").setAttribute("aria-expanded", true);
                document.querySelector("#fleche_down").style.display = "none";
                document.querySelector("#Ingredients").style.display = "none";
                document.querySelector("#Recherche1").style.display = "block";
                document.querySelector("#fleche_up").style.display = "block";
                document.querySelector("#dropdownMenuButton1").setAttribute("style", "border-radius: 0%; width: 133%;");
                listboxOptions.style.display = "block";
                
            } else {

                document.querySelector("#fleche_up").style.display = "none";
                document.querySelector("#fleche_down").style.display = "block";
                document.querySelector("#dropdownMenuButton1").setAttribute("aria-expanded", false);
                document.querySelector("#Ingredients").style.display = "block";
                document.querySelector("#Recherche1").style.display = "none";
                listboxOptions.style.display = "none";
            }
        })
        document.querySelector("#fleche_up2").style.display = "none";
        document.querySelector("#Recherche2").style.display = "none";
        const listboxOptions2 = document.querySelector("#dropdown-menu2");
        document.querySelector("#dropdownMenuButton2").addEventListener("click", () => {
            if (!listboxOptions2.getAttribute("style") || listboxOptions2.style.display === "none") {
                document.querySelector("#dropdownMenuButton2").setAttribute("aria-expanded", true);
                document.querySelector("#Appareils").style.display = "none";
                document.querySelector("#Recherche2").style.display = "block";
                document.querySelector("#dropdownMenuButton2").setAttribute("style", "border-radius: 0%; width: 133%;");
                document.querySelector("#fleche_down2").style.display = "none";
                document.querySelector("#fleche_up2").style.display = "block";
                listboxOptions2.style.display = "block";

            } else {
                document.querySelector("#fleche_up2").style.display = "none";
                document.querySelector("#fleche_down2").style.display = "block";
                document.querySelector("#dropdownMenuButton2").setAttribute("aria-expanded", false);
                document.querySelector("#Appareils").style.display = "block";
                document.querySelector("#Recherche2").style.display = "none";
                listboxOptions2.style.display = "none";
            }
        });
        document.querySelector("#fleche_up3").style.display = "none";
        document.querySelector("#Recherche3").style.display = "none";
        const listboxOptions3 = document.querySelector("#dropdown-menu3");
        document.querySelector("#dropdownMenuButton3").addEventListener("click", () => {
            if (!listboxOptions3.getAttribute("style") || listboxOptions3.style.display === "none") {
                document.querySelector("#dropdownMenuButton3").setAttribute("aria-expanded", true);
                document.querySelector("#Ustensils").style.display = "none";
                document.querySelector("#Recherche3").style.display = "block";
                document.querySelector("#dropdownMenuButton3").setAttribute("style", "border-radius: 0%; width: 133%;");
                document.querySelector("#fleche_down3").style.display = "none";
                document.querySelector("#fleche_up3").style.display = "block";
                listboxOptions3.style.display = "block";
            } else {
                document.querySelector("#dropdownMenuButton3").setAttribute("aria-expanded", false);
                document.querySelector("#Ustensils").style.display = "block";
                document.querySelector("#Recherche3").style.display = "none";
                document.querySelector("#fleche_up3").style.display = "none";
                document.querySelector("#fleche_down3").style.display = "block";
                listboxOptions3.style.display = "none";
            }
        });
    }
        
    createdropdowns(){
        let uniqueingre = []
        this.ingrediants.forEach((ingre) => {  
                if (!uniqueingre.includes(ingre.ingredient)) {
                    uniqueingre.push(ingre.ingredient);
                    uniqueingre.filter((item,
                        index) => uniqueingre.indexOf(item) === index);
                    //console.log(ingre.ingredient);
                    this.ingrediant+= `<li><a class="dropdown-item" href="#">${ingre.ingredient}</a></li>`;
                }
            });
            //console.log(uniqueingre);


        let unique_ustensil = []
        this.ustensils.forEach((ustensil) => {
        if (!unique_ustensil.includes(ustensil)) {
            unique_ustensil.push(ustensil);
            unique_ustensil.filter((item,
                index) => unique_ustensil.indexOf(item) === index);
            //console.log(ustensil);
            this.ustensil+= `<li><a class="dropdown-item" href="#">${ustensil}</a></li>`;
            }
        
        });
        //console.log(unique_ustensil)

        let unique_appliances = []
        this.appliances.forEach((appliances) => {
            if (!unique_appliances.includes(appliances)) {
                unique_appliances.push(appliances);
                unique_appliances.filter((item,
                    index) => unique_appliances.indexOf(item) === index);
                //console.log(ustensil);
                this.appliance+= `<li><a class="dropdown-item" href="#">${appliances}</a></li>`;  
                }
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
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                <b id ="Ingredients">Ingredients</b>
                <i class="fa-solid fa-sort-up" id="fleche_up"></i>
                <i class="fa-solid fa-sort-down" id="fleche_down"></i>
                
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
                <i class="fa-solid fa-sort-up" id="fleche_up2"></i>
                <i class="fa-solid fa-sort-down" id="fleche_down2"></i>
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
                <i class="fa-solid fa-sort-up" id="fleche_up3"></i>
                <i class="fa-solid fa-sort-down" id="fleche_down3"></i>
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