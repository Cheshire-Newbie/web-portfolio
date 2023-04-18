// const tick = 1000 / 60

function easeInOutSine(progress) {
    return -(Math.cos(Math.PI * progress) - 1) / 2;
}

function easeInSine(progress) {
    return 1 - Math.cos((progress * Math.PI) / 2);
}

export default class Line {
    constructor(cx, cy, angle, length, color, ctx, easing = "ease-in-out", alpha = 0) {
        this.cx = cx
        this.cy = cy
        this.angle = angle
        this.delay = 0
        let start = this.getNewPos(cx, cy, -length / 2, -length / 2, angle)
        let end = this.getNewPos(cx, cy, length / 2, length / 2, angle)
        this.x1 = start.x
        this.y1 = start.y
        this.x2 = end.x
        this.y2 = end.y
        this.length = length
        this.color = color
        this.alpha = alpha
        this.currentColor = color.replace("alpha", this.alpha)
        this.previousProgress = 0
        this.ctx = ctx
        this.easing = null
        this.totalTime = 0
        this.queue = []
        this.target = null
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

    getNewPos(x, y, dx, dy, angle) {
        return {
            x: x + dx * Math.cos(angle),
            y: y - dy * Math.sin(angle)
        }
    }

    queueTarget(cx, cy, angle, duration, delay, reverse = false, length = null, keepAlpha = false, absoluteDelay = false) {
        if(absoluteDelay) this.totalTime = delay
        else this.totalTime += delay
        let target = {cx, cy, angle, duration, delay, reverse, length, keepAlpha, timeStart: this.totalTime, timeEnd: this.totalTime+duration, index: this.queue.length}
        let previousTarget = this.queue[this.queue.length-1] ? this.queue[this.queue.length-1] : this
        if(target.length === null) target.length = previousTarget.length
        target.speed = {            
            x: (target.cx - previousTarget.cx) / duration,
            y: (target.cy - previousTarget.cy) / duration,
            r: (target.angle - previousTarget.angle) / duration,
            l: (target.length - previousTarget.length) / duration,
        }
        this.queue.push(target)
        this.totalTime += duration
        if(!this.target) this.target = target
    }

    nextTarget() {
        let target = null
        let i = this.target.index + 1
        if(this.queue[i]) target = this.queue[i]
        // while(target && !(target.start <= elapsed <= target.end)) target = this.nextTarget(elapsed, i+1)
        return target
    }

    motionTick(elapsed) {
        if(!this.completed.finished) {
            if(this.target) {
                let currentTarget = this.target
                if(this.target.timeEnd < elapsed) {
                    //if we are beyond the target.timeEnd time and need to get new target
                    let nextTarget = this.nextTarget()
                    this.target = nextTarget
                    if(nextTarget) {
                        //if current target isn't the last target
                        this.previousProgress = 0
                        currentTarget = nextTarget
                    } else {
                        elapsed = currentTarget.timeEnd
                        //if we've reached last target
                    }
                }
                if(currentTarget.timeStart <= elapsed) {
                    let currentTime = elapsed - currentTarget.timeStart
                    let endTime = currentTarget.timeEnd - currentTarget.timeStart
                    let timeProgress = currentTime / endTime
                    let progress = this.easing(timeProgress)
                    let progressChange = progress - this.previousProgress
                    this.previousProgress = progress

                    this.angle += currentTarget.speed.r * progressChange * currentTarget.duration
                    this.length += currentTarget.speed.l * progressChange * currentTarget.duration
                    this.cx += currentTarget.speed.x * progressChange * currentTarget.duration
                    this.cy += currentTarget.speed.y * progressChange * currentTarget.duration
                    let start = this.getNewPos(this.cx, this.cy, -this.length / 2, -this.length / 2, this.angle)
                    let end = this.getNewPos(this.cx, this.cy, this.length / 2, this.length / 2, this.angle)
                    if(!currentTarget.keepAlpha) {
                        if (!currentTarget.reverse) this.alpha = progress
                        else this.alpha = 1 - progress
                        this.currentColor = this.color.replace("alpha", Math.round(1000*this.alpha)/1000)
                    }
                    this.x1 = start.x
                    this.y1 = start.y
                    this.x2 = end.x
                    this.y2 = end.y
                }
            } else this.completed.finish()
        }
    }

    draw() {
        this.ctx.strokeStyle = this.currentColor
        this.ctx.lineWidth = 2
        this.ctx.beginPath()
        this.ctx.moveTo(this.x1, this.y1)
        this.ctx.lineTo(this.x2, this.y2)
        this.ctx.stroke()
    }
}