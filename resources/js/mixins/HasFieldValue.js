export default {
  computed: {
    shouldDisplayAsList() {
      return this.field.asList
    },

    shouldDisplayAsTotal() {
      return this.field.asTotal
    },

    fieldValue() {
      if (!this.usesCustomizedDisplay && !this.fieldHasValue) {
        return null
      }

      if (this.field.displayedAs) {
        return String(this.field.displayedAs)
      } else {
        return this.field.value
      }
    }
  }
};
