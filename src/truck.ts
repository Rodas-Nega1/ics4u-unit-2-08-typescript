/**
 * This is the truck class
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-11-03
 */

import Vehicle from './vehicle'

class Truck extends Vehicle {
  // field for license plate
  private licensePlate: string

  // This gets the variables and the color, licensePlate, and hte max Speed
  constructor (color: string, licensePlate: string, maxSpeed: number) {
    super(color, maxSpeed)
    this.licensePlate = licensePlate
  }

  // getter method for license plate
  getLicensePlate (): string {
    return this.licensePlate
  }

  // setter method for license plate
  setLicensePlate (licensePlateNew: string): void {
    this.licensePlate = licensePlateNew
  }

  // method that calculates the applied air pressure
  provideAir (airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }

  // this method displays the status
  status (): void {
    super.status()
    console.log(`
     ---> License Plate: ${this.licensePlate}
    `)
  }
}

// export class for the main to use its methods
export = Truck
