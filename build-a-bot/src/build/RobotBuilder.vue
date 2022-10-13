<template>
    <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="parts.heads[headIndex].src" title="head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="parts.arms[leftArmIndex].src" title="left arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="parts.torsos[torsoIndex].src" title="left arm"/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="parts.arms[rightArmIndex].src" title="left arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="parts.bases[baseIndex].src" title="left arm"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      parts,
      headIndex: 0,
      leftArmIndex: 0,
      torsoIndex: 0,
      rightArmIndex: 0,
      baseIndex: 0,
    };
  },
  methods: {
    selectNextHead() {
      this.headIndex = (this.headIndex + 1) % this.parts.heads.length;
    },
    selectPreviousHead() {
      this.headIndex = this.headIndex === 0
        ? this.parts.heads.length - 1
        : this.headIndex - 1;
    },
    selectNextLeftArm() {
      this.leftArmIndex = (this.leftArmIndex + 1) % this.parts.arms.length;
    },
    selectPreviousLeftArm() {
      this.leftArmIndex = this.leftArmIndex === 0
        ? this.parts.arms.length - 1
        : this.leftArmIndex - 1;
    },
    selectNextTorso() {
      this.torsoIndex = (this.torsoIndex + 1) % this.parts.torsos.length;
    },
    selectPreviousTorso() {
      this.torsoIndex = this.torsoIndex === 0
        ? this.parts.torsos.length - 1
        : this.torsoIndex - 1;
    },
    selectNextRightArm() {
      this.rightArmIndex = (this.rightArmIndex + 1) % this.parts.arms.length;
    },
    selectPreviousRightArm() {
      this.rightArmIndex = this.rightArmIndex === 0
        ? this.parts.arms.length - 1
        : this.rightArmIndex - 1;
    },
    selectNextBase() {
      this.baseIndex = (this.baseIndex + 1) % this.parts.bases.length;
    },
    selectPreviousBase() {
      this.baseIndex = this.baseIndex === 0
        ? this.parts.bases.length - 1
        : this.baseIndex - 1;
    },
  },
};
</script>

<style>
  .part {
    position: relative;
    width:165px;
    height:165px;
    border: 3px solid #aaa;
  }
  .part img {
    width:165px;
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
  .head {
    border-bottom: none;
  }
  .left {
    border-right: none;
  }
  .right {
    border-left: none;
  }
  .left img {
    transform: rotate(-90deg);
  }
  .right img {
    transform: rotate(90deg);
  }
  .bottom {
    border-top: none;
  }
  .prev-selector {
    position: absolute;
    z-index:1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
  }
  .next-selector {
    position: absolute;
    z-index:1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
  }
  .center .prev-selector, .center .next-selector {
    opacity:0.8;
  }
  .left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .right .next-selector {
    right: -3px;
  }
</style>
