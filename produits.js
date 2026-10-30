

const produits =[
    {id: 1, nom:'clavier', categorie:'Accessoires', prix:120, stock: 5 },
    {id: 2, nom:'Souris', categorie:'Accessoires', prix:80, stock: 8 },
    {id: 3, nom:'Ecran', categorie:'Informatique', prix:900, stock: 0 },
    {id: 4, nom:'Casque', categorie:'Accessoires', prix:240, stock: 3 },
];
console.table(produits);

const  STOCKsup = produits.filter( p=>p.stock >0 );
console.table(STOCKsup);
console.log(STOCKsup.length);

const valeurstock=produits.reduce((total,p)=>total+(p.stock * p.prix),0);
 console.log(valeurstock);

 if (STOCKsup.length===0){
    console.log("aucun produit disponible a la vendre");
 }else{    
const prixminimale=STOCKsup.reduce((min, p)=>{
    return p.prix <min.prix ? p:min
});
console.log(prixminimale);    
 }


 const resume=produits.map(p=> `${p.nom} - ${p.prix} MAD - ${p.stock} unites`);
 console.log(resume);

 function estValid(produit){
    return Number.isFinite(produit.prix) && 
    Number.isFinite(produit.stock) && 
    produit.prix>0 && 
    produit.stock>0;
 }
 console.log(estValid({prix: 150, stock: 10}));
 console.log(estValid({prix: -5, stock: 10}));



const moinsCher = produits
  .filter(p => p.stock > 0)
  .reduce((min, p) => p.prix < min.prix ? p : min);
const { nom, prix, stock, categorie, id } = moinsCher;
console.log(nom, prix, stock); 
