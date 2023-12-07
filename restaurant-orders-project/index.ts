import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

function getMaxPrice(bracket: PriceBracket){
    switch(bracket) {
      case PriceBracket.Low: {
        return 10
      }
      case PriceBracket.Medium: {
        return 20
      }
      case PriceBracket.High: {
        return 30
      }
      default : {
        return "Error getMaxPrice: Not a valid PriceBracket"
      }
    }
  }

console.log(getMaxPrice(PriceBracket.Medium), "maxPrice function test")

function getOrders(bracket: PriceBracket, orders: Order[][]): Order[][] {
  const filteredOrders: Order[][] = [];

  orders.forEach((item) =>
    filteredOrders.push(item.filter((el) => el.price <= getMaxPrice(bracket)))
  );
  return filteredOrders
}

console.log(getOrders(PriceBracket.Low, orders))

function printOrders(restaurants: Restaurant[], orders: Order[][]): void {
  orders.forEach((order) => {
    if (order.length > 0) {
      console.log(restaurants[orders.indexOf(order)].name);
      order.forEach((el) =>
        console.log(`- Order ${order.indexOf(el) + 1}: $${el.price}`)
      );
    }
  });
}

const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);