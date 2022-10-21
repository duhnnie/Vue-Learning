<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
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
      const part = parts[partType].find((partItem) => partItem.id === +id);

      return part;
    },
  },
}
</script>
