<template>
  <div class="siwper-outer">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide style="height:100%">
        <div class="infomation-person">
          <h1
            class="title ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.3s"
          >吴从红个人简历</h1>
          <div
            class="ani personal"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="1.3s"
            style="margin-top:5%"
          >
            <h3 class="title-second">个人信息</h3>
            <p>姓名：吴从红</p>
            <p>英文名：Jay</p>
            <p>职位：web前端开发</p>
            <p>出生日期：1989.05</p>
            <p>学历：本科</p>
            <p>从业时间：3年</p>
            <p>现就职公司：苏州健玺科技</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide style="height:100%">Slide 2</swiper-slide>
      <swiper-slide style="height:100%">Slide 3</swiper-slide>
      <swiper-slide style="height:100%">Slide 4</swiper-slide>
    </swiper>
    <img src="./assets/web-swipe-tip.png" alt class="tip-arrow" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import * as swiperAni from "./assets/swiper.animate1.0.3.min.js";
export default {
  name: "App",
  data() {
    return {
      swiperOptions: {
        direction: "vertical", // 垂直切换选项
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          init: function() {
            swiperAni.swiperAnimateCache(this); //隐藏动画元素
            swiperAni.swiperAnimate(this);
            // this.emit("slideChangeTransitionEnd"); //在初始化时触发一次slideChangeTransitionEnd事件
          },
          slideChangeTransitionEnd: function() {
            swiperAni.swiperAnimate(this); //每个slide切换结束时运行当前slide动画
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted() {}
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body,
.siwper-outer {
  width: 100%;
  height: 100%;
  color: #fff;
  box-sizing: content-box;
}
.siwper-outer {
  /* padding: 0 5%; */
}
div,
html,
body,
h2 {
  margin: 0;
  padding: 0;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
}
.swiper-container {
  width: 100%;
  height: 100%;
  background: #fff;
}
.infomation-person {
  margin-top: 30%;
}
.title {
  /* color: slategrey; */
  font-size: 28px;
}
.swiper-slide {
  width: 100% !important;
  height: 100% !important;
  flex-shrink: 1;
  background: url("./assets/bg.jpg") no-repeat left top;
  background-size: 100% 100%;
  padding: 0 5%;
}
/* .swiper-slide:nth-child(1) {
  background: url("./assets/bg1.jpg") no-repeat left top;
  background-size: 100% 100%;
}
.swiper-slide:nth-child(2) {
  background: url("./assets/bg2.jpg") no-repeat left top;
  background-size: 100% 100%;
}
.swiper-slide:nth-child(3) {
  background: url("./assets/bg3.jpg") no-repeat left top;
  background-size: 100% 100%;
}
.swiper-slide:nth-child(4) {
  background: url("./assets/bg4.jpg") no-repeat left top;
  background-size: 100% 100%;
} */
.personal p {
  line-height: 30px;
}
.tip-arrow {
  width: 30px;
  height: 15px;
  bottom: 50px;
  left: 50%;
  margin-left: -15px;
  position: absolute;
  z-index: 999;
  -webkit-animation: tipmove 1.5s infinite ease-in-out;
}
@-webkit-keyframes tipmove {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
