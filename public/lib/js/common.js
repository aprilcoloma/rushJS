
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
 

            // for (var i = 0; i < descList; i++) {
            //     var foundItems = searchableElement[i].innerHTML,
            //         arrayEachItems = arrayItems.push(foundItems);

            //     if (searchFilterValue === arrayItems[i]) {
            //         var matchedItem = arrayItems[i];
            //         console.log(matchedItem);
            //     } else {
            //         // console.log("No match found.");
            //     }
            // }
        };

        listSearchableItems('searchable-group');
    };


// var listSearchableItems = function(a) {
//     var searchableAreaGroup = document.getElementById(a),
//         searchableElement = searchableAreaGroup.getElementsByClassName('searchable'),
//         descList = searchableElement.length,
//         arrayItems = [];
        

//     for (var i = 0; i < descList; i++) {
//         var foundItems = searchableElement[i].innerHTML; 
//         arrayEachItems = arrayItems.push(foundItems);    
//     }
    
//     console.log(arrayItems);
//     var arrayItemsCount = arrayItems.length;

//     var searchFilter = document.getElementById('search_box_txt'),
//         searchFilterValue = document.getElementById('search_box_txt').value;

//     // function detectInput() {
//     //     console.log(searchFilterValue);
//     //    // if (searchFilterValue > 0 ) {
//     //    //      var searchPattern = new RegExp(/^[a-zA-Z0-9-]+$/);

//     //    //      if (searchFilterValue.match(searchPattern)) {
//     //    //          for(x = 0; x < arrayItemsCount; x++) {
                    
//     //    //          }
                

//     //    //      } else {
//     //    //          alert(false);
//     //    //      }


//     //    // } else {
//     //    //      return false;
//     //    // }

//     // };

    

// };

// listSearchableItems('searchable-group');





/** SEARCH FILTER **/
// var searchFilter = document.getElementById('search_box_txt'),
//     searchFilterValue = document.getElementById('search_box_txt').value;

// searchFilter.onkeyup = function () {
//    alert("input detected");
// }



/** REGEX TEST **/
// var textArray = ["hello", "Perry", "catching-fire-cover.jpg", "Katy", "jay-z"],
//  arrLen = textArray.length;

// for(i=0; i < arrLen; i++) {
//  // console.log(textArray[i]);

//  var textPat = new RegExp(/^[a-zA-Z0-9-]+$/),
//      repText = textArray[i].match(textPat);
// };









