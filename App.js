import { View, Text } from 'react-native';

export default function App() {
  const produits = [
    { id: 1, nom: 'Clavier', prix: 120, stock: 5 },
    { id: 2, nom: 'Souris', prix: 80, stock: 8 },
    { id: 3, nom: 'Ecran', prix: 900, stock: 0 },
    { id: 4, nom: 'Casque', prix: 240, stock: 3 },
  ];

  const disponibles = produits.filter(p => p.stock > 0);
  const total = produits.reduce((s, p) => s + p.prix * p.stock, 0);
  const moinsCher = disponibles.reduce((a, b) => a.prix < b.prix ? a : b);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Catalogue des produits</Text>
      <Text>Catalogue produits - IAIL S5</Text>
      
      <Text>Produits disponibles: {disponibles.length} / {produits.length}</Text>
      <Text>Valeur totale du stock: {total} MAD</Text>
      <Text>Produit le moins cher: {moinsCher.nom} - {moinsCher.prix} MAD</Text>
    </View>
  );
}