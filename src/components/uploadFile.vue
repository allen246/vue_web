<template>
<div class="center">
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="field">
        <label for="file" class="label">Upload File</label>
        <input type="file" ref="file" @change="selectFile">
    </div>
    <div>
        <button class="button is-info">Process</button>
        <input v-show="file_name" type="button" value="Download" style="float: right;" class="button is-info" @click="download()">
    </div>
    </form>
    <json-viewer
        v-show="info"
        :value="info.json_data"
        :expand-depth=5
        copyable
        boxed></json-viewer>
</div>
</template>
<script>
import JsonViewer from 'vue-json-viewer'
const axios = require('axios')
export default({
  name: 'UploadFile',
  data () {
    return {
      info: '',
      file: '',
      file_name: ''
    }
  },
  methods: {
    selectFile () {
      this.file = this.$refs.file.files[0]
    },
    sendFile () {
      const formData = new FormData()
      formData.append('upload_file', this.file)
      console.log(this.file)
      axios.post(`https://developer-toolkits.herokuapp.com/api/v1/users/uploadfiles/`, formData)
        .then(response => (this.info = response.data.data_in_file))
        .catch(error => console.log(error))
    },
    download () {
      let text = JSON.stringify(this.info.json_data)
      let filename = this.file_name
      let element = document.createElement('a')
      element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text))
      element.setAttribute('download', filename)

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()
      document.body.removeChild(element)
    }
  },
  components: {JsonViewer},
  watch: {
    info: function (val) {
      if (val) { this.file_name = val.filename }
    }
  }
})
</script>
<style scoped>
.center{
        margin-left:10%;
    }
</style>
