function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    停止()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    停止()
})
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    200,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    200
    )
}
input.onButtonPressed(Button.A, function () {
    while (true) {
    	
    }
})
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    停止()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    停止()
})
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    while (超声波的值 > 10) {
        后退()
        超声波的值 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
        TM1650.showNumber(超声波的值)
    }
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
	
})
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
let 超声波的值 = 0
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
basic.showIcon(IconNames.Silly)
loops.everyInterval(100, function () {
    超声波的值 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    TM1650.showNumber(超声波的值)
})
