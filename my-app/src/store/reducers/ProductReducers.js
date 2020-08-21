
const initialState = {
  products: [
      {id: 1, title: 'Potatoes', brand: "Farmo's fresh", price: '20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAwo6iVJAUCas7Hlq_-K0c7KBG-FjAPrSIXq945N4fCeXYRJNt2pkoEpvKzDnFmzFxQAylcXtXcnkIlRog7ZMXR4kUAophoGAafw&usqp=CAU&ec=45690274', amount: 100, availability: 'Yes', category : 'Vegetables', discount: '50', quantity: '1Kg'},
      {id: 2, title: 'Onions', brand: "Farmo's fresh", price: '15', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRT9Owt_m4EevIoLh7r0DWeyESxqkitu4l5fTQ5VKEfAtP1aoUf3jOWJdCmZMUuvx6cjTiJ_u2m7wPI4JcubichWVQ2cAlvuhKH6w&usqp=CAU&ec=45690274', amount: 100, availability: 'Yes', category : 'Vegetables', discount: '40', quantity: '1Kg'},
      {id: 3, title: 'Cauliflower', brand: "Farmo's fresh", price: '45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7ViyxlWnP-5XWNoFJROupL8XUuSzj26iqnQ&usqp=CAU', amount: 50, availability: 'Yes', category : 'Vegetables', discount: '30', quantity: '1Kg'},
      {id: 4, title: 'Capsicum ', brand: "Farmo's fresh", price: '20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH3-Vy2jUSv_xReHrwa8ufDPtPNTvdWiTS_g&usqp=CAU', amount: 50, availability: 'Yes', category : 'Vegetables', discount: '20', quantity: '500gm'},
      {id: 5, title: 'Apple ', brand: "Farmo's fresh", price: '150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSe1wXbz9CSA9F-auPnC7eqzpj8KuQd1J_3w&usqp=CAU', amount: 50, availability: 'Yes', category : 'Fruits', discount: '10', quantity: '1Kg'},
      {id: 6, title: 'Pineapple ', brand: "Farmo's fresh", price: '60', image: 'https://tnimage.s3.hicloud.net.tw/photos/2020/03/03/1583221200-5e5e09d0c45c2.jpg', amount: 40, availability: 'Yes', category : 'Fruits', discount: '20', quantity: '750gm'},
      {id: 7, title: 'Guava ', brand: "Farmo's fresh", price: '50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-bpEGKEDmAc3l5Q1crTvJT8ouxj6-HKr11g&usqp=CAU', amount: 20, availability: 'Yes', category : 'Fruits', discount: '30', quantity: '1Kg'},
      {id: 8, title: 'Mango Dashehri ', brand: "Farmo's fresh", price: '120', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMYUXAu4w73ynVabjxSzDZ5S_BUjBZ2BgI6m5kCD-VLLyatJQsshUK2vXCNE3W7zkQxZWCmgr-s69dj0tWWa6T5ACylROzevXiXQ&usqp=CAU&ec=45690274', amount: 50, availability: 'Yes', category : 'Fruits', discount: '10', quantity: '1Kg'},
      {id: 9, title: 'Peach ', brand: "Farmo's fresh", price: '40', image: 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/peaches.jpg?itok=J0OgsTUa', amount: 10, availability: 'Yes', category : 'Fruits and Vegetables', discount: '20', quantity: '500gm'},
      {id: 10, title: 'Frozen Peas ', brand: "Safal", price: '60', image: 'https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASSAFAL-FROZENBIGB9858324A9F8D04/1561497037103_0.jpg?imwidth=320&impolicy=hq', amount: 5, availability: 'Yes', category : 'Frozen food', discount: '10', quantity: '1Kg'},
      {id: 11, title: 'French Fries ', brand: "Maccain", price: '120', image: 'https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASMCCAIN-FRENCBIGB985832A676C25A/1562237036408_14.jpg?imwidth=320&impolicy=hq', amount: 25, availability: 'Yes', category : 'Frozen Food', discount: '5', quantity: '500gm'},
      {id: 12, title: 'Maggi Cup Noodles ', brand: "Nestle", price: '40', image: 'https://images-na.ssl-images-amazon.com/images/I/812ySd81W%2BL._SL1500_.jpg', amount: 15, availability: 'Yes', category : 'Ready Made', discount: '20', quantity: '50gm'},
      {id: 13, title: 'Instant Poha ', brand: "Haldiram", price: '150', image: 'https://www.ishopindian.com/images/D/mtr_pohabox_n.jpg', amount: 10, availability: 'Yes', category : 'Ready Made', discount: '20', quantity: '230gm'},
      {id: 14, title: 'Margherita Pizza', brand: "Dr.Oetker", price: '200', image: 'https://www.checkers.co.za/medias/10551499EA-20190726-Media-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w1ODE4NDZ8aW1hZ2UvcG5nfGltYWdlcy9oZjYvaGNlLzg4NjAwOTI4NTgzOTgucG5nfDY3NmYyZmI3MGQ5MjYyOWE1YjU0MDRmNThhMjZiNzdiYjU3NWE1MDViNWI5N2JhOWNiNTEwNWViMjAwNDRiOGU', amount: 10, availability: 'Yes', category : 'Ready Made', discount: '30', quantity: '424gm'},
      {id: 15, title: 'Lays Value Pack', brand: "Lays", price: '90', image: 'https://www.bigbasket.com/media/uploads/p/xxl/1208706_3-lays-potato-chips-cream-onion-joyful-magic-masala-flirty-tomato-tango-90-g-each.jpg', amount: 10, availability: 'Yes', category : 'Snacks', discount: '20', quantity: '270gm'},
      {id: 16, title: 'Kurkure Value Pack', brand: "Pepsi", price: '60', image: 'https://lh3.googleusercontent.com/proxy/x6tCVmeNAwMXEkWmUoqDfAyAkb8r1vlZMRy61SYcjy3g3EW_Nt0avnzTk4Fc1QQPorL_KJuaVVuCJOf9zXx_UsYPIGSFK1Z2YrXpua0RI9gi1PPHO3UVOw', amount: 10, availability: 'Yes', category : 'Snacks', discount: '10', quantity: '60gm'}
  ]
};
 
const productReducer = (state = initialState, action) => {
 
    return state;
};
 
export default productReducer;