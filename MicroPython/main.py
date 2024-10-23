"""
/* Copyright (c) 2024 MTHS All rights reserved
Created by: Peter Zerbinos
Created on: Sep 2024
This program displays the highest number out of two randomly selected numbers.
"""

from microbit import *
import random

# setup
display.show(Image.HAPPY)

# variables
random_number1 = random.randint(0, 99)
random_number2 = random.randint(0, 99)

# display 1st number
def display_number1():
    display.clear()
    display.scroll("#1:")
    display.show(random_number1)
    display.show(Image.HAPPY)

# display 2nd number
def display_number2():
    display.clear()
    display.scroll("#2:")
    display.show(random_number2)
    display.show(Image.HAPPY)

# check for button a press
while True:
    if button_a.is_pressed():
        display_number1()
    
    if button_b.is_pressed():
        display_number2()

# shake for highest number

if accelerometer.was_gesture("shake"):
    display.clear()
    if random_number1 > random_number2:
        display.show(random_number1)
    else:
        display.show(random_number2)
