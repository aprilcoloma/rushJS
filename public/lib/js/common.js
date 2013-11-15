
var searchableAreaGroup = document.getElementById('searchable-group');
var searchableElement = searchableAreaGroup.getElementsByTagName('span');
var descList = searchableElement.length;
for (var i = 0; i <= descList; i++) {
    console.log(searchableElement[i].innerHTML);
}

