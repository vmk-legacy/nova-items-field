<template>
  <div :class="`text-${field.textAlign}`">
    <template v-if="fieldValue">
      <span v-if="shouldDisplayAsList">
        <ul class="nova-items-field-list">
          <li v-for="(value,index) in fieldValue" :key="index">{{value}}</li>
        </ul>
      </span>
      <span v-else-if="shouldDisplayAsTotal" class="nova-items-field-total">
        {{fieldValue.length}}
      </span>
      <span ref="theFieldValue" v-else-if="shouldDisplayAsHtml" class="nova-items-field">
        {{ fieldValue }}
      </span>
      <span
        @click.stop
        v-else-if="shoudDisplayAsHtml"
        v-html="fieldValue"
        class="nova-items-field"
      />
      <p v-else>&mdash;</p>
    </template>
  </div>
</template>

<script>
import { CopiesToClipboard, FieldValue } from 'laravel-nova'
import HasFieldValue from '../mixins/HasFieldValue'

export default {
  mixins: [CopiesToClipboard, FieldValue, HasFieldValue],

  props: ['resourceName', 'field'],

  methods: {
    copy() {
      this.copyValueToClipboard(this.field.value)
    },
  },
}
</script>
