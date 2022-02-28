<template>
  <div class="card-box">
    <div class="card-content">
      <div class="avatar-box">
        <el-avatar
          shape="circle"
          :size="100"
          fit="cover"
          :src="userUrl.image"
        ></el-avatar>
      </div>
      <div class="text-box">
        <h1>幻灭</h1>
        <span>说明</span>
        <span>数据</span>
        <span>其他账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Avatar",
  setup() {
    const userUrl = reactive({
      image: "http://www.zhangz2.xyz/images/user.jpg",
    });
    //"http://www.zhangz2.xyz/images/user.jpg"
    console.log(userUrl);
    return {
      userUrl,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/main.scss";
.card-box {
  position: sticky;
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-content {
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: $boxshow;

    .avatar-box {
    }

    .text-box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>