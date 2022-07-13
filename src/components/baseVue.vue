<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="sidebar">
        <a href="#home" @click="tab='welcome'"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="#zipcode" @click="tab='zipCode'">Zipcode</a>
        <a href="#my-ip" @click="tab='myIp'">My Ip</a>
        <a href="#json-data" @click="tab='jsonFormatter'">Json Data</a>
        <a href="#upload-file" @click="tab='uploadFile'">File Upload</a>
        <a href="https://developer-toolkits.herokuapp.com/docs" target="_blank">API Doc</a>
    </div>
    <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
</div>
</template>

<script>
import zipCode from './zipCode'
import welcome from './welcome'
import myIp from './myIp'
import jsonFormatter from './jsonFormatter'
import uploadFile from './uploadFile'

export default {
  name: 'baseVue',
  data () {
    return {
      tab: 'welcome'
    }
  },
  computed: {
    currentTabComponent () {
      return this.tab
    }
  },
  components: {
    zipCode,
    welcome,
    myIp,
    jsonFormatter,
    uploadFile
  }
}
</script>

<style>
body {font-family: "Lato", sans-serif;background-color: #D6DBDF;
}

.sidebar {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
  padding: 60px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>
