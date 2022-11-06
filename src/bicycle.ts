/**
 * This program has information about the bike class
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-11-03
 */

import Vehicle from './vehicle'

class Bicycle extends Vehicle {
  private cadence = 0

  // getter method for cadence
  getCadence (): number {
    return this.cadence
  }

  // this method calculates the acceleration
  accelerate (appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // this method displays text
  ringBell (): void {
    console.log('Ding ding!')
  }

  // this method displays information about the bike
  status (): void {
    super.status()
    console.log(`
    ---> Cadence: ${this.cadence}
    `)
  }
}

// export class for the main to use its methods
export = Bicycle
