let link = "https://buschecnc.sharepoint.com/:f:/s/Engineering/Em3qxiLwJ8xLodJ6y6LZgVcBGUb0-cZ5fIhYEu2wNhea7g"
let rep1 = link.replace(/:/g,'%3A').replace(/\./g,'%2E');
// let rep2 = rep1.replace(/\./g,'%2E');
//let uriEncoded = encodeURIComponent(link);
//console.log(`link=${link}`);
console.log(`encoded=${rep1}`);
//console.log(`uriEncoded=${uriEncoded}`);
