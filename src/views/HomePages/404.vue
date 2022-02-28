<template>
    <div class="box">
        <h1>404</h1>
        <p>页面不存在</p>
        <p>请访问其他页面</p>
    </div>
</template>

<script>
    export default {
        name:"404"
    }
</script>

<style scoped lang="scss">
.box{
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    p{
        margin-top: 10px;
    }
}
</style>