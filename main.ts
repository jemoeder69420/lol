basic.forever(function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    if (Kitronik_Move_Motor.measure() < 10) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 1)
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 1)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 1)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 1)
    }
})
