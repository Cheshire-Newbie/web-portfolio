import Line from "./classes/line.js"
import Text from "./classes/text.js"
// const f = new FontFace("Philosopher", "url(https://fonts.gstatic.com/s/philosopher/v19/vEFV2_5QCwIS4_Dhez5jcWBuT00.woff2)")
let f = new FontFace("Signika Negative", "url(https://fonts.gstatic.com/s/signikanegative/v20/E21x_cfngu7HiRpPX3ZpNE4kY5zKSPmJXkF0VDD2RAqnS43rvdk.woff2)")
document.fonts.add(f)
// import {throttle} from "lodash"

export default {
    data: () => ({
        canvas: null,
        ctx: null,
        width: 487,
        height: 178,
        mx: 1,
        my: 1,
        mr: 1,
        background: "rgba(0, 0, 0, 1)",
        color: "rgba(255, 255, 255, alpha)",
        testLine: null,
        lines: [],
        currentLine: 0,
        throttledAnimate: null,
        throttledAnimateLine: null,
        animationStart: null,
        previousTimeStamp: null,
        done: false,
    }),
    mounted() {
        this.background = this.$vuetify.theme.currentTheme.background
        console.log(this.$vuetify.theme.currentTheme.background, this.$vuetify.theme.dark)
        if(!this.$vuetify.theme.dark) this.color = "rgba(0, 0, 1, alpha)"
        f.load().then((font) => {
            this.canvas = this.$refs.canvas
            this.ctx = this.canvas.getContext("2d")
            this.mx = this.canvas.clientWidth / this.width
            this.my = this.canvas.clientHeight / this.height
            this.mr = Math.sqrt(this.canvas.clientWidth * this.canvas.clientHeight) / Math.sqrt(this.width * this.height)
            this.canvas.height = this.height * this.my
            this.canvas.width = this.width * this.mx
            this.ctx.fillStyle = this.background
            this.ctx.fillRect(0, 0, this.width, this.height)
            let firstDelay = 3000
            let secondDelay = 10000

            let topLeftLine = new Line(85 * this.mx, 10 * this.my, 1.75 * Math.PI, 50 * this.mr, this.color, this.ctx)
            topLeftLine.queueTarget(75 * this.mx, 47.5 * this.my, 2.25 * Math.PI, 1000, 2500 + firstDelay, false, 50 * this.mr, false, true)
            topLeftLine.queueTarget(75 * this.mx, 47.5 * this.my, 2.25 * Math.PI, 1000, 500 + secondDelay, false, 0, true, true)
            this.lines.push(topLeftLine)

            let bottomLeftLine = new Line(85 * this.mx, 120 * this.my, 2.25 * Math.PI, 50 * this.mr, this.color, this.ctx)
            bottomLeftLine.queueTarget(75 * this.mx, 82.5 * this.my, 1.75 * Math.PI, 1000, 2750 + firstDelay, false, 50 * this.mr, false, true)
            bottomLeftLine.queueTarget(75 * this.mx, 82.5 * this.my, 1.75 * Math.PI, 1000, 500 + secondDelay, false, 0, true, true)
            this.lines.push(bottomLeftLine)

            let topRightLine = new Line(135 * this.mx, 10 * this.my, 2.25 * Math.PI, 50 * this.mr, this.color, this.ctx)
            topRightLine.queueTarget(145 * this.mx, 47.5 * this.my, 1.75 * Math.PI, 1000, 3000 + firstDelay, false, 50 * this.mr, false, true)
            topRightLine.queueTarget(145 * this.mx, 47.5 * this.my, 1.75 * Math.PI, 1000, 500 + secondDelay, false, 0, true, true)
            this.lines.push(topRightLine)

            let bottomRightLine = new Line(135 * this.mx, 120 * this.my, 1.75 * Math.PI, 50 * this.mr, this.color, this.ctx)
            bottomRightLine.queueTarget(145 * this.mx, 82.5 * this.my, 2.25 * Math.PI, 1000, 3250 + firstDelay, false, 50 * this.mr, false, true)
            bottomRightLine.queueTarget(145 * this.mx, 82.5 * this.my, 2.25 * Math.PI, 1000, 500 + secondDelay, false, 0, true, true)
            this.lines.push(bottomRightLine)

            let middleLine = new Line(161 * this.mx, -128 * this.my, (1.5 - 1 / 12) * Math.PI, 100 * this.mr, this.color, this.ctx, "ease-in-out")
            middleLine.queueTarget(110 * this.mx, 65 * this.my, (1.5 - 1 / 12) * Math.PI, 300, 4500 + firstDelay, false, 100 * this.mr, false, true)
            middleLine.queueTarget(110 * this.mx, 65 * this.my, (1.5 - 1 / 12) * Math.PI, 1000, 500 + secondDelay, false, 0, true, true)
            this.lines.push(middleLine)

            
            this.ctx.font = `${60 * this.mr}px "Signika Negative"`;
            let nameMeasurement = this.ctx.measureText("Marta")
            let nameHeight = nameMeasurement.actualBoundingBoxAscent + nameMeasurement.actualBoundingBoxDescent
            // let nameWidth = nameMeasurement.width
            let nameText = new Text("Marta", 200 * this.mx, 15 * this.my + nameHeight, 60 * this.mr, this.color, this.ctx, font)
            nameText.queueTarget(3000, 5000 + firstDelay, false, true)
            nameText.queueTarget(2000, 2000 + secondDelay, true, true)
            this.lines.push(nameText)

            this.ctx.font = `${60 * this.mr}px "Signika Negative"`;
            let surnameMeasurement = this.ctx.measureText("Barbieri")
            let surnameHeight = surnameMeasurement.actualBoundingBoxAscent + surnameMeasurement.actualBoundingBoxDescent
            let surnameWidth = surnameMeasurement.width
            let surnameText = new Text("Barbieri", 200 * this.mx, 25 * this.my + nameHeight + surnameHeight, 60 * this.mr, this.color, this.ctx, font)
            surnameText.queueTarget(3000, 5250 + firstDelay, false, true)
            surnameText.queueTarget(2000, 2000 + secondDelay, true, true)
            this.lines.push(surnameText)

            this.ctx.font = `${36 * this.mr}px "Signika Negative"`;
            // let titleMeasurement = this.ctx.measureText("Full Stack Developer")
            // let titleHeight = titleMeasurement.actualBoundingBoxAscent + titleMeasurement.actualBoundingBoxDescent
            // let titleWidth = titleMeasurement.width
            let titleText = new Text("Full Stack Developer", 80 * this.mx, 160 * this.my, 36 * this.mr, this.color, this.ctx, font)
            titleText.queueTarget(3000, 5500 + firstDelay, false, true)
            titleText.queueTarget(2000, 1500 + secondDelay, true, true)
            this.lines.push(titleText)

            let surnameTextWidth = surnameWidth + 40 * this.mx //with 20 "px" margins
            let totalNameHeight = 25 * this.my + nameHeight + surnameHeight

            let verticalLine = new Line(243.5 * this.mx, 130 * this.my, Math.PI, 0, this.color, this.ctx)
            verticalLine.queueTarget(243.5 * this.mx, 130 * this.my, Math.PI, 2500, 0, false, totalNameHeight, false)
            verticalLine.queueTarget(180 * this.mx, 10 * this.my + totalNameHeight / 2, 1.5 * Math.PI, 2500, firstDelay, false, null, true, true)
            verticalLine.queueTarget(180 * this.mx, 10 * this.my + totalNameHeight / 2, 1.5 * Math.PI, 1000, firstDelay + 2500, true, null, false, true)
            this.lines.push(verticalLine)


            let bottomBoundLine = new Line(180 * this.mx, 10 * this.my + totalNameHeight, Math.PI, 0, this.color, this.ctx)
            bottomBoundLine.queueTarget(180 * this.mx + surnameTextWidth / 2, 10 * this.my + totalNameHeight, Math.PI, 2500, firstDelay + 2500, false, surnameTextWidth, false)
            bottomBoundLine.queueTarget(180 * this.mx + surnameTextWidth, 10 * this.my + totalNameHeight, Math.PI, 1000, secondDelay+1000, false, 0, true, true)
            this.lines.push(bottomBoundLine)


            let topBoundLine = new Line(180 * this.mx, 10 * this.my, Math.PI, 0, this.color, this.ctx)
            topBoundLine.queueTarget(180 * this.mx + surnameTextWidth / 2, 10 * this.my, Math.PI, 2500, firstDelay + 2500, false, surnameTextWidth, false)
            topBoundLine.queueTarget(180 * this.mx + surnameTextWidth, 10 * this.my, Math.PI, 1000, secondDelay+1000, false, 0, true, true)
            this.lines.push(topBoundLine)

            let bottomClosingBoundLine = new Line(180 * this.mx + surnameTextWidth, 10 * this.my + totalNameHeight, -Math.PI/2, 0, this.color, this.ctx)
            bottomClosingBoundLine.queueTarget(180 * this.mx + surnameTextWidth, 10 * this.my + totalNameHeight* 3/4, -Math.PI/2, 1000, 4750 + firstDelay, false, totalNameHeight/2, false)
            bottomClosingBoundLine.queueTarget(180 * this.mx + surnameTextWidth, 10 * this.my + totalNameHeight* 2/4, -Math.PI/2, 1000, secondDelay + 2000, false, 0, true, true)
            this.lines.push(bottomClosingBoundLine)


            let topClosingBoundLine = new Line(180 * this.mx + surnameTextWidth, 10 * this.my, Math.PI/2, 0, this.color, this.ctx)
            topClosingBoundLine.queueTarget(180 * this.mx + surnameTextWidth, 10 * this.my + totalNameHeight* 1/4, Math.PI/2, 1000, 4750 + firstDelay, false, totalNameHeight/2, false)
            topClosingBoundLine.queueTarget(180 * this.mx + surnameTextWidth, 10 * this.my + totalNameHeight* 2/4, Math.PI/2, 1000, secondDelay + 2000, false, 0, true, true)
            this.lines.push(topClosingBoundLine)

            let bottomOpeningBoundLine = new Line(180 * this.mx, 10 * this.my + totalNameHeight * 3/4, -Math.PI/2, totalNameHeight/2, this.color, this.ctx, "ease-in-out")
            bottomOpeningBoundLine.queueTarget(180 * this.mx, 10 * this.my + totalNameHeight * 3/4, -Math.PI/2, 1000, firstDelay + 2500, false, totalNameHeight/2)
            bottomOpeningBoundLine.queueTarget(180 * this.mx, 10 * this.my + totalNameHeight, -Math.PI/2, 1000, secondDelay, true, 0, true, true)
            this.lines.push(bottomOpeningBoundLine)


            let topOpeningBoundLine = new Line(180 * this.mx, 10 * this.my + totalNameHeight* 1/4, Math.PI/2, totalNameHeight/2, this.color, this.ctx, "ease-in-out")
            topOpeningBoundLine.queueTarget(180 * this.mx, 10 * this.my + totalNameHeight* 1/4, Math.PI/2, 1000, firstDelay + 2500, false, totalNameHeight/2)
            topOpeningBoundLine.queueTarget(180 * this.mx, 10 * this.my, Math.PI/2, 1000, secondDelay, true, 0, true, true)
            this.lines.push(topOpeningBoundLine)

            Promise.all(this.lines.map(line => line.completed.promise)).then(() => {
                this.done = true
                //ten emit sprawia ze komponent logo emituje swoje zakonczenie do komponentu rodzica, w naszym wypadku App
                this.$emit("finished")
            })
            window.requestAnimationFrame(this.animate);
        })
    },
    methods: {
        animate(timestamp) {
            if (this.animationStart === null) {
                this.animationStart = timestamp
            }
            const elapsed = timestamp - this.animationStart;
            if (this.previousTimeStamp !== timestamp) {
                this.ctx.fillStyle = this.background
                this.ctx.fillRect(0, 0, this.width * this.mx, this.height * this.my)
                this.lines.forEach(line => {
                    line.motionTick(elapsed)
                    line.draw()
                })
            }
            if (!this.done) {
                this.previousTimeStamp = timestamp
                window.requestAnimationFrame(this.animate);
            } else {
                //animation is complete!
            }
        },
    },

}