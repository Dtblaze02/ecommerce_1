export const products = [
  /* your products should fall between any of these categories (
  fashion(cloth, bags, shoes, watch etc), 
  groceries(garri, rice, plantain, beans, milo, iru etc), 
  beauty(creams, soaps, makeups etc), 
  electronics (clipper, phones, laptops, tvs etc)
  )*/
    {
      id: 1,
      name: 'Bag 1',
      price: '$19.99',
      image: require('../../assets/images/bag-1.png'),
      category:'fashion',
      quantity: '20',
      description: '',
      discount:''
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$49.99',
      image: require('../../assets/images/shoe-1.png'),
      category:'fashion',
      quantity: '5',
      description: '',
      discount:''
    },
    {
        id: 3,

        name: 'Product 3',
        price: '$14.99',
        image: require('../../assets/images/shoe-2.png'),
        category:'fashion',
        quantity: '10',
        description: '',
        discount:''
      },
      {
        id: 4,
        name: 'Product 4',
        price: '$19.99',
        image: require('../../assets/images/watch-1.png'),
        category:'fashion',
        quantity: '4',
        description: '',
        discount:''
      },


      {
        id: 30,
        name: 'Product 30',
        price: '$24.99',
        image: require('../../assets/images/belt-1.png'),
        category:'fashion',
        quantity: '10',
        description: '',
        discount:''
      },

      {
      id: 5,
        name: 'Product 5',
        price: '$50.99',
        image: require('../../assets/images/footwear.png'),
        category:'fashion',
        quantity: '34',
        description: '',
        discount:''
      },
      {
        id: 6,
          name: 'Product 6',
          price: '$10.99',
          image: require('../../assets/images/watch-6.jpg'),
          category:'electronics',
          quantity: '40',
          description: '',
          discount:''
        },
        {
          id: 7,
            name: 'Product 7',
            price: '$150.99',
            image: require('../../assets/images/w-shoes_1.jpg'),
            category:'electronics',
            quantity: '60',
            description: '',
            discount:''
          },
          {
            id: 19,
            name: 'Product 19',
            price: '$34.99',
            image: require('../../assets/images/kinomo-1.jpg'),
            category:'fashion',
            quantity: '15',
            description: '',
            discount:''       
        },
              
    // Add more products as needed
  ];