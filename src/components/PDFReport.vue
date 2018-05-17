<template>
  <div>
    <pdf v-for="i in numPages" :key="i" :src="src" :page="i" style="display: inline;"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('./static/2018_Spring_195B_Group6_Project_Report_BuckIt.pdf')

export default {
  components: { pdf },
  data () {
    return {
      src: loadingTask,
      numPages: undefined
    }
  },
  mounted () {
    this.src.then(pdf => {
      this.numPages = pdf.numPages
    })
  }
}
</script>
