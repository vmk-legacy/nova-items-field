<template>
  <PanelItem :index="index" :field="field">
    <template #value>
      <span v-if="shouldDisplayAsList">
        <ul class="nova-items-field-list">
          <li v-for="(value,index) in fieldValue" :key="index">{{value}}</li>
          <li v-if="shouldDisplayEllipsis && fieldValueTruncated" class="nova-item-field-ellipis">...</li>
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
  </PanelItem>
</template>

<script>
import { CopiesToClipboard, FieldValue } from 'laravel-nova'
import HasFieldValue from "../mixins/HasFieldValue";

export default {
    mixins: [CopiesToClipboard, HasFieldValue],
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
