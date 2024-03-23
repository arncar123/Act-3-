<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/login" class="login-btn">Login</router-link>
    <product-list :products="products" @add-to-cart="addToCart"></product-list>
    <cart :items="cartItems" @update-quantity="updateQuantity" @remove-item="removeItem"></cart>
  </nav>
  <router-view/>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    Cart
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Corn Beef', price: 10 },
        { id: 2, name: 'Ligo Sardines', price: 3 },
        { id: 3, name: 'Century Tuna', price: 5 },
        { id: 4, name: 'Alaska Condense', price: 7 },
        { id: 5, name: 'Alaska Evaporada', price: 6 },
        { id: 6, name: 'Verginia Sausage', price: 8 },
        { id: 7, name: 'Calamares', price: 11 },
      
      ],
      cartItems: []
    };
  },
  methods: {
    addToCart(product) {
      const index = this.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        this.cartItems[index].quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity({ id, quantity }) {
      const index = this.cartItems.findIndex(item => item.id === id);
      if (index !== -1) {
        this.cartItems[index].quantity = quantity;
      }
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    }
  }
};
</script>

<style>

</style>
