class Building {
  constructor(numElevators, numFloors) {
    this.numFloors = numFloors;
    this.elevators = new Array(numElevators);
    for (let i = 0; i < numElevators; i++) {
      this.elevators[i] = new Elevator(numFloors)
    }
  }
}

class Elevator {
  constructor(numFloors) {
    // can likely just inherit
    this.numFloors = numFloors;
    this.trips = 0;
    this.maintenanceMode = false;
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

// 8. The elevator should keep track of how many trips it has made, and how many floors it has passed. The elevator should go into maintenance mode after 100 trips, and stop functioning until serviced, therefore not be available for elevator calls.
  requiresMaintenance() {
    if (this.trips < 100) {
      this.maintenanceMode = true;
    }
  }

}

var building = new Building(1,10)

console.log('building: ', building);