let ClockConstruct = function (clockW, clockH, unit) {
    this.clockW = clockW;
    this.clockH = clockH;
    this.unit = unit;

    this.frame = function (clockBg, idFrame) {
        let clockF = document.createElement('div');
        clockF.style.width = this.clockW + this.unit;
        clockF.style.height = this.clockH + this.unit;
        clockF.style.backgroundColor = clockBg;
        clockF.id = 'frameClock';
        document.getElementById(idFrame).appendChild(clockF);
    }

    this.hourNeedle = function (hNeedW, hNeedH, hNeedU, hNeedColor) {
        let hNeedle = document.createElement('div');
        hNeedle.style.width = hNeedW + hNeedU;
        hNeedle.style.height = hNeedH + hNeedU;
        hNeedle.style.backgroundColor = hNeedColor;
        hNeedle.style.position = 'absolute';
        hNeedle.style.top = this.clockH / 2 - hNeedH + hNeedU;
        hNeedle.style.left = (this.clockW - hNeedW) / 2 + hNeedU;

        let frameClock = document.getElementById('frameClock');
        frameClock.appendChild(hNeedle);

        let count = setInterval(function () {
            let time = new Date();
            hNeedle.style.transformOrigin = 'center bottom';
            hNeedle.style.transform = 'rotate(' + time.getHours() * 30 + 'deg)';
        }, 1000);

    }

    this.minNeedle = function (mNeedW, mNeedH, mNeedU, mNeedColor) {
        let mNeedle = document.createElement('div');
        mNeedle.style.width = mNeedW + mNeedU;
        mNeedle.style.height = mNeedH + mNeedU;
        mNeedle.style.backgroundColor = mNeedColor;
        mNeedle.style.position = 'absolute';
        mNeedle.style.top = (this.clockH / 2) - mNeedH + mNeedU;
        mNeedle.style.left = (this.clockW - mNeedW) / 2 + mNeedU;
        let frameClock = document.getElementById('frameClock');
        frameClock.appendChild(mNeedle);


        let count = setInterval(function () {
            let time = new Date();
            mNeedle.style.transformOrigin = 'center bottom';
            mNeedle.style.transform = 'rotate(' + time.getMinutes() * 6 + 'deg)';
        }, 1000);

    }

    this.secNeedle = function (sNeedW, sNeedH, sNeedU, sNeedColor) {
        let sNeedle = document.createElement('div');
        sNeedle.style.width = sNeedW + sNeedU;
        sNeedle.style.height = sNeedH + sNeedU;
        sNeedle.style.backgroundColor = sNeedColor;
        sNeedle.style.position = 'absolute';
        sNeedle.style.top = (this.clockH / 2) - sNeedH + sNeedU;
        sNeedle.style.left = (this.clockW - sNeedW) / 2 + sNeedU;
        let frameClock = document.getElementById('frameClock');
        frameClock.appendChild(sNeedle);


        let count = setInterval(function () {
            let time = new Date();
            sNeedle.style.transformOrigin = 'center bottom';
            sNeedle.style.transform = 'rotate(' + time.getSeconds() * 6 + 'deg)';
        }, 1000);

    }
}

let blackClock = new ClockConstruct(400, 400, 'px');

blackClock.frame('black', 'container');
blackClock.secNeedle(2, 200, 'px', 'blue');
blackClock.minNeedle(4, 150, 'px', 'red');
blackClock.hourNeedle(4, 100, 'px', 'white');

let miniClock = new ClockConstruct(100, 100, 'px');
miniClock.frame('blue', 'container');
miniClock.hourNeedle(2, 10, 'px', 'white');
miniClock.minNeedle(2, 20,'px', 'white');
miniClock.secNeedle(2, 30, 'px', 'white');

