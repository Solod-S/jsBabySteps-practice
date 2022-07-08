// ------------------- 1й Вариант

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: 'whiskey', price: 100 }
 * { name: 'vodka', price: 30 }
 * { name: 'vine', price: 25 }
 * { name: 'brandy', price: 80 }
 */

const alcoholShopCart = {
  items: [],
  getItems() {
    return this.items;
  },

  add(product) {
    const { items } = this;
    for (const item of items) {
      const { name } = item;
      if (name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        items.splice(i, 1);
        console.log(`${productName} удалили из корзины`);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    const { items } = this;
    for (let item of items) {
      const { name } = item;
      if (name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;
    for (let item of items) {
      const { name } = item;
      if (name === productName) {
        item.quantity -= 1;
      }
    }
  },
};

alcoholShopCart.add({ name: 'whiskey', price: 100 });
alcoholShopCart.add({ name: 'vodka', price: 30 });
alcoholShopCart.add({ name: 'vine', price: 25 });
alcoholShopCart.add({ name: 'brandy', price: 80 });
alcoholShopCart.add({ name: 'brandy', price: 80 });

alcoholShopCart.remove('whiskey');
// console.table(alcoholShopCart.getItems());

// alcoholShopCart.clear();
// console.table(alcoholShopCart.getItems());

alcoholShopCart.increaseQuantity('vodka');
// console.table(alcoholShopCart.getItems());

alcoholShopCart.decreaseQuantity('vine');
alcoholShopCart.decreaseQuantity('brandy');
// console.table(alcoholShopCart.getItems());

console.table(alcoholShopCart.getItems());
console.log('Total: ', alcoholShopCart.countTotalPrice());
