<template>
    <treeselect v-model="value" :multiple="true" :options="options" />
</template>
<script>
import Treeselect from '@riophae/vue-treeselect'
  // import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define default value
        value: null,
        // define options
        options: [],
      }
    },
  }
</script>
