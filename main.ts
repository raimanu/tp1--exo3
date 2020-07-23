led.plot(0, 0)
basic.forever(function () {
    for (let colonne = 0; colonne <= 4; colonne++) {
        if (led.point(0, 0)) {
            basic.pause(100)
            led.plot(0, 0)
            led.unplot(0, colonne - 1)
        }
    }
})
