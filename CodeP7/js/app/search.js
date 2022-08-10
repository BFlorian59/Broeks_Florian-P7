 class  Search{

    static  tabresult = [];
    static tabTag = []
    static strSearch = [];

    static globalSearch(){

        return this.tabresult.filter(search => search.name.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()) ||search.description.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()) ||search.ingredients.toLocaleLowerCase().includes(input_search.toLocaleLowerCase()) );
        //TODO return un array de recette       
    }


}

