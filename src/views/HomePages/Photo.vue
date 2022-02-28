<template>
  <div class="photo">
    <div class="photo-bar-box">
      <el-carousel :interval="4000" type="card" height="35vw" trigger="click">
        <el-carousel-item v-for="item in pictureData" :key="item">
          <el-skeleton :loading="loading" animated style="height: 100%">
            <template #template>
              <el-skeleton-item
                variant="image"
                style="width: 100%; height: 100%"
              />
            </template>
            <template #default>
              <div
                class="carousel"
                :style="{ backgroundImage: 'url(' + item + ')' }"
              ></div>
            </template>
          </el-skeleton>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="context"></div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { loadImageEnd } from "../../assets/js/utils.imgUrl";
export default {
  name: "Photo",
  setup() {
    const data = reactive({
      pictureData: [
        "http://www.zhangz2.xyz/images/photo/546441.jpg",
        "http://www.zhangz2.xyz/images/photo/656146.jpg",
        "http://www.zhangz2.xyz/images/photo/937353.png",
        "http://www.zhangz2.xyz/images/photo/1067994.jpg",
        "http://www.zhangz2.xyz/images/photo/1148399.jpg",
      ],
    });
    let loading = ref(true);
    loadImageEnd(data.pictureData, function () {
      loading.value = false;
    });
    //
    return {
      ...data,
      loading,
    };
  },
};
</script>

<style scoped lang="scss">
.photo{
  margin-top: 70px;

}
.photo-bar-box {
}
.carousel {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position-y: center;
}
</style>