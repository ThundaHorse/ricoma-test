<template>
  <div class="timer">
    <div class="row">
      <div class="group-1">
        <p class="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div class="group-2">
        <div class="col-sm"></div>
        <div class="col-sm" id="time">
          <div class="row nums">
            <p class="col">00</p>
            <p class="col">00</p>
            <p class="col">00</p>
            <p class="col">00</p>
          </div>
        </div>
        <div class="col-sm">
          <div class="row measures" id="time">
            <p class="col" id="day">Days</p>
            <p class="col" id="hr">Hours</p>
            <p class="col" id="min">Minutes</p>
            <p class="col" id="sec">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.timer {
  height: 50px;
  width: 1440px;
  background-color: #1f3162;
}
.group-1 {
  height: 44px;
  width: 671px;
}
.lorem-ipsum {
  height: 31px;
  width: 436px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 16px;
  line-height: 31px;
}
.group-2 {
  height: 44px;
  width: 211px;
}
div.nums > p.col {
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
#time {
  height: 44px;
  width: 211px;
}
#day {
  height: 21px;
  width: 30px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
#hr {
  height: 21px;
  width: 34px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
#min {
  height: 21px;
  width: 49px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
}
#sec {
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
// import Header from "./Header";

export default {
  name: "timer",
  components: {
    // Header
  },
  data: function() {
    return {
      outputTime: "00:00:00",
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

      this.outputTime =
        (this.hours
          ? this.hours > 9
            ? `${this.hours}`
            : "0" + `${this.hours}`
          : "00") +
        ":" +
        (this.minutes
          ? this.minutes > 9
            ? `${this.minutes}`
            : "0" + `${this.minutes}`
          : "00") +
        ":" +
        (this.seconds > 9 ? `${this.seconds}` : "0" + `${this.seconds}`);

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
