<template>
    <div class="cart">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <span class="item-info">{{ item.name }} - ₱{{ item.price }}</span>
        <div class="quantity-controls">
          <input type="number" v-model="item.updatedQuantity" class="item-quantity" min="0">
          <button @click="updateItem(item)" class="update-btn">Update</button>
          <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
        </div>
      </div>
      <div class="total">Total: ₱{{ total }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    props: ['items'],
    data() {
      return {
        updateQuantityMap: {}
      };
    },
    computed: {
      total() {
        return this.items.reduce((acc, item) => acc + (item.price * (this.updateQuantityMap[item.id] || item.quantity)), 0);
      }
    },
    methods: {
      updateItem(item) {
        const updatedQuantity = parseInt(item.updatedQuantity);
        if (!isNaN(updatedQuantity) && updatedQuantity >= 0) {
          
          item.quantity = updatedQuantity;
          
          this.$emit('update-total', this.total);
        }
      },
      removeItem(id) {
        this.$emit('remove-item', id);
      }
    },
  };
  </script>
  
  
  <style scoped>
  .cart {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .item-info {
    flex: 1;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
  }
  
  .item-quantity {
    width: 50px;
  }
  
  .update-btn {
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  
  .update-btn:hover {
    background-color: #218838;
  }
  
  .remove-btn {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .remove-btn:hover {
    background-color: #c82333;
  }
  
  .total {
    margin-top: 10px;
    font-weight: bold;
  }
  </style>
  