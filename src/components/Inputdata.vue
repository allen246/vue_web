<template>
<div>
    <p>{{input_data}}</p>
    <input type="text" :value="message" @input="ChangeValue()" />
    <p v-text="input_dat"></p>
</div>
</template>

<script>
export default {
  name: 'Inputdata',
  data () {
    return {
      input_data: ''
    }
  },
  props: {
    message: {
      type: String,
      default: 'No data',
      required: true
    }
  },
  methods: {
    ChangeValue () {
      this.input_data = event.target.value
      this.$emit('MessageChanges', this.input_data)
    }
  },
  computed: {
    input_dat () {
      return this.message
    }
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
