let extensionList =[]
fetch('./data.json')
.then(response=>response.json())
.then(data => {
    extensionList=data
    console.log(extensionList[1])


} )
.catch(err => console.error("Erreur de chargement :", err));

