

absolute_data = []
data = []
filter = ""



window.onload = function() {

    console.log("Window loaded")
    setInterval(updateCurrentList, 500);

    let searchBar = document.getElementById('headlineBar_search');

    searchBar.addEventListener('input', function() {
        console.log('User started typing: ', this.value);
        filter = this.value;
        filterData();
    });


}


function filterData(){

    if (filter != "") {

        data_new = []

        for (let x = 0; x < absolute_data.length; x++) {

            id = absolute_data[x].wallet

            if (id.includes(filter)) {
                data_new.push(absolute_data[x])
            }

        }

        data = data_new

    } else {

        data = absolute_data
    }
}






async function updateCurrentList() {

    console.log("Another interval.")

    absolute_data = await getCurrentDBstate();
    filterData();
    console.log(1)
    updateCurrentListDOM();

}


function updateCurrentListDOM(){

    DOMlist = document.getElementById("itemList");
    DOMlist.innerHTML = "";

    console.log(2)    

    data = data;

    for (let x = 0; x < data.length; x++) {

        console.log(3)

        generateItem("Unknown", data[x].wallet, data[x].co2)
    
    }

}





