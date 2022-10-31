const userData = [
  {
    username: "AdminJ",
    password: "InspectorGadget4321",
    name: "Bart",
    email: "theboss@gmail.com",
    address: "44 Starter Street",
    isAdmin: true,
  },
];

const orderData = [
  {
    userId: 1,
    isFulfilled: true,
    totalPrice: 1000,
    shippingAddress: "44 Starter Street",
  },
];

const reviewData = [
  {
    itemId: 1,
    title: "Great Desktop for the price",
    content: "Would reccomend to anyone on a budget",
    userId: 1,
  },
];

const orderItemData = [
  {
    itemId: 1,
    orderId: 1,
    quantity: 1,
  },
];

const itemData = [
  {
    itemId: 1,
    name: "Ryzen PowerUp9000",
    type: "Desktop",
    description: "A budget friendly option for performance",
    price: 875,
    stock: 50,
    imgUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-gaming-pcs-1637005899.jpg?crop=1xw:1xh;center,top&resize=768:*",
  },

  {
    itemId: 2,
    name: "Alienware gigaLaptop",
    type: "Laptop",
    description: "A budget friendly portible option with performance in mind",
    price: 950,
    stock: 50,
    imgUrl:
      "https://i.dell.com/das/dih.ashx/1000w/sites/csimages/Product_Imagery/all/fp-aw-laptops-hero-a-1920x1440-v2.png",
  },

  {
    itemId: 3,
    name: "Alienware TowerPower5050",
    type: "Desktop",
    description: "A strong performance model great for visual design",
    price: 1300,
    stock: 25,
    imgUrl:
      "https://i.dell.com/das/dih.ashx/1000w/sites/csimages/Banner_Imagery/all/awaurora-r13-desktop-hero_lldsom_1920x1440.png",
  },
];

module.exports = {
  userData,
  orderData,
  reviewData,
  orderItemData,
  itemData,
};
