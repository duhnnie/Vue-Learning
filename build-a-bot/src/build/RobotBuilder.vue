<template>
  <div class="container">
    <div class="preview">
      <CollapsibleContent>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobot.torso.src"/>
            <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
      </CollapsibleContent>
      <button class="add-to-cart" @click="addRobotToCart()">Add to Cart</button>
    </div>
    <div class="top-row">
      <!-- <div class="name">
        {{selectedRobot.head.title}}
        <span class="sale" v-if="selectedRobot.head.onSale">
          Sale!
        </span>
      </div> -->
      <PartSelector
        :parts="parts.heads"
        position="top"
        @partSelected="(part) => selectedRobot.head = part"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="parts.arms"
        position="left"
        @partSelected="(part) => selectedRobot.leftArm = part"
      />
      <PartSelector
        :parts="parts.torsos"
        position="center"
        @partSelected="(part) => selectedRobot.torso = part"
      />
      <PartSelector
        :parts="parts.arms"
        position="right"
        @partSelected="(part) => selectedRobot.rightArm = part"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="parts.bases"
        position="bottom"
        @partSelected="(part) => selectedRobot.base = part"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="robot in cart" :key="robot.head.title">
          <td>{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import parts from '../data/parts';
import PartSelector from './PartSelector.vue';
import createdHookMixin from './created-hook-mixin';
import CollapsibleContent from '../shared/CollapsibleContent.vue';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      parts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  components: {
    PartSelector,
    CollapsibleContent,
  },
  mixins: [createdHookMixin],
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
  },
  methods: {
    addRobotToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;

      // this.cart.push(Object.assign({}, robot, { cost }));
      this.cart.push({ ...robot, cost });
    },
  },
};
</script>

<style lang="scss" scoped>
  .part {
    position: relative;
    width:165px;
    height:165px;
    border: 3px solid #aaa;

    img {
      width:165px;
    }
  }
  .top-row {
    display:flex;
    justify-content: space-around;
  }
  .middle-row {
    display:flex;
    justify-content: center;
  }
  .bottom-row {
    display:flex;
    justify-content: space-around;
    border-top: none;
  }
  .name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
  }
  .sale {
    color: red;
  }
  .container {
    position: relative;
  }
  .add-to-cart {
    position: absolute;
    width: 210px;
    padding: 3px;
    font-size: 16px;
  }
  td, th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
  }
  .cost {
    text-align: right;
  }
  .sale-border {
    border: 3px solid red;
  }

  .preview {
    position: absolute;
    top: -20px;
    right: 0;
    width: 210px;
    height: 210px;
    padding: 5px;
  }
  .preview-content {
    border: 1px solid #999;
  }
  .preview img {
    width: 50px;
    height: 50px;
  }
  .rotate-right {
    transform: rotate(90deg);
  }
  .rotate-left {
    transform: rotate(-90deg);
  }
</style>
