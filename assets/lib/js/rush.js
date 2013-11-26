var rushFilter = function(a) {
    var doc = document,
        dbody = doc.body,
        getParent = doc.getElementById(a),
        searchFilter = doc.getElementById('search_box_txt'),
        searchLabel = doc.getElementById('search-label'),
        filterStatus = searchFilter.style.display;

    getParent.className = "rush-filter-list clearfix";
    searchFilter.style.display = "none";

    var toggleSearchInput = function() {
        if ( (searchFilter.value === "") && (searchFilter.style.display === "none") ) {

            searchFilter.style.display = "block";
            searchFilter.classList.add("active");
            searchFilter.classList.remove("hide");
            searchFilter.focus();
        }

        else if ( (searchFilter.value !== "") && (searchFilter.style.display === "block")) {
            searchFilter.style.display = "block";
            searchFilter.classList.add("hide");
            searchFilter.classList.remove("active");
        }

        else {
            searchFilter.style.display = "none";
            searchFilter.classList.add("hide");
            searchFilter.classList.remove("active");
        }
    };

    doc.addEventListener("click", toggleSearchInput);


    //detect if search input field has a value
    searchFilter.onkeyup = function() {
        
        var listItems = doc.getElementsByTagName('li'),
            itemsCount = listItems.length,
            searchFilterValue = searchFilter.value,
            searchValuePattern = /[a-zA-Z0-9-_]+/gi;
            // searchPattern = new RegExp(/^[a-zA-Z0-9-]+$/);

        for (var x = 0; x < itemsCount; x++) {

            var textContentList = listItems[x].textContent, 
                searchValueResult = textContentList.match(searchValuePattern),
                itemFound = searchValueResult.indexOf(searchFilterValue);


            // if a value exists in the array, make the matched items visible
            // if search filter value is empty, then make all the items visible
            if ((itemFound !== -1) || (searchFilterValue === "")) {
                listItems[x].className = "item active";
            }
            else {
                listItems[x].className = "item inactive";
            }
        }
    };

};

rushFilter('searchable-group');



