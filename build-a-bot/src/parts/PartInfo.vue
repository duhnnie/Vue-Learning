<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    id: {
      type: [String, Number],
      validator: (value) => Number.isInteger(Number(value)),
    },
    partType: { type: String },
  },
  computed: {
    part() {
      const { partType, id } = this;
      const part = this.parts[partType].find((partItem) => partItem.id === +id);

      return part;
    },
  },
}
</script>
