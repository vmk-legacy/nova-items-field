export default {
  computed: {
    shouldDisplayAsList() {
      return this.field.asList
    },

    shouldDisplayAsTotal() {
      return this.field.asTotal
    },

    fieldHasValue() {
        let fieldValue = this.field.value;
        return fieldValue && Array.isArray(fieldValue) && fieldValue.length;
    },

    fieldValue() {
      if (!this.usesCustomizedDisplay && !this.fieldHasValue) {
        return null
      }

      if (this.field.displayedAs) {
        return String(this.field.displayedAs)
      } else {
        return this.field.value.slice(0,this.maxItems);
      }
    }
  }
};
