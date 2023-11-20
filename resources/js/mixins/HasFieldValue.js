export default {
  computed: {
    shouldDisplayIndexAsList() {
      return this.field.indexAsList
    },

    shouldDisplayDetailsAsTotal() {
      return this.field.detailsAsTotal
    },

    getIndexListMaxItems() {
      return this.field.indexListMaxItems
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
        return this.field.value;
      }
    }
  }
};
