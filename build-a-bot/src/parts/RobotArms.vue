<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, index) in parts.arms" :key="index">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'RobotArms',
  mixins: [getPartsMixin],
};
</script>
