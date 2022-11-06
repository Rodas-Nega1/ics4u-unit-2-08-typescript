/**
 * This class creates an integer stack
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-04
 */

class Vehicle {
  private color: string
  private speed = 0
  private readonly maxSpeed: number

  constructor (color: string, maxSpeed: number) {
    this.color = color
    this.maxSpeed = maxSpeed
  }

  // getter method for vehicle color
  getColor (): string {
    return this.color
  }

  // setter method for vehicle color
  setColor (userColor: string): void {
    this.color = userColor
  }

  // setter method for vehicle speed
  setSpeed (userSpeed: number): void {
    this.speed = userSpeed
  }

  // getter method for speed
  getSpeed (): number {
    return this.speed
  }

  // getter method for max speed
  getMaxSpeed (): number {
    return this.maxSpeed
  }

  // method for vehicle acceleration
  accelerate (accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // method for vehicle brake
  break (breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }

  // this displays the status
  status (): void {
    console.log(`
     ---> Speed: ${this.getSpeed()}
     ---> Max speed: ${this.getMaxSpeed()}
     ---> Color: ${this.getColor()}
    `)
  }
}

// export class for the main to use its methods
export = Vehicle
