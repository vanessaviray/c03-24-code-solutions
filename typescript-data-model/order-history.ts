interface Order {
  orderPlaced: string;
  total: string;
  shipTo: string;
  orderNum: string;
  delivered: boolean;
  deliveryDate?: string;
  itemsOrdered: object;
}

const orderHistory: Order[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: '$34.00',
    shipTo: 'JS Masher',
    orderNum: '# 114-3941689-8772232',
    delivered: true,
    deliveryDate: 'Aug 8,2020',
    itemsOrdered: [
      {
        productName: 'JavaScript for Impatient Programmers',
        quantity: 1,
        price: '$31.55',
        returnWindow: 'Sep 7, 2020',
      },
    ],
  },
  {
    orderPlaced: 'July 19, 2020',
    total: '$44.53',
    shipTo: 'JS Smasher',
    orderNum: '#113-9984268-1280257',
    delivered: true,
    deliveryDate: 'Jul 20,2020',
    itemsOrdered: [
      {
        productName: 'The Timeless Way of Building',
        quantity: 1,
        price: '$41.33',
        returnWindow: 'Aug 19, 2020',
      },
    ],
  },
  {
    orderPlaced: 'July 4, 2020',
    total: '$17.22',
    shipTo: 'JS Smasher',
    orderNum: '#114-2875557-9059409',
    delivered: true,
    deliveryDate: 'Jul 7, 2020',
    itemsOrdered: [
      {
        productName:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adpater',
        quantity: 1,
        price: '$15.98',
        returnWindow: 'Aug 5, 2020',
      },
    ],
  },
  {
    orderPlaced: 'July 3, 2020',
    total: '$138.93',
    shipTo: 'JS Smasher',
    orderNum: '#113-2883177-2648248',
    delivered: true,
    deliveryDate: 'Jul 5, 2020',
    itemsOrdered: [
      {
        productName:
          'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        quantity: 1,
        price: '$94.95',
        returnWindow: 'Aug 4, 2020',
      },
      {
        productName: 'The Art of Sql',
        quantity: 1,
        price: '$33.99',
        returnWindow: 'Aug 4 , 2020',
      },
    ],
  },
];
