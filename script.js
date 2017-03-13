function wikiPull() {
    var searchTerm = document.getElementById("searchTerm").value;
    searchTerm = encodeURIComponent(searchTerm);
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + 
    "&limit=10&namespace=0&format=json&callback=?";
    
    getWikiData(url);
}

function getWikiData(url) {
    $.getJSON(url, function(results) {
        $("#wikiData").empty();
        for (var i = 0; i < results[1].length; i++) {
            console.log(results[1][i]);
            $("#wikiData").append("<a href=\"" + results[3][i] + "\" target=\"_blank\">" + "<div class=\"results container\">" + "<h2>" + results[1][i] + "<\/h2>" + "<p>" + results[2][i] + "<\/p>" + "<\/div><\/a>");
        }
    });
}