const URL_PAGE =("https://type.fit/api/quotes")
fetch("https://type.fit/api/quotes")
fetch(URL_PAGE)
.then((result)=> result.json())
.then(console.log)


