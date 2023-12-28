import { getObstacleEvents } from "./computer-vision";

interface AutonomousCar {
  isRunning: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
}

interface Events {
  [event: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log("Executing: " + command);
  }
  turn(direction: string) {
    this.execute("turn " + direction);
  }
}

class Car implements AutonomousCar {
  isRunning;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
  }
  respond(events: Events) {
    if (this.isRunning === false) {
      return "car is not running";
    }
    return;
  }
}

const steering = new SteeringControl();
steering.turn("right");

const autonomousCar = new Car({ isRunning: false });
console.log(autonomousCar.respond(getObstacleEvents()));