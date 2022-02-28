<template>
  <section class="box">
    <header class="head">
      <el-row class="el-row">
        <el-col :span="12">
          <div class="head-title" @click="home()">
            <el-tooltip
              content="回到主页"
              placement="bottom"
              effect="light"
            >
              Disillusioned
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="12">
          <router-link class="routers"
            v-for="(cRoute, cIndex) in childRoute"
            :key="'route' + cIndex"
            :to="{name:cRoute[0]}"
            >{{ cRoute[1] }}
            </router-link>
        </el-col>
      </el-row>
    </header>
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component class="child-view" :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer"></footer>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import router from "../router";
export default {
  name: "Home",
  setup() {
    const route = useRoute();
    console.log(route.meta);
    function home() {
      router.push({
        name: "greet",
      });
    }
  
    const childRoute = [
      ["front", "首页"],
      ["photo", "相册"],
      ["essay", "短句"],
      ["about", "关于"],
    ];
    return {
      home,
      childRoute,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.box {
  .head {
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    box-shadow: $boxshow;
    z-index: 10;
    backdrop-filter: blur(10px);
    padding: 0 5%;
    color: #fff;
    animation: load2 0.8s;
    .el-row {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      > div {
        .head-title {
          width: 4.4em;
          display: inline-block;
          font-size: 30px;
          font-family: "Great Vibes", cursive;
          user-select: none;
          font-weight: 600;
          color: #fff;
          background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
        }
      }
      :nth-child(1) {
      }
      :nth-child(2) {
        display: flex;
        justify-content: end;
      }
    }
  }
  .main {
    animation: load 0.5s;
  }
  .footer {
    min-height: 100px;
  }
}
.el-col{
  justify-content: flex-end !important;
}
.routers{
  color: #43cbff;
  margin-left: 10px;
  &:nth-child(1){
    margin-left: 0;
  }
}
.router-link-active{
  color: #fccfff;
}
// 路由动画
.child-view {
  position: absolute;
  width:100%;
  overflow: hidden;
  transition: all .8s cubic-bezier(.55, 0, .1, 1);
}

/* 离开 */
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px)
}
/* 进入 */
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px)
}


@keyframes load {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes load2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>