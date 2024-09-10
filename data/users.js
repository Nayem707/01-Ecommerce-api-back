const users = [
  {
    userId: 'U001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, New York, NY, USA',
    phone: '+1-555-1234',
    joinDate: '2022-01-15',
    purchaseHistory: [
      {
        productId: 'N001',
        productName: 'Autumn Collection Jacket',
        purchaseDate: '2023-09-01',
        quantity: 1,
        price: 120,
        total: 120,
      },
      {
        productId: 'F001',
        productName: 'Air Max 2024',
        purchaseDate: '2023-08-21',
        quantity: 1,
        price: 180,
        total: 180,
      },
    ],
    wishlist: ['T001', 'S001'],
    cart: [
      {
        productId: 'T001',
        quantity: 1,
      },
    ],
  },
  {
    userId: 'U002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    address: '456 Elm St, Los Angeles, CA, USA',
    phone: '+1-555-5678',
    joinDate: '2021-03-22',
    purchaseHistory: [
      {
        productId: 'S001',
        productName: 'Slim Fit Jeans',
        purchaseDate: '2023-07-15',
        quantity: 2,
        price: 60,
        total: 120,
      },
      {
        productId: 'T001',
        productName: 'Leather Belt',
        purchaseDate: '2023-06-12',
        quantity: 1,
        price: 250,
        total: 250,
      },
    ],
    wishlist: ['F001'],
    cart: [],
  },
  {
    userId: 'U003',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    address: '789 Oak St, Chicago, IL, USA',
    phone: '+1-555-9876',
    joinDate: '2023-02-10',
    purchaseHistory: [],
    wishlist: ['N001', 'F001'],
    cart: [
      {
        productId: 'N001',
        quantity: 1,
      },
      {
        productId: 'F001',
        quantity: 1,
      },
    ],
  },
  {
    userId: 'U004',
    name: 'Nayem Islam',
    email: 'nayem@example.com',
    address: '789 Oak St, Chicago, IL, USA',
    phone: '+1-555-9876',
    joinDate: '2023-02-10',
    purchaseHistory: [],
    wishlist: ['N001', 'F001'],
    cart: [
      {
        productId: 'N001',
        quantity: 1,
      },
      {
        productId: 'F001',
        quantity: 1,
      },
    ],
  },
];

module.exports = users;
