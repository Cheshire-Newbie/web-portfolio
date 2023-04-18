// const tick = 1000 / 60

function easeInOutSine(progress) {
    return -(Math.cos(Math.PI * progress) - 1) / 2;
}

function easeInSine(progress) {
    return 1 - Math.cos((progress * Math.PI) / 2);
}

// import robotomono from "../assets/Roboto_Mono/static/RobotoMono-Regular.ttf"

export default class Text {
    constructor(text, x, y, size, color, ctx, font, easing = "ease-in-out") {
        // let font = new FontFace("Signika Negative", "url(https://fonts.gstatic.com/s/signikanegative/v20/E21x_cfngu7HiRpPX3ZpNE4kY5zKSPmJXkF0VDD2RAqnS43rvdk.woff2)")
        // let font = new FontFace("Philosopher", "url(https://fonts.gstatic.com/s/philosopher/v19/vEFV2_5QCwIS4_Dhez5jcWBuT00.woff2)")
        // document.fonts.add(font)
        // this.fontLoaded = false
        // font.load().then((ff) => { this.font = ff; this.fontLoaded = true })
        this.font = font
        this.x = x
        this.y = y
        this.text = text
        this.size = size
        this.queue = []
        this.target = null
        this.color = color
        this.totalTime = 0
        this.alpha = 0
        this.currentColor = color.replace("alpha", this.alpha)
        this.ctx = ctx
        this.easing = null
        this.completed = {
            promise: null,
            finish: null,
            finished: false
        }
        this.completed.promise = new Promise(resolve => this.completed.finish = resolve)
        this.completed.promise.then(() => this.completed.finished = true)
        switch (easing) {
            case "ease-in-out":
                this.easing = easeInOutSine
                break;
            case "ease-in":
                this.easing = easeInSine
                break;
        }
    }

    queueTarget(duration, delay, reverse = false, absoluteDelay = false) {
        if (absoluteDelay) this.totalTime = delay
        else this.totalTime += delay
        const target = { duration, delay, reverse, timeStart: this.totalTime, timeEnd: this.totalTime + duration, index: this.queue.length }
        this.queue.push(target)
        this.totalTime += duration
        if (!this.target) this.target = target
    }

    nextTarget() {
        let target = null
        let i = this.target.index + 1
        if (this.queue[i]) target = this.queue[i]
        // while(target && !(target.start <= elapsed <= target.end)) target = this.nextTarget(elapsed, i+1)
        return target
    }

    motionTick(elapsed) {
        if (!this.completed.finished) {
            if (this.target) {
                let currentTarget = this.target
                if (this.target.timeEnd < elapsed) {
                    //if we are beyond the target.timeEnd time and need to get new target
                    let nextTarget = this.nextTarget()
                    this.target = nextTarget
                    if (nextTarget) {
                        //if current target isn't the last target
                        currentTarget = nextTarget
                    } else {
                        elapsed = currentTarget.timeEnd
                        //if we've reached last target
                    }
                }
                let currentTime = elapsed - currentTarget.timeStart
                if (currentTime > 0) {
                    let endTime = currentTarget.timeEnd - currentTarget.timeStart
                    let timeProgress = currentTime / endTime
                    if (!currentTarget.reverse) this.alpha = this.easing(timeProgress)
                    else this.alpha = 1 - this.easing(timeProgress)
                    this.currentColor = this.color.replace("alpha", this.alpha)
                }
            } else this.completed.finish()
        }
    }

    measureText() {
        this.ctx.font = `${this.size}px "Signika Negative"`;
        return this.ctx.measureText(this.text)
    }

    draw() {
        // this.ctx.font = this.font;
        // this.ctx.font = `${this.size}px "Signika Negative"`;
        this.ctx.font = `${this.size}px "Signika Negative"`;
        this.ctx.fillStyle = this.currentColor
        this.ctx.fillText(this.text, this.x, this.y)

    }
}