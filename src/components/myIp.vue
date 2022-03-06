<template>
        <div class="center">
            <h2>Your IPv4 Address is:</h2>
            <div style="border:1px solid green;margin-top:20px;" v-if= "info">
                <h1 v-text="info.data.client_host" style="color: #00000; text-align: center;"></h1>
            </div>
        </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'ZipCode',
  data () {
    return {
      info: ''
    }
  },
  mounted: function () {
    axios
      .get(`https://developer-toolkits.herokuapp.com/api/v1/users/my-ip`)
      .then(response => (this.info = response))
      .catch(error => console.log(error))
  }

}
</script>

<style scoped>
.center{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #3F4254;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }
</style>
