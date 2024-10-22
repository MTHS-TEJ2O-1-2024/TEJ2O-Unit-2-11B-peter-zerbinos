/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

//variables
let randomNumber1: number
let randomNumber2: number

//generate random number 1
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

//display 1st number
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber1)
    basic.showIcon(IconNames.Happy)
})

//display 2st number
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber2)
    basic.showIcon(IconNames.Happy)
})

//shakeforrandom1
input.onGesture(Gesture.Shake, function() {
    if (randomNumber1 > randomNumber2)
    basic.showNumber(randomNumber1)
})

//shakeforrandom1
input.onGesture(Gesture.Shake, function () {
    if (randomNumber1 < randomNumber2)
        basic.showNumber(randomNumber2)
})
