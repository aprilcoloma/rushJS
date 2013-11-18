
//if input field is not empty
function detectInput() {
    var doc = document,
    listItems = doc.getElementsByTagName('li'),
    itemsCount = listItems.length,
    searchFilter = doc.getElementById('search_box_txt'),
    searchFilterValue = doc.getElementById('search_box_txt').value,
    searchValuePattern = /[a-zA-Z0-9-_]+/g;
    // searchPattern = new RegExp(/^[a-zA-Z0-9-]+$/);

    for (var x = 0; x < itemsCount; x++) {

        var textContentList = listItems[x].textContent, 
            searchValueResult = textContentList.match(searchValuePattern),
            itemFound = searchValueResult.indexOf(searchFilterValue);

        if (itemFound !== -1) {
            console.log(itemFound);
            console.log(searchValueResult)
            listItems[x].className = "item active";
        } else {
            listItems[x].className = "item inactive";
        }
    }

};






