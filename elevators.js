class Building {
  constructor(numElevators, numFloors) {
    this.numFloors = numFloors;
    this.elevators = new Array(numElevators);
    for (let i = 0; i < numElevators; i++) {
      this.elevators[i] = new Elevator(numFloors)
    }
  }
  // call(floor, isGoingUp) - when someone presses the up/down arrow, and we need to find them an elevator
  // isGoingUp === true: up arrow pressed; isGoingUp === false: down arrow
  call(floor, isGoingUp) {
    let closestAvailable = null;
    for (let i = 0; i < this.elevators.length; i++) {
      console.log('elevator #', i, 'on floor: ', this.elevators[i].currentFloor);
      // find the closest elevator

      // check if there is an elevator already on the way

      // highest priority - empty elevator already on this floor
      if (this.elevators[i].isOccupied() === false && this.elevators[i].currentFloor == floor) {
        closestAvailable = i;
      }
    }
    this.elevators[closestAvailable].addStop(floor);
  }
}

class Elevator {
  constructor(numFloors) {
    // can likely just inherit this
    this.numFloors = numFloors;
    this.trips = 0;
    this.maintenanceMode = false;
    this.stopsRemaining = [];
    // 1 is ground floor
    this.currentFloor = 1;
  }
  // addStop(floor) - appends the floor to this elevators array of stops to make
  addStop(floor) {
    // should sort these to ensure shortest path, in the event multiple people get on an elevator and press buttons in
    // an order that would be sub-optimal
    this.stopsRemaining.push(floor)
  }
  // 2. Each elevator will report as is moves from floor to floor.
  move() {

  }
  // 3. Each elevator will report when it opens or closes its doors.
  toggleDoors() {

  }

  // we assume that when an elevator has stops to make, it is occupied
  // even if it is on the way to pick someone up, or someone hit additional buttons and got off
  isOccupied() {
    if (this.stopsRemaining[0] != null) {
      return true;
    }
    return false;
  }
  // isOnTheWayTo(floor, isGoingUp) - returns true if this elevator will reach the given floor on its current path
  isOnTheWayTo(floor, isGoingUp) {
    // assume stopsRemaining are in a reasonable order, and the first in the list is the next stop

    //elevator isn't moving
    if !this.isOccupied() {
      return false;
    }
    // elevator is going up, and will reach given floor
    if ((this.currentFloor <= floor <= this.stopsRemaining[0]) && isGoingUp) {
      return true;
    }
    // elevator is going down, and will reach given floor
    else if ((this.stopsRemaining[0] <= floor <= this.currentFloor) && !isGoingUp) {
      return true;
    }
    return false;
  }

// 4. An elevator cannot proceed above the top floor.

// 5. An elevator cannot proceed below the ground floor (assume 1 as the min)
// 6. An elevator request can be made at any floor, to go to any other floor.

// 7. When an elevator request is made, the unoccupied elevator closest to it will answer the
// call, unless an occupied elevator is moving and will pass that floor on its way. The exception is that if an unoccupied elevator is already stopped at that floor, then it will always have the highest priority answering that call.

// if an occupied elevator is moving and will pass that floor on its way, we should also ensure that it is moving in the appropriate direction
// ... how does an elevator know if it is occupied ? I'll assume that people always press a button when they get on, and if there are remaining stops, it is occupied


// 8. The elevator should keep track of how many trips it has made, and how many floors it has passed. The elevator should go into maintenance mode after 100 trips, and stop functioning until serviced, therefore not be available for elevator calls.
  requiresMaintenance() {
    if (this.trips < 100) {
      this.maintenanceMode = true;
    }
  }

}

var building = new Building(10,10)
building.call(1, true)

console.log('building: ', building);