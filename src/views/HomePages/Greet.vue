<template>
  <div class="box">
    <div class="bar">
      <p class="title">幻灭的个人网站</p>
      <div class="routers">
        <router-link
          v-for="(cRoute, cIndex) in childRoute"
          :key="'route' + cIndex"
          :to="cRoute[0]"
          >{{ cRoute[1] }}</router-link
        >
      </div>
      <div class="arrow" @click="posi">
        <svg
          t="1643447405972"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2028"
        >
          <path
            d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
            p-id="2029"
          ></path>
        </svg>
      </div>
    </div>
    <div class="legend" ref="bar">
      <div class="td-box">
        <div class="text">
          <h1>这是幻灭的个人网站</h1>
          <p>在这里有我的学习记录，我的日常记录，以及对一些演示。</p>
          <p>欢迎常来看看！</p>
        </div>
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "@vue/runtime-core";
export default {
  setup() {
    const childRoute = [
      ["front", "首页"],
      ["photo", "相册"],
      ["essay", "短文"],
      ["about", "关于"],
    ];
    //scroll first
    const data = reactive({
      domBottom: 0,
    });
    const bar = ref(null);
    function posi() {
      let scrollTop = 0;
      let sum = 0;
      let a = 0;
      const timer = setInterval(() => {
        data.domBottom = bar.value.getBoundingClientRect();
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        sum = scrollTop + data.domBottom.bottom + 120;
        a = scrollTop;
        if (data.domBottom.top < -100) {
          clearInterval(timer);
        } else {
          window.scrollTo(0, (a += 9));
        }
      }, 5);
    }
    //scroll end
    return {
      childRoute,
      posi,
      bar,
    };
  },
};
</script>

<style scoped lang="scss">
.box {
  .bar {
    height: 100vh;
    background: url(http://www.zhangz2.xyz/images/970055.jpg) no-repeat
      center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgba(#fff, $alpha: 0.86);
    animation: animtwo 0.8s;
    .title {
      font-size: 3rem;
      padding-bottom: 50px;
      font-weight: 540;
    }
    .routers {
      a {
        padding: 0 5px;
        color: #fff;
      }
    }
    .arrow {
      position: absolute;
      top: 85vh;
      left: 50%;
      transform: translateX(-50%);
      svg {
        fill: #ccc;
        width: 50px;
      }
      cursor: pointer;
      &:hover {
        animation: arrow 1s;
      }
    }
  }
  .legend {
    display: flex;
    height: 120vh;
    background: #252424;

    .td-box {
      display: flex;
      align-items: center;
      --borderhe: 40vh;
      width: 100%;
      padding: 30vh 0;
      .text {
        color: rgba(#fff, 0.86);
        height: var(--borderhe);
        width: calc(50% - 50px);
        background: #0d0c0c;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        > * {
          margin-bottom: 38px;
        }
      }
      .image {
        height: var(--borderhe);
        width: calc(50% + 50px);
        background: #ffc url(http://www.zhangz2.xyz/images/970055.jpg) no-repeat
          center center/cover;
        box-sizing: border-box;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -1px;
          width: 100px;
          border-left: 100px solid #0d0c0c;
          border-bottom: var(--borderhe) solid transparent;
        }
      }
    }
  }
}
@keyframes animtwo {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes arrow {
  50% {
    transform: translate(-50%, -10px);
  }
}
</style>