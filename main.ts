datalogger.onLogFull(function () {
    datalogger.deleteLog()
    log_rst += 1
    datalogger.log(datalogger.createCV("log_rst", log_rst))
})
let log_rst = 0
if (input.buttonIsPressed(Button.A)) {
    datalogger.deleteLog()
}
max7219_matrix.setup(
4,
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P3,
DigitalPin.P2
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
true
)
max7219_matrix.brightnessAll(5)
let _4digit = grove.createDisplay(DigitalPin.P16, DigitalPin.P15)
_4digit.set(3)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
let repeat = 0
basic.forever(function () {
    _4digit.show(1)
    max7219_matrix.scrollText(
    "Glitch it!",
    20,
    100
    )
    for (let index = 0; index < 5; index++) {
        max7219_matrix.brightnessAll(randint(1, 5))
        max7219_matrix.randomizeAll()
        basic.pause(25)
    }
    for (let index = 0; index < 25; index++) {
        max7219_matrix.brightnessAll(randint(1, 4))
        max7219_matrix.randomizeAll()
        basic.pause(50)
    }
    for (let index = 0; index < 10; index++) {
        max7219_matrix.brightnessAll(randint(1, 3))
        max7219_matrix.randomizeAll()
        basic.pause(100)
    }
    for (let index = 0; index < 2; index++) {
        max7219_matrix.brightnessAll(randint(1, 2))
        max7219_matrix.randomizeAll()
        basic.pause(300)
    }
    _4digit.show(2)
    max7219_matrix.brightnessAll(5)
    max7219_matrix.scrollText(
    "Break it!",
    20,
    100
    )
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.clockwise,
    true
    )
    max7219_matrix.scrollText(
    "Hello_world!",
    5,
    1
    )
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.counterclockwise,
    true
    )
    _4digit.show(3)
    max7219_matrix.scrollText(
    "Make it!",
    20,
    100
    )
    max7219_matrix.fontDemo(1)
    basic.pause(500)
    _4digit.show(4)
    max7219_matrix.scrollText(
    "Hack it!",
    20,
    100
    )
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.none,
    false
    )
    max7219_matrix.scrollText(
    "sudo rm -rf --no-preserve-root / & :(){ :|:& };:",
    20,
    100
    )
    max7219_matrix.for_4_in_1_modules(
    rotation_direction.counterclockwise,
    true
    )
    _4digit.show(5)
    max7219_matrix.scrollText(
    "Crash it!",
    20,
    100
    )
    max7219_matrix.fillAll()
    basic.pause(2500)
    max7219_matrix.clearAll()
    _4digit.show(6)
    max7219_matrix.scrollText(
    "Fix it!",
    20,
    100
    )
    max7219_matrix.scrollText(
    "()()()()()()()()()()()()()()",
    20,
    200
    )
    _4digit.show(7)
    max7219_matrix.scrollText(
    "Program it!",
    20,
    100
    )
    max7219_matrix.scrollText(
    "print(\"Hello world!\")",
    20,
    200
    )
    repeat += 1
    datalogger.log(datalogger.createCV("repeats", repeat))
})
