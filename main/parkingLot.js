var owner = require('./owner')
var airportSecurity = require('../main/airportSecurity')
class ParkingLOt {

    constructor() {
        this.parkingLot = []
    }

    // function to park the car
    parkCar(car) {
        if (!this.checkParkingLotFull()) {
            if (typeof car === 'object') {
                this.parkingLot.push(car)
                owner.informParkingLotFull()
                airportSecurity.informParkingLotFull()
                return true
            }
            throw new Error("car must be an object")
        }
        return "Parking lot full"

    }
    unParkCar(car) {
        if (this.parkingLot.includes(car)) {
            this.parkingLot.pop(car)
            owner.informOwnerSpaceIsAvailable()
            return true
        }
        throw new Error("car not parked")
    }

    checkParkingLotFull() {
        return this.parkingLot.length === 1
    }

}

module.exports = ParkingLOt