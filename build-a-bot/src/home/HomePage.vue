<template>
  <div class="home">
    <div>
      <img src="../assets/robot-home.png" alt="home" class="robot">
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }

  .robot {
    height: 300px;
  }
</style>
