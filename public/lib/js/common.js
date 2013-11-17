
    //if input field is not empty
    function detectInput() {
        var doc = document,
        listItems = doc.getElementsByTagName('li'),
        itemsCount = listItems.length,
        searchFilter = doc.getElementById('search_box_txt'),
        searchFilterValue = doc.getElementById('search_box_txt').value,
        searchPattern = new RegExp(/^[a-zA-Z0-9-]+$/);

        var listSearchableItems = function(a) {
            var searchableAreaGroup = doc.getElementById(a);
                
                // searchableElement = searchableAreaGroup.getElementsByClassName(b),
                // descList = searchableElement.length,
                // arrayItems = [];

            for (var j = 0; j < itemsCount; j++) {
                var textContent = listItems[j].textContent,
                    searchValuePattern = /[a-zA-Z0-9-_]+/g,
                    searchValueResult = textContent.match(searchValuePattern),
                    itemFound = searchValueResult.indexOf(searchFilterValue);
            

                    if (itemFound === -1) {
                        return false;

                    } else {

                        console.log(itemFound);
                        console.log(searchValueResult);   
                    }
            }
 
        };

        listSearchableItems('searchable-group');
    };






