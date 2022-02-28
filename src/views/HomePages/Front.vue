<template>
  <el-row class="el-row">
    <el-col :span="6" class="right"> <Avatar /> </el-col>
    <el-col :span="12">
      <Breadcrumbs class="breadcrumbs" />
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </el-col>
    <el-col :span="6"> </el-col>
  </el-row>
</template>

<script>
import Avatar from "../../components/Avatar.vue";
import Card from "../../components/Card.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
export default {
  name: "Front",
  components: {
    Avatar,
    Card,
    Breadcrumbs,
  },
};
</script>

<style scoped lang="scss">
.el-row{
    margin-top: 70px;
    .right{
        position: sticky;
        top: 20px;
    }
}
</style>