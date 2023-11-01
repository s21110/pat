input.onButtonPressed(Button.A, function () {
    開關 = true
    music.play(music.stringPlayable("E F F A C5 G F D ", 120), music.PlaybackMode.UntilDone)
    開關 = false
})
let 開關 = false
開關 = false
basic.forever(function () {
    if (開關) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
