led.plot(0, 0)
basic.forever(function () {
    for (let Ligne = 0; Ligne <= 4; Ligne++) {
        for (let colonne = 0; colonne <= 5; colonne++) {
            basic.pause(500)
            led.plot(Ligne, colonne)
            led.unplot(Ligne, colonne - 1)
        }
    }
})
