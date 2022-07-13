<template>
        <div class="center">
            <h2>Enter your Json Data</h2>
            <textarea cols="177" rows="40" v-model="jsonData"> </textarea>
            <br/>
            <button class = "button" @click="fun_jsondata()"><a href="#data">Click</a></button>
            <json-viewer
              v-show="info"
              :value="info.data"
              :expand-depth=5
              copyable
              boxed></json-viewer>
            <!-- <div style="border:1px solid green;margin-top:20px;text-align: justify;" v-if= "info.data">
              <font-awesome-icon icon="fas fa-clipboard" />
                <pre id="data" v-text="info.data" style="color: #000000; padding-left:10px;"></pre>
            </div> -->
        </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer'
const axios = require('axios')
export default {
  name: 'jsonData',
  data () {
    return {
      jsonData: '',
      info: ''
    }
  },
  components: {JsonViewer},
  methods: {
    fun_jsondata () {
      let data = ''
      try {
        data = JSON.parse(this.jsonData)
      } catch (error) {
      }

      axios
        .post(`http://developer-toolkits.herokuapp.com/api/v1/users/json-formate/`, {'input_data': data})
        .then(response => (this.info = response))
        .catch(error => console.log(error))
    }
  }

}
</script>

<style scoped>
.center{
        margin-left:20%;
    }
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
pre {
display: inline-block
}
</style>
