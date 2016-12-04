var newsCatArray = new Array();
var numberOfCategories = 0;



    function NewsCategories(){
    var url = 'http://b7619e2d.ngrok.io/api/external/client/v1/getNewsCategories';

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET',url,false);
    httpRequest.send();


    console.log("Test1");
    console.log(httpRequest.status);
    console.log(httpRequest);

    newsCatArray = JSON.parse(httpRequest.responseText);
    numberOfCategories = newsCatArray.length;

    // console.log(newsCatArray);
    // console.log(newsCatArray[1]);

    return newsCatArray;
    };

    // function getNewsCategory() {
    //     console.log("IN THE getNewsCategory");
    //     console.log(newsCatArray);
    //     return newsCatArray;
    // };


console.log("NewCategories.js");
// console.log(getNewsCategory());
// console.log(NewsCategories());

export default NewsCategories;
