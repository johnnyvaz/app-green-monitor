<template>
    <component class="dropdown"
               :is="tag"
               :class="[{show: isOpen}, {'dropdown': direction === 'down'}, {'dropup': direction ==='up'}]"
               aria-haspopup="true"
               :aria-expanded="isOpen"
               @click="toggleDropDown"
               v-click-outside="closeDropDown">

        <slot name="title">
            <a class="dropdown-toggle nav-link"
               :class="{'no-caret': hideArrow}"
               data-toggle="dropdown">
                <em :class="icon"></em>
                <span class="no-icon">{{title}}</span>
            </a>
        </slot>
        <ul class="dropdown-menu"
            :class="[{'dropdown-menu-right': position === 'right'}, {show: isOpen}, menuClasses]">
            <slot></slot>
        </ul>
    </component>
</template>
<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  name: "base-dropdown",
  props: {
    direction: {
      type: String,
      default: "down"
    },
    title: {
      type: String,
      description: "Dropdown title"
    },
    icon: {
      type: String,
      description: "Icon for dropdown title"
    },
    position: {
      type: String,
      description: "Position of dropdown menu (e.g right|left)"
    },
    menuClasses: {
      type: [String, Object],
      description: "Dropdown menu classes"
    },
    hideArrow: {
      type: Boolean,
      default: true,
      description: "Whether dropdown arrow should be hidden"
    },
    tag: {
      type: String,
      default: "li",
      description: "Dropdown html tag (e.g div, li etc)"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit("change", this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit("change", this.isOpen);
    },
    onClickOutside (event) {
      console.log('Clicked outside. Event: ', event)
    }
  }
};
</script>
<style>
.dropdown {
  list-style-type: none;
}

.dropdown .dropdown-toggle {
  cursor: pointer;
}
</style>
