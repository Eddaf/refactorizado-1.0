export const CATALOG_PRODUCTS = [
  {
    id: 1,
    name: "Polera Básica Algodón",
    type: "polera",
    category: "Algodon",
    description: "Polera 100% algodón, cómoda y duradera",
    image: "imagenes/PolerasAlgodon/poleraBlancoALG1.png",
    variants: [
      { color: "blanco", size: "S", price: 55, stock: 15 },
      { color: "blanco", size: "M", price: 55, stock: 20 },
      { color: "blanco", size: "L", price: 55, stock: 18 },
      { color: "negro", size: "S", price: 55, stock: 12 },
      { color: "negro", size: "M", price: 55, stock: 10 },
      { color: "azul", size: "M", price: 55, stock: 8 }
    ]
  },
  {
    id: 2,
    name: "Polera Cuello V",
    type: "polera", 
    category: "V",
    description: "Polera con cuello en V, estilo moderno",
    image: "imagenes/PolerasCuelloV/poleraBlancoCV1.png",
    variants: [
      { color: "blanco", size: "M", price: 60, stock: 8 },
      { color: "blanco", size: "L", price: 60, stock: 10 },
      { color: "negro", size: "L", price: 60, stock: 5 }
    ]
  },
  {
    id: 3,
    name: "Saco Elegante",
    type: "saco",
    category: "Sacos",
    description: "Saco formal para ocasiones especiales",
    image: "imagenes/Sacos/sacoLARG1.png",
    variants: [
      { color: "negro", size: "M", price: 189, stock: 5 },
      { color: "negro", size: "L", price: 189, stock: 3 },
      { color: "gris", size: "L", price: 189, stock: 4 }
    ]
  },
  {
    id: 4,
    name: "Blusa Estampada",
    type: "blusa",
    category: "Blusas",
    description: "Blusa con estampados elegantes",
    image: "imagenes/Blusas/blusaEST1.png",
    variants: [
      { color: "blanco", size: "S", price: 77, stock: 12 },
      { color: "blanco", size: "M", price: 77, stock: 15 },
      { color: "rosa", size: "M", price: 77, stock: 8 }
    ]
  }
];