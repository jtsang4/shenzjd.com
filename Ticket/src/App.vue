<template>
  <div id="app">
    <div class="notification is-info header">
      <a target="_blank" href="http://newbug.xyz">网站首页</a>
      <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=99852687fdf5d718e2335897258bb83729a0d48dbde7d893a2e57de7f06f6413"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="神族九帝" title="神族九帝"></a>
    </div>
    <div class="moreLink">
      <a class="button is-info" href="http://newbug.xyz/ticket" target="_blank">第一版本(初步版)</a>
      <a class="button is-info" href="http://newbug.xyz/ticket2" target="_blank">第二版本(稳定版)</a>
      <a class="button is-info" href="http://newbug.xyz/ticket3" target="_blank">第三版本(测试版)</a>
      <a class="button is-info" href="http://newbug.xyz/ticket4" target="_blank">第四版本(自定义)</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  .header {
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
  }
  .moreLink {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    a {
      margin: 10px;
    }
  }
}
</style>
