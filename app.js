const sports=document.querySelector("#sports");
const tech=document.querySelector("#tech");
const entert=document.querySelector("#entert");
sports.addEventListener("click",getsports);
tech.addEventListener("click",gettech);
entert.addEventListener("click",getenter);
const apiarry=["https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=de371855895d444a9eac47444d7a6abe",
               "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=de371855895d444a9eac47444d7a6abe",
               "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=de371855895d444a9eac47444d7a6abe"
              ]
var id;
function getsports(){
id=0;
fetchnews();
}
function gettech() {
	id=1;
	fetchnews();
}
function getenter()
{
	id=2;
	fetchnews();
}


function fetchnews()
{
 
  	api=apiarry[id];

  fetch(api).then(response=>response.json())
            .then(function(respJSON) {
                  if (respJSON.status == "ok") {
                  	          console.log(respJSON);
                              displayNews(respJSON);
                    } else {
                         console.log("not ok");
                        }
                  
               })
            .catch(e=>console.log(e));

}

 function displayNews(respJSON) {
        const articles = respJSON.articles;
        var articlesHTML = "";

        for (const i in articles) {
          const article = articles[i];
          articlesHTML += `<div class="box"><ul>
          <li> <img class="featured-image" src="${article.urlToImage}"/></li>
          <li> <a class="title" href="${ article.url }">${article.title}</a></li>
          <li class="author">Source: ${article.source.name}</li>
          
          </ul></div>`;
        }

        document.getElementById("news-container").innerHTML = articlesHTML;
      }
