<template>
        <div class="center">
            <h2>Enter your Zipcode</h2>
            <input type="text" v-model="zipcode">
            <button @click="fun_zipcode()">Click</button>
            <div style="border:1px solid green;margin-top:20px;" v-if= "info">
                <pre v-text="info.data" style="color: #000000; text-align: justify;"></pre>
            </div>
        </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'ZipCode',
  data () {
    return {
      zipcode: '',
      info: ''
    }
  },
  methods: {
    fun_zipcode () {
      axios
        .post(`https://developer-toolkits.herokuapp.com/api/v1/users/zipcode?zipcode=${this.zipcode.replace(/\s+/g, '')}`)
        .then(response => (this.info = response))
        .catch(error => console.log(error))
    }
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
