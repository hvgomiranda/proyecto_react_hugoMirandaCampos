export const data = [
    {
      id: '1',
      name: 'zapatos',
      description: 'zapatos negros',
      category: "calzado",
      img: "../media/img/zapatos.jpg",
      price: 25000,
      stock: 30,
    },
    {
      id: '2',
      name: 'medias',
      description: 'medias 3/4 blancas',
      category: "medias",
      img: "../media/img/medias-blancas.jpg",
      price: 500,
      stock: 300,
    },
    {
      id: '3',
      name: 'pantalones',
      description: 'jeans claros',
      category: "pantalones",
      img: "../media/img/jeans.jpg",
      price: 8000,
      stock: 100,
    },
    {
      id: '4',
      name: 'camisa',
      description: 'camisas blancas',
      category: "arriba",
      img: "../media/img/camisa-lino-beige.jpg",
      price: 5500,
      stock: 100,
    },
    {
      id: '5',
      name: 'sombrero',
      description: 'sombrero fino marrón',
      category: "tocado",
      img: "../media/img/sombrero-fieltro.jpeg",
      price: 3400,
      stock: 30,
    },
  ];
  
  export const taskFetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = true ? resolve(data) : reject(data);
        return result;
      }, 3000);
    });
  };