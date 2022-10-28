<template>
  <div v-if="parts" class="container">
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
  </div>
</template>

<script>
import PartSelector from './PartSelector.vue';
import createdHookMixin from './created-hook-mixin';
import CollapsibleContent from '../shared/CollapsibleContent.vue';

export default {
  name: 'RobotBuilder',
  created() {
    this.$store.dispatch('robots/getParts');
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      const canLeave = window.confirm('You didn\'t add the robot to the cart, are you sure you want to leave?');

      next(canLeave);
    }
  },
  data() {
    return {
      // parts,
      cart: [],
      addedToCart: false,
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
    parts() {
      return this.$store.state.robots.parts;
    },
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

      this.$store.dispatch('robots/addRobotToCart', { ...robot, cost })
        .then(() => this.$router.push('/cart'));
      this.addedToCart = true;
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
  .sale-border {
    border: 3px solid red;
  }

  .preview {
    position: absolute;
    top: 0px;
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
