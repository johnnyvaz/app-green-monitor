<template>
  <div class="form-inline col-md-12">
    <label>mostrando</label>
    <select :value="dsShowEntries" class="form-control col-lg-5" @change="change">
      <option v-for="option in dsShowEntriesLovs" :key="option.value" :value="option.value" type="primary">
        {{ option.text }}
      </option>
    </select>
    <label>registros</label>
  </div>
</template>

<script>
export default {
  inject: ['datasetI18n', 'showEntries'],
  props: {
    dsShowEntries: {
      type: Number,
      default: 600
    },
    dsShowEntriesLovs: {
      type: Array,
      default: () => [
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 25, text: 25 },
        { value: 50, text: 50 },
        { value: 100, text: 100 },
        { value: 600, text: 600 }
      ]
    }
  },
  created() {
    this.showEntries(Number(this.dsShowEntries))
  },
  methods: {
    change(e) {
      this.$emit('changed', Number(e.target.value))
      this.showEntries(Number(e.target.value))
    }
  }
}
</script>
