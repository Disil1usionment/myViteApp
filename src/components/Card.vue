<template>
  <div class="card-box">
    <div class="card-content">
      <div class="img-box">
        <img src="http://www.zhangz2.xyz/images/970055.jpg" alt="img" />
      </div>
      <div class="text-box">
        <p class="title">标题</p>
        <span class="info"
          ><p>说明</p>
          <p>说明</p>
          <p>说明</p></span
        >
        <p class="introduce">简介</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped lang="scss">
@import "../assets/css/main.scss";

.card-box {
  margin-top: 0;
  margin-bottom: 10px;
  .card-content {
    box-shadow: $boxshow;
    border-radius: 10px;
    overflow: hidden;
    .img-box {
      overflow: hidden;
      > img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.5s;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
    .text-box {
      padding: 5px 10px;
      margin-bottom: 10px;
      .title {
        margin-bottom: 10px;
        font-size: 23px;
      }
      .info {
        font-size: 10px;
        display: flex;
      }
      .introduce {
        margin-top: 10px;
      }
    }
  }
}
</style>