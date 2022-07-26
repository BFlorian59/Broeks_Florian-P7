class Dropdowns{
    constructor(tabUstenssibles,tabAppareils,tabIngredients, recipe)
    {
        this.$dropdowns = document.getElementById("dropdowns");
        this.$tag = document.getElementById("tag");
        this.recipe = recipe;
        this.ingredients = tabIngredients;
        this.ingredient='';
        this.ustensils=tabUstenssibles;
        this.ustensil ='';
        this.appliances=tabAppareils;
        this.appliance='';
        this.$wrapper = document.createElement('div');
        this.uniqueingre =[];
        this.unique_appliances =[];
        this.unique_ustensil =[];
    }


    // permet de changer le css quand on click sur les 3 dropdowns pour afficher la barre de recherche
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
                document.querySelector("#dropdownMenuButton1").setAttribute("style", "border-radius: 0%; width: 71%; margin-right: -170%; padding-top: 3%;");
                document.querySelector(".dropdown1").setAttribute("style", "margin-right: 32%;")
                listboxOptions.style.display = "block";
                
            } else {

                document.querySelector("#dropdownMenuButton1").setAttribute("style", "width: 110%;");
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
                document.querySelector("#dropdownMenuButton2").setAttribute("style", "border-radius: 0%; width: 18%; padding-top: 3%;");
                document.querySelector("#fleche_down2").style.display = "none";
                document.querySelector("#fleche_up2").style.display = "block";
                document.querySelector(".dropdown2").setAttribute("style", "margin-right: 11%;")
                listboxOptions2.style.display = "block";

            } else {
                document.querySelector("#dropdownMenuButton2").setAttribute("style", "width: 110%;");
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
                document.querySelector("#dropdownMenuButton3").setAttribute("style", "border-radius: 0%; width: 28%; margin-right: -50%; padding-top: 3%;");
                document.querySelector("#fleche_down3").style.display = "none";
                document.querySelector("#fleche_up3").style.display = "block";
                listboxOptions3.style.display = "block";
            } else {
                document.querySelector("#dropdownMenuButton3").setAttribute("aria-expanded", false);
                document.querySelector("#dropdownMenuButton3").setAttribute("style", "width: 110%;");
                document.querySelector("#Ustensils").style.display = "block";
                document.querySelector("#Recherche3").style.display = "none";
                document.querySelector("#fleche_up3").style.display = "none";
                document.querySelector("#fleche_down3").style.display = "block";
                listboxOptions3.style.display = "none";
            }
        });
        

    }

    // permet d'afficher les tags sélectionnés en haut des dropdowns
    displaytag(){
        document.querySelectorAll('.items').forEach(ingredient => {
            ingredient.addEventListener('click', () => {
                this.$tag.innerHTML += `
                <div class = 'liste_tag'>
                    <b>${ingredient.innerHTML}</b>
                    <a href="#" class="delete">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </a>
                </div>`
 
            })
        })

        document.querySelectorAll('.items2').forEach(ustensil => {
            ustensil.addEventListener('click', () => {
                this.$tag.innerHTML += `
                <div class = 'liste_tag2'>
                    <b>${ustensil.innerHTML}</b>
                    <a href="#" class="delete">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </a>
                </div>`
            })
        })

        document.querySelectorAll('.items3').forEach(appliance => {
            appliance.addEventListener('click', () => {
                this.$tag.innerHTML += `
                <div class = 'liste_tag3'>
                    <b>${appliance.innerHTML}</b>
                    <a href="#" class="delete">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </a>
                </div>`
            })
        })

        
    }

    // permet de filtrer les ingrédients, ustensil et les appareils présents dans les dropdowns 
    //et d'afficher les tags sélectionnés en haut des dropdowns quand on les filtre
    search(){
        var Ingredientinput = document.querySelector('#Ingredient');
        Ingredientinput.addEventListener('keyup', () =>{
            if ( Ingredientinput.value.length > 2) {
                const input = Ingredientinput.value;
                const result = this.uniqueingre.filter(ingres => ingres.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
                let suggestion1 ='';
                result.forEach(resultItems1 =>
                    suggestion1 += 
                    `<li ><a class="items dropdown-item"  href="#" >${resultItems1}</a></li>`
                )
                document.getElementById('dropdown-menu1').innerHTML = suggestion1;
                document.querySelectorAll('.items').forEach(ingredient => {
                    ingredient.addEventListener('click', () => {
                        this.$tag.innerHTML += `
                        <div class = 'liste_tag'>
                            <b>${ingredient.innerHTML}</b>
                            <a href="#" class="delete">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                        </div>`
                    })
                })
                                
            }
            else if (Ingredientinput.value.length < 3) {
                let suggestion1 ='';
                const result = this.uniqueingre;
                result.forEach(resultItems1 =>
                suggestion1 += 
                    `<li ><a class="items dropdown-item"  href="#" >${resultItems1}</a></li>`
                )
                document.getElementById('dropdown-menu1').innerHTML = suggestion1;
                document.querySelectorAll('.items').forEach(ingredient => {
                    ingredient.addEventListener('click', () => {
                        this.$tag.innerHTML += `
                        <div class = 'liste_tag'>
                            <b>${ingredient.innerHTML}</b>
                            <a href="#" class="delete">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                        </div>`
                    })
                })
                        
            }
        })
       
        
        


        const Appareilinput = document.querySelector('.Recherche-Appareil');
        Appareilinput.addEventListener('keyup', () =>{
            if ( Appareilinput.value.length > 2) {
                const input_appareil = Appareilinput.value;
                const result_appareils = this.unique_appliances.filter(appareils => appareils.toLocaleLowerCase().includes(input_appareil.toLocaleLowerCase()));
                let suggestion ='';
                result_appareils.forEach(resultItems2 =>
                suggestion += 
                    `<li ><a class="items3 dropdown-item"  href="#" >${resultItems2}</a></li>`
                )
                document.getElementById('dropdown-menu2').innerHTML = suggestion;
                document.querySelectorAll('.items3').forEach(appareils => {
                    appareils.addEventListener('click', () => {
                        this.$tag.innerHTML += `
                        <div class = 'liste_tag3'>
                            <b>${appareils.innerHTML}</b>
                            <a href="#" class="delete">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                        </div>`
                    })
                })
            }
            else if (Appareilinput.value.length < 3) {
                let suggestion ='';
                const result = this.unique_appliances;
                result.forEach(resultItems2 =>
                suggestion += 
                    `<li ><a class="items3 dropdown-item"  href="#" >${resultItems2}</a></li>`
                )
                document.getElementById('dropdown-menu2').innerHTML = suggestion;
                document.querySelectorAll('.items3').forEach(appareils => {
                    appareils.addEventListener('click', () => {
                        this.$tag.innerHTML += `
                        <div class = 'liste_tag3'>
                            <b>${appareils.innerHTML}</b>
                            <a href="#" class="delete">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                        </div>`
                    })
                })
                        
            }
            
        })


        const Ustensilsinput = document.querySelector('.Recherche-Ustensil');
        Ustensilsinput.addEventListener('keyup', () =>{
            if ( Ustensilsinput.value.length > 2) {
                const input_ustensils = Ustensilsinput.value;
                const result_ustensils = this.unique_ustensil.filter(ustensils => ustensils.toLocaleLowerCase().includes(input_ustensils.toLocaleLowerCase()));
                let suggestion ='';
                result_ustensils.forEach(resultItems3 =>
                    suggestion += 
                    `<li ><a class="items2 dropdown-item"  href="#" >${resultItems3}</a></li>`
                )
                document.getElementById('dropdown-menu3').innerHTML = suggestion;
                document.querySelectorAll('.items2').forEach(ustensils => {
                    ustensils.addEventListener('click', () => {
                        console.log(ustensils.innerHTML)
                        this.$tag.innerHTML += `
                        <div class = 'liste_tag2'>
                            <b>${ustensils.innerHTML}</b>
                            <a href="#" class="delete">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                        </div>`
                    })
                })
            }
            else if (Ustensilsinput.value.length < 3) {
                let suggestion ='';
                const result =  this.unique_ustensil;
                result.forEach(resultItems3 =>
                suggestion += 
                    `<li ><a class="items2 dropdown-item"  href="#" >${resultItems3}</a></li>`
                )
                document.getElementById('dropdown-menu3').innerHTML = suggestion;
                document.querySelectorAll('.items2').forEach(ustensils => {
                    ustensils.addEventListener('click', () => {
                        this.$tag.innerHTML += `
                        <div class = 'liste_tag2'>
                            <b>${ustensils.innerHTML}</b>
                            <a href="#" class="delete">
                                <i class="fa-regular fa-circle-xmark"></i>
                            </a>
                        </div>`
                    })
                })
                        
            }
            
        })

    }
   
    // permet d'afficher et filtrer les doublons les ingrédients, ustensil et les appareils présents dans les dropdowns   
    createdropdowns(){

        
        this.ingredients.forEach((ingre) => {    
                if (!this.uniqueingre.includes(ingre.ingredient)) {
                    this.uniqueingre.push(ingre.ingredient);
                    this.uniqueingre.filter((item,
                        index) => this.uniqueingre.indexOf(item) === index);  
                    this.ingredient+= `<li ><a class=" items dropdown-item"  href="#" >${ingre.ingredient}</a></li>`;                    
                }   
            });
           

        this.ustensils.forEach((ustensil) => {
            if (!this.unique_ustensil.includes(ustensil.toLocaleLowerCase())) {
                this.unique_ustensil.push(ustensil.toLocaleLowerCase());
                this.unique_ustensil.filter((item,
                    index) => this.unique_ustensil.indexOf(item) === index);
                this.ustensil+= `<li><a class="items2 dropdown-item" href="#">${ustensil}</a></li>`;
            }
        
        });

        

        this.appliances.forEach((appliances) => {
            if (!this.unique_appliances.includes(appliances)) {
                this.unique_appliances.push(appliances);
                this.unique_appliances.filter((item,
                    index) => this.unique_appliances.indexOf(item) === index);
                this.appliance+= `<li><a class="items3 dropdown-item" href="#">${appliances}</a></li>`;  
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
                <i class="fa-sharp fa-solid fa-angle-up" id="fleche_up"></i>
                <i class="fa-sharp fa-solid fa-angle-down" id="fleche_down"></i>
                
            </button>
            <ul class="dropdown-menu" id="dropdown-menu1" aria-labelledby="dropdownMenuButton1">
                ${this.ingredient}
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
                <i  class="fa-sharp fa-solid fa-angle-up" id="fleche_up2"></i>
                <i class="fa-sharp fa-solid fa-angle-down" id="fleche_down2"></i>
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
                <i  class="fa-sharp fa-solid fa-angle-up" id="fleche_up3"></i>
                <i class="fa-sharp fa-solid fa-angle-down" id="fleche_down3"></i>
            </button>
            <ul class="dropdown-menu" id="dropdown-menu3" aria-labelledby="dropdownMenuButton3">
               ${this.ustensil}
            </ul>
        </div>

        `;
        this.$dropdowns.innerHTML = inner;
        this.addEventListeners();
        this.search();
        this.displaytag();
    
        const searchtag = new Search(this.recipe);
        searchtag.addEventtag();

       
    }
}