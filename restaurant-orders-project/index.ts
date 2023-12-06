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

  console.log(getMaxPrice(PriceBracket.Medium))