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
        this.$wrapper = document.createElement('div');
        this.uniqueingre =[]
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
                document.querySelector("#dropdownMenuButton1").setAttribute("style", "border-radius: 0%; width: 408%;");
                document.querySelector(".dropdown1").setAttribute("style", "margin-right: 48%;")
                listboxOptions.style.display = "block";
                
            } else {

                document.querySelector("#dropdownMenuButton1").setAttribute("style", "width: 133%;");
                document.querySelector("#fleche_up").style.display = "none";
                document.querySelector("#fleche_down").style.display = "block";
                document.querySelector("#dropdownMenuButton1").setAttribute("aria-expanded", false);
                document.querySelector("#Ingredients").style.display = "block";
                document.querySelector("#Recherche1").style.display = "none";
                document.querySelector(".dropdown1").setAttribute("style", "margin-right: 8%;")
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
                document.querySelector("#dropdownMenuButton2").setAttribute("style", "border-radius: 0%; width: 166%;");
                document.querySelector("#fleche_down2").style.display = "none";
                document.querySelector("#fleche_up2").style.display = "block";
                document.querySelector(".dropdown2").setAttribute("style", "margin-right: 20%;")
                listboxOptions2.style.display = "block";

            } else {
                document.querySelector("#dropdownMenuButton2").setAttribute("style", "width: 133%;");
                document.querySelector("#fleche_up2").style.display = "none";
                document.querySelector("#fleche_down2").style.display = "block";
                document.querySelector("#dropdownMenuButton2").setAttribute("aria-expanded", false);
                document.querySelector("#Appareils").style.display = "block";
                document.querySelector("#Recherche2").style.display = "none";
                document.querySelector(".dropdown2").setAttribute("style", "margin-right: 8%;")
                
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
                document.querySelector("#dropdownMenuButton3").setAttribute("style", "border-radius: 0%; width: 200%;");
                document.querySelector("#fleche_down3").style.display = "none";
                document.querySelector("#fleche_up3").style.display = "block";
                listboxOptions3.style.display = "block";
            } else {
                document.querySelector("#dropdownMenuButton3").setAttribute("aria-expanded", false);
                document.querySelector("#dropdownMenuButton3").setAttribute("style", "width: 133%;");
                document.querySelector("#Ustensils").style.display = "block";
                document.querySelector("#Recherche3").style.display = "none";
                document.querySelector("#fleche_up3").style.display = "none";
                document.querySelector("#fleche_down3").style.display = "block";
                listboxOptions3.style.display = "none";
            }
        });
        

    }

      
    createdropdowns(){
        
        this.ingrediants.forEach((ingre) => {  
                if (!this.uniqueingre.includes(ingre.ingredient)) {
                    this.uniqueingre.push(ingre.ingredient);
                    this.uniqueingre.filter((item,
                        index) => this.uniqueingre.indexOf(item) === index);
                    //console.log(ingre.ingredient);
                   
                        this.ingrediant+= `<li id="items"><a class="dropdown-item"  href="#" >${ingre.ingredient}</a></li>`;

                    
                    // TODO Ici affecter un addEventListener à chaque tag.
                        document.querySelector('.dropdown-item').addEventListener("click", () => {
                            let listtag=[]
                            listtag.push(ingre.ingredient);
                            console.log(ingre.ingredient);
                        })

                    // Ajouter le tag dans list des tags
                    // cet event va permettre d'afficher le tag en-dessous de la bar de recherche et executer la recherche
                }
                
            });

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

        <div class="dropdown1">
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


        <div class="dropdown2">
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

        <div class="dropdown3">
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
        this.add();
 
    }
}