<template>
  <PanelItem :field="field" >
    <template #value>
      <ul>
        <li class="mb-1" style="list-style: square; margin-left: 1rem;" v-for="value of fieldValue">
          {{ value }}
        </li>
      </ul>
    </template>
  </PanelItem>
</template>

<script>
import HasFieldValue from "../mixins/HasFieldValue";

export default {
    mixins: [HasFieldValue],
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
