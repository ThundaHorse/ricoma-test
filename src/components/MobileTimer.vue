<template>
  <div class="mobileTimer">
    <div class="row">
      <div class="col">
        <p class="num">{{ outputDay }}<span class="day">days</span></p>
      </div>
      <div class="col">
        <p class="num">{{ outputHours }} <span class="hour">hours</span></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="num">{{ outputMin }} <span class="minutes">minutes</span></p>
      </div>
      <div class="col">
        <p class="num">{{ outputSec }} <span class="seconds">seconds</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobileTimer {
  background-color: #1f3162;
  width: 100%;
}
.num {
  height: 31px;
  width: 23px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 31px;
  text-align: center;
}
.day {
  height: 21px;
  width: 30px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
.hour {
  height: 21px;
  width: 34px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
.minutes {
  height: 21px;
  width: 49px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
.seconds {
  height: 21px;
  width: 51px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
</style>

<script>
export default {
  name: "mobileTimer",
  data: function() {
    return {
      outputTime: "00:00:00",
      outputDay: "00",
      outputHours: "00",
      outputMin: "00",
      outputSec: "00",
      count: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    };
  },
  created: function() {
    this.timer();
  },
  methods: {
    timer() {
      this.t = setTimeout(() => {
        this.add();
      }, 1000);
    },

    add() {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours++;
        }
      }

      this.outputHours = this.hours
        ? this.hours > 9
          ? `${this.hours}`
          : "0" + `${this.hours}`
        : "00";

      this.outputMin = this.minutes
        ? this.minutes > 9
          ? `${this.minutes}`
          : "0" + `${this.minutes}`
        : "00";

      this.outputSec =
        this.seconds > 9 ? `${this.seconds}` : "0" + `${this.seconds}`;

      this.outputTime =
        this.outputHours + ":" + this.outputMin + ":" + this.outputSec;

      this.timer();
    },

    resetTimer() {
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.outputTime = "00:00:00";
    },

    stop() {
      clearTimeout(this.t);
    }
  }
};
</script>
