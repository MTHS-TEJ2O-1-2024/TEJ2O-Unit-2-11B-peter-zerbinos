/* Copyright (c) 2024 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Sep 2024
 * This program displays the highest number out of two randomly selected numbers.
*/

//setup
basic.showIcon(IconNames.Happy)

//variables
let randomNumber1: number
let randomNumber2: number

//assign variables to random numbers
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

//display 1st number
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1:")
    basic.showNumber(randomNumber1)
    basic.showIcon(IconNames.Happy)
})

//display 2nd number
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2:")
    basic.showNumber(randomNumber2)
    basic.showIcon(IconNames.Happy)
})

//shake for highest number
input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    if (randomNumber1 > randomNumber2)
        basic.showNumber(randomNumber1)
    else (randomNumber1 < randomNumber2)
        basic.showNumber(randomNumber2)
})
