<template>
  <div id="total-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && swiperItemCount > 1">
        <div v-for="(item,index) in swiperItemCount"
             class="indicator-item"
             :key="index"
             :class="{active: index === currentIndex-1}"
             @click="itemClick(index)">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      intervalTime: {
        type: Number,
        default() {
          return 3000
        }
      },
      animationDuration: {
        type: Number,
        default() {
          return 300
        }
      },
      moveRatio: {
        type: Number,
        default() {
          return 0.25
        }
      },
      showIndicator: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    data() {
      return {
        swiperItemCount: 0,
        swiperWidth: 0,
        swiperStyle: {},
        scrolling: false,
        startX: 0,
        currentX: 0,
        distance: 0,
        currentIndex: 1,
      }
    },
    mounted() {
      setTimeout(() => {
        this.handleDom();

        this.startTimer();
      }, 100)
    },
    methods: {
      handleDom() {
        let swiperEle = document.querySelector('.swiper');
        let swiperItemEles = swiperEle.querySelectorAll('.swiper-item');

        this.swiperItemCount = swiperItemEles.length;

        if (this.swiperItemCount > 1) {
          let cloneFirst = swiperItemEles[0].cloneNode(true);
          let cloneLast = swiperItemEles[this.swiperItemCount - 1].cloneNode(true);
          swiperEle.insertBefore(cloneLast, swiperItemEles[0]);
          swiperEle.appendChild(cloneFirst);
          this.swiperWidth = swiperEle.offsetWidth;
          this.swiperStyle = swiperEle.style;
        }

        this.setTransform(-this.swiperWidth);

      },
      setTransform(position) {
        this.swiperStyle.transform = `translatex(${position}px)`;
        // this.swiperStyle['-webkit-transform'] = `translatex(${position}px)`;
        // this.swiperStyle['-ms-transform'] = `translatex(${position}px)`;
        // this.swiperStyle['-o-transform'] = `translatex(${position}px)`;
      },
      touchStart(e) {
        if (this.scrolling) {
          return null;
        } else {
          this.stopTimer();
          this.startX = e.touches[0].pageX;
        }
      },
      touchMove(e) {
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        let currentPosition = -this.currentIndex * this.swiperWidth;
        let moveDistance = currentPosition + this.distance;

        this.setTransform(moveDistance);
      },
      touchEnd(e) {
        let currentMove = Math.abs(this.distance);

        if(currentMove > this.swiperWidth * this.moveRatio) {
          if(this.distance < 0) {
            this.currentIndex++;
          } else {
            this.currentIndex--;
          }
        }
        this.scrollContent(-this.currentIndex * this.swiperWidth);
        this.startTimer();

      },
      scrollContent(postion) {

        this.scrolling = true;

        this.swiperStyle.transition = `${this.animationDuration}ms`;
        this.setTransform(postion);

        this.checkPostion();

        this.scrolling = false;
      },
      checkPostion() {
        setTimeout(() => {
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.swiperItemCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.swiperWidth);
          }else if (this.currentIndex <= 0) {
            this.currentIndex = this.swiperItemCount;
            this.setTransform(-this.currentIndex * this.swiperWidth);
          }
        }, this.animationDuration)
      },
      startTimer() {
        this.playTimer = setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.swiperWidth);
        }, this.intervalTime)
      },
      stopTimer() {
        clearInterval(this.playTimer);
      },
      itemClick(index) {
        this.stopTimer();
        this.currentIndex = index + 1;
        this.swiperStyle.transition = `${this.animationDuration}ms`;
        this.setTransform(-this.currentIndex * this.swiperWidth);
        this.startTimer();
      }
    }
  }
</script>

<style scoped>
  #total-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .indicator .indicator-item {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 5px;
  }

  .indicator .indicator-item.active {
    background-color: red;
  }
</style>
