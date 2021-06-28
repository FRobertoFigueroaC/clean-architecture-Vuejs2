<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/forms">Forms</router-link>|
      <router-link to="/state">State</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>

:root{
  --primary: #42b983;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bar{
  background-color: var(--primary);
  padding: 5px 0 5px 0;
  color: aliceblue;
}
.bar h1{
  color: aliceblue;
}

#nav{
  border: 1px solid var(--primary);
  color: lightgray;
}

#nav a{
  cursor: pointer
}
.title {
  padding: 0.3rem 1.3rem;
  border-radius: 5px;
  background-color: var(--primary);
  color: white !important;
}


</style>
