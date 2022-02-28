<template>
    <div class="box">
        <h1>500</h1>
        <p>服务器出问题了</p>
        <p>稍后再试试吧</p>
    </div>
</template>

<script>
    export default {
        name:"500"
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