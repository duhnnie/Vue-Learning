<template>
  <div>
    <h2>Torsos</h2>
    The Base is critical to the mobility of your robot. Be
    sure to choose a base that will work well with the terrain
    where your robot needs to operate.
    <div v-for="(base, index) in parts.bases" :key="index">
      <h4>{{base.title}}</h4>
      <div>{{base.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'RobotBases',
  mixins: [getPartsMixin],
};
</script>
