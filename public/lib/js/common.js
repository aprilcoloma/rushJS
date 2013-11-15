

var listSearchableItems = function(a) {
    var searchableAreaGroup = document.getElementById(a),
        searchableElement = searchableAreaGroup.getElementsByClassName('searchable'),
        descList = searchableElement.length;

    for (var i = 0; i < descList; i++) {
        console.log(searchableElement[i].innerHTML);
    }
};


var searchFilter = document.getElementById('search_box_txt'),
    searchFilterValue = document.getElementById('search_box_txt').value;

searchFilter.onkeyup = function () {
   alert("input detected");
}









