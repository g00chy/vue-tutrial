<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/compute_watcher">Compuute Watcher</router-link> |
      <router-link to="/binding">binding</router-link> |
      <router-link to="/listrender">listrender</router-link> |
      <router-link to="/events">events</router-link> |
      <router-link to="/yorimiti">yorimiti</router-link> |
      <router-link to="/form">form</router-link> |
      <router-link to="/component-basic">ComponentBasic</router-link> |
      <router-link to="/component-property">ComponentProperty</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
