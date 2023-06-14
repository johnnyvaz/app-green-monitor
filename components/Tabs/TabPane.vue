<template>
  <div
v-show="active"
       :id="id || label"
       class="tab-pane fade"
       :class="{'active show': active}"
       :aria-expanded="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabPane",
  inject: ["addTab", "removeTab"],
  props: {
    title: {
      default: "titulo",
      type: String,
    },
    id: {
      default: null,
      type: String,
    },
    label: {
      default: null,
      type: String,
    }
  },
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.addTab(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeTab(this);
  }
};
</script>

