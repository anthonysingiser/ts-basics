import { getObstacleEvents } from "./computer-vision";

interface AutonomousCar {
  isRunning: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
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
  steeringControl;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
  respond(events: Events) {
    if (this.isRunning === false) {
      return "car is not running";
    }
    Object.keys(events).forEach((eventKey) => {
      if (!eventKey) {
        return;
      } else if (eventKey === "ObstacleLeft") {
        this.steeringControl.turn("right");
      } else if (eventKey === "ObstacleRight") {
        this.steeringControl.turn("left");
      }
    });
    return;
  }
}

const steering = new SteeringControl();

const autonomousCar = new Car({ isRunning: true, steeringControl: steering });

autonomousCar.respond(getObstacleEvents());
