input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    base_speed = 50
    basic.showNumber(degree)
    for (let index = 0; index <= 10; index++) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, index + base_speed, base_speed)
        basic.pause(1000)
        basic.showNumber(degree)
    }
})
let base_speed = 0
let degree = 0
degree = input.compassHeading()
basic.forever(function () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 0)
    basic.showNumber(degree)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 55, 50)
    basic.showNumber(5)
    basic.pause(2000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 126, 100)
    basic.showNumber(26)
    basic.pause(2000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 190, 150)
    basic.showNumber(40)
    basic.pause(2000)
})
