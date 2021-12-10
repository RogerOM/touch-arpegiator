input.onPinPressed(TouchPin.P1, function () {
    if (tone >= 1100) {
        tone = 220
    }
    tone += 110
    music.playTone(tone, music.beat(BeatFraction.Half))
})
let tone = 0
tone = 220
