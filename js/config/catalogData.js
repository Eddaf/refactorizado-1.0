export const CATALOG_PRODUCTS = [
  {
    id: 1,
    name: "Polera Básica Algodón",
    type: "polera",
    category: "PolerasAlgodon",
    description: "Polera 100% algodón, cómoda y duradera",
    image: "imagenes/PolerasAlgodon/poleraBlancoALG1.png",
    variants: [
      { color: "blanco", size: "S", price: 55, stock: 15 },
      { color: "blanco", size: "M", price: 55, stock: 20 },
      { color: "blanco", size: "L", price: 55, stock: 18 },
      { color: "negro", size: "S", price: 55, stock: 12 },
      { color: "negro", size: "M", price: 55, stock: 10 }
    ]
  },
  {
    id: 2,
    name: "Polera Cuello V",
    type: "polera",
    category: "PolerasCuelloV",
    description: "Polera con cuello en V, estilo moderno",
    image: "imagenes/PolerasCuelloV/poleraBlancoCV1.png",
    variants: [
      { color: "blanco", size: "M", price: 60, stock: 8 },
      { color: "blanco", size: "L", price: 60, stock: 10 },
      { color: "azul", size: "M", price: 60, stock: 5 }
    ]
  },
  // Más productos...
];