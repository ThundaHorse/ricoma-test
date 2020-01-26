<template>
  <div class="timer">
    <div class="container">
      <div class="row">
        <div class="col-auto mr-auto">
          <h5 class="timer-lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h5>
        </div>
        <div class="col"></div>
        <div class="col">
          <div class="row h-25">
            <div class="col-md-3 col-sm-3">
              <p class="num">00</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p class="num">{{ outputHours }}</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p class="num">{{ outputMin }}</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p class="num">{{ outputSec }}</p>
            </div>
            <!-- <div class="col h-50"><p class="days">days</p></div> -->
          </div>
          <div class="row h-25">
            <div class="col-md-3 col-sm-3">
              <p class="days">days</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p class="hours">hours</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p class="minutes">minutes</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p class="seconds">seconds</p>
            </div>
            <!-- <div class="col h-50"><p class="days">days</p></div> -->
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<style>
.timer {
  height: 50px;
  width: auto;
  background-color: #1f3162;
}
.timer-lorem {
  height: 31px;
  width: 436px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 16px;
  line-height: 31px;
}
.num {
  height: 31px;
  width: 23px;
  color: #ffffff;
  font-family: Poppins Bold;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 31px;
  text-align: center;
}
.days {
  height: 21px;
  width: 30px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins Regular;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
.hours {
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
  name: "timer",
  data: function() {
    return {
      outputTime: "00:00:00",
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
