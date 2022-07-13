<template>
<div>
  <Inputdata :message="msg" @MessageChanges="msg=$event"/>
</div>
</template>

<script>
import Inputdata from './Inputdata'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Enter your message'
    }
  },
  components: {
    Inputdata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
