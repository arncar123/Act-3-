<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <span class="product-name">{{ product.name }}</span>
        <span class="product-price">₱{{ product.price }}</span>
        <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    props: ['products'],
    methods: {
      addToCart(product) {
        const cartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };
        this.$emit('add-to-cart', cartItem);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .product-item {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
  }
  
  .product-name {
    font-weight: bold;
  }
  
  .product-price {
    color: green;
  }
  
  .add-to-cart-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 5px;
  }
  
  .add-to-cart-btn:hover {
    background-color: #0056b3;
  }
  </style>
  