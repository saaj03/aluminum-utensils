const products = [
  {
    id: 1,
    name: "Aluminum Wok (Kadai)",
    description: "Fast heating aluminum kadai for daily cooking",
    sizes: [
      { size: "10 inch", weight: "750g", price: 699 },
      { size: "12 inch", weight: "1kg", price: 799 },
      { size: "14 inch", weight: "1.4kg", price: 899 }
    ],
    reviews: [
      { user: "Rahul", comment: "Very good quality", rating: 5 },
      { user: "Ayesha", comment: "Lightweight and strong", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "Aluminum Degchi",
    description: "Heavy duty degchi for bulk cooking",
    sizes: [
      { size: "3 L", weight: "900g", price: 899 },
      { size: "5 L", weight: "1.3kg", price: 999 },
      { size: "10 L", weight: "2.5kg", price: 1399 }
    ],
    reviews: [
      { user: "Imran", comment: "Perfect for large family", rating: 5 }
    ]
  }
];

module.exports = products;
