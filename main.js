const URL_PAGE =("https://type.fit/api/quotes")
fetch("https://type.fit/api/quotes")
fetch(URL_PAGE)
.then(res =>res.json())
.then(resJson => console.log(resJson));




const form = document.querySelector('form');

const quoteList = document.querySelector("main.centered");

let quotesList = document.querySelector('ul');
quotesList.addEventListener("click",
function(ev){
    if(ev.target.quotesList === 'LI'){
        ev.target.classList.toggle('checked');
    }
})

const updatePage = (quote) => {

    let article = document.createElement("article");
    article.classList.add("card");
        

    let quoteText = document.createElement("p");
    quoteText.textContent = `${quote.text}`;
    article.append(quoteText);

    let showAnswerButton = document.createElement("button");
    
    showAnswerButton.textContent =`Reveal Answer`;
    article.append(showAnswerButton);
    
   

    quoteList.append(article);

    quoteText.addEventListener("click",(event)=>{
        event.target.classList.toggle("hidden")
    
   
    });
    showAnswerButton.addEventListener("click", (event)=>{
        let hiddenAnswer =document.createElement("p");
        
        hiddenAnswer.textContent =`${quote.author}`;
        article.append(hiddenAnswer);
 
     }) 

};
const showError = (error) =>{
    console.log(error);
        let err =document.createElement("p");
        err.textContent = `${error}`;
        document.body.prepend(err);
};

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    fetch(URL_PAGE)
    .then((result)=> result.json())
    .then((json)=> {
        console.log(json)
        json.forEach((obj)=> updatePage(obj));
    })
    .catch(showError);
});