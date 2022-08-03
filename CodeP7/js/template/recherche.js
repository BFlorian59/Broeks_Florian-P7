class Recherche{
    constructor()
    {
        this.$recherche = document.querySelector(".Recherche");              

    }

        


    createrecherche(){      

        const recherche = `
        <form class="Form-Inline My-2 My-Lg-0">
            <div class="Recherche-Barr">
                <input class="Recherche-Input" type="Search" Placeholder="Recherche une recette">
                <a href="#" class="Recherche-Icone">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </form>     
        `
        this.$recherche.innerHTML = recherche;
        return this.$recherche;
    }
}