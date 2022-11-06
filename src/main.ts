/*
 * This program displays information based on multiple classes.
 *
 * @author  Rodas Nega
 * @version 1.0
 * @since   2022-11-03
 */

import Truck from './truck'
import Bicycle from './bicycle'

const bmx = new Bicycle('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadense to 10\n')
bmx.accelerate(10)
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')

const bigTruck = new Truck('Grey', 'HGC-3456F', 200)

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nApplyed air pressure of 10:')
bigTruck.provideAir(10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nDone.')
