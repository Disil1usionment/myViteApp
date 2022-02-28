<template>
    <div class="box">
        <h1>403</h1>
        <p>无权限访问</p>
        <p>请联系网站管理员</p>
    </div>
</template>

<script>
    export default {
        name:"403"
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