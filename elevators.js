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
    this.elevators.forEach((elevator) => {
      console.log('elevator on floor: ', elevator.currentFloor);
    })
  }
}

class Elevator {
  constructor(numFloors) {
    // can likely just inherit
    this.numFloors = numFloors;
    this.trips = 0;
    this.maintenanceMode = false;
    this.occupied = false;
    // 1 is ground floor
    this.currentFloor = 1;
  }
  // 2. Each elevator will report as is moves from floor to floor.
  move() {

  }
  // 3. Each elevator will report when it opens or closes its doors.
  toggleDoors() {

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

var building = new Building(1,10)
building.call(2, true)

console.log('building: ', building);