class Dropdowns{
    constructor(tabUstenssibles,tabAppareils,tabIngrediants, recipe)
    {
        this.$dropdowns = document.getElementById("dropdowns");
        this.$tag = document.getElementById("tag");
        this.recipe = recipe;
        this.ingrediants = tabIngrediants;
        this.ingrediant='';
        this.ustensils=tabUstenssibles;
        this.ustensil ='';
        this.appliances=tabAppareils;
        this.appliance='';
        this.$wrapper = document.createElement('div');
        this.uniqueingre =[];
        this.unique_appliances =[];
        this.unique_ustensil =[];
        this.tag ='';
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

    displaytag(){
        document.querySelectorAll('#items').forEach(item => {
            item.addEventListener('click', () => {
                console.log(item.innerHTML)
                this.$tag.innerHTML += `
                <div class = 'liste_tag'>
                    <b>${item.innerHTML}</b>
                    <a href="#" class="delete">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </a>
                </div>`
                //this.deletetag();
            })
        })

        document.querySelectorAll('#items2').forEach(item => {
            item.addEventListener('click', () => {
                console.log(item.innerHTML)
                this.$tag.innerHTML += `
                <div class = 'liste_tag2'>
                    <b>${item.innerHTML}</b>
                    <a href="#" class="delete">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </a>
                </div>`
                //this.deletetag();
            })
        })

        document.querySelectorAll('#items3').forEach(item => {
            item.addEventListener('click', () => {
                console.log(item.innerHTML)
                this.$tag.innerHTML += `
                <div class = 'liste_tag3'>
                    <b>${item.innerHTML}</b>
                    <a href="#" class="delete">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </a>
                </div>`
                //this.deletetag();
            })
        })

        
    }

    search(){
        const Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            const input = Ingredientinput.value;
            console.log(input);
            const result = this.uniqueingre.filter(ingres => ingres.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
            console.log(result)

            let suggestion ='';
            result.forEach(resultItems =>
                suggestion += 
                `<li ><a id="items" class="dropdown-item"  href="#" >${resultItems}</a></li>`
                    
            )
            
            document.getElementById('dropdown-menu1').innerHTML = suggestion;
            this.displaytag();

        })

        const Appareilinput = document.querySelector('.Recherche-Appareil');
        Appareilinput.addEventListener('keyup', () =>{
            const input_appareil = Appareilinput.value;
            console.log(input_appareil);
            const result_appareils = this.unique_appliances.filter(appareils => appareils.toLocaleLowerCase().includes(input_appareil.toLocaleLowerCase()));
            console.log(result_appareils)

            let suggestion ='';
            result_appareils.forEach(resultItems =>
                suggestion += 
                `<li ><a id="items3" class="dropdown-item"  href="#" >${resultItems}</a></li>`
                    
            )
            
            document.getElementById('dropdown-menu2').innerHTML = suggestion;
            this.displaytag();
        })


        const Ustensilsinput = document.querySelector('.Recherche-Ustensil');
        Ustensilsinput.addEventListener('keyup', () =>{
            const input_ustensils = Ustensilsinput.value;
            console.log(input_ustensils);
            const result_ustensils = this.unique_ustensil.filter(ustensils => ustensils.toLocaleLowerCase().includes(input_ustensils.toLocaleLowerCase()));
            console.log(result_ustensils)

            let suggestion ='';
            result_ustensils.forEach(resultItems =>
                suggestion += 
                `<li ><a id="items2" class="dropdown-item"  href="#" >${resultItems}</a></li>`
                    
            )
            
            document.getElementById('dropdown-menu3').innerHTML = suggestion;
            this.displaytag();
        })


    }

    // deletetag(){
    //     document.querySelectorAll('.delete').forEach(item => {
    //         item.addEventListener('click', () => {
       
    //             document.querySelector('.liste_tag').style.display = 'none'
    //             console.log('deletes')
    //         })
    //     })
    // }

      
    createdropdowns(){
       
        var removed = this.ingrediants.splice(10, 41)
        removed.forEach((ingre) => {    
                if (!this.uniqueingre.includes(ingre.ingredient)) {
                    this.uniqueingre.push(ingre.ingredient);
                    this.uniqueingre.filter((item,
                        index) => this.uniqueingre.indexOf(item) === index);
                     
                    this.ingrediant+= `<li ><a id="items" class="dropdown-item"  href="#" >${ingre.ingredient}</a></li>`;

                    // TODO Ici affecter un addEventListener à chaque tag.
                    // Ajouter le tag dans list des tags
                    // cet event va permettre d'afficher le tag en-dessous de la bar de recherche et executer la recherche
                    
                }   
            });
           

        this.ustensils.forEach((ustensil) => {
        if (!this.unique_ustensil.includes(ustensil)) {
            this.unique_ustensil.push(ustensil);
            this.unique_ustensil.filter((item,
                index) => this.unique_ustensil.indexOf(item) === index);
            //console.log(ustensil);
            this.ustensil+= `<li><a id="items2" class="dropdown-item" href="#">${ustensil}</a></li>`;
            }
        
        });
        //console.log(unique_ustensil)

        this.appliances.forEach((appliances) => {
            if (!this.unique_appliances.includes(appliances)) {
                this.unique_appliances.push(appliances);
                this.unique_appliances.filter((item,
                    index) => this.unique_appliances.indexOf(item) === index);
                //console.log(ustensil);
                this.appliance+= `<li><a id="items3" class="dropdown-item" href="#">${appliances}</a></li>`;  
                }
        });

        const inner = `

        <div class="dropdown1">
            <div id="Recherche1">
                    <form class="Form-Inline My-2 My-Lg-0" id="form">
                        <div class="Recherche-Barr">
                            <input id ="Ingredient" class="Recherche-Ingredient btn-primary" type="Search" Placeholder="Rechercher un ingredient">
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
        this.displaytag();
        this.search();

       
    }
}