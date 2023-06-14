<template>
  <input
    type="text"
    :placeholder="dsSearchPlaceholder"
    class="form-control input border- text-blue-800 border-info rounded-lg"
    :value="dsSearch"
    @input="input($event.target.value)"
  />
</template>

<script>
import { debounce } from './helpers'

export default {
  inject: ['search'],
  props: {
    dsSearchPlaceholder: {
      type: String,
      default: ''
    },
    wait: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      dsSearch: ''
    }
  },
  mounted() {
    this.input = debounce((value) => {
      this.search(value)
    }, this.wait)
  }
}
</script>
