<template>
  <header class="header">
    <nav>
      <ul>
        <li class="nav-item">
          <router-link active-class="active-link" class="nav-link" :to="{name: 'Home'}">
            <img src="./assets/build-a-bot-logo.png" alt="Build a Robot" class="logo">
            Build a Robot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active-link" to="/build">
            Robot Builder
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <aside class="aside">
      <router-view name="sidebar"/>
    </aside>
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
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
</style>

<style scoped>
  main {
    background-color: white;
    width: 1084px;
    min-height: 300px;
    margin: 0 auto;
    /* padding: 30px */
    display: flex;
    gap: 1em;
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

  .nav-link {
    text-decoration: none;
    color: inherit;
  }

  .active-link {
    color: white;
  }

  .aside {
    padding: 30px;
    background-color: #aaa;
    width: 100px;
    min-height: 300px;
  }

  .container {
    flex: 1 0 auto;
    position: relative
  }
</style>
