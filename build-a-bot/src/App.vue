<template>
  <header class="header">
    <nav>
      <ul>
        <li class="nav-item">
          <img src="./assets/build-a-bot-logo.png" alt="Build a Robot" class="logo">
          Build a Robot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <HomePage/>
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #b0b0b0, #808080);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  background-color: white;
  width: 1024px;
  height: 300px;
  margin: 0 auto;
  padding: 30px
}

.header {
    background-color: #999;
    width: 1084px;
    margin: 0 auto;
  }

  ul {
    padding: 3px;
    display: flex;
  }

  .nav-item {
    display: inline-block;
    padding: 5px 10px;
    font-size: 22px;
    border-right: 1px solid #bbb;
  }

  .logo {
    vertical-align: middle;
    height: 30px;
  }
</style>
