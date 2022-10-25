<template>
  <div id="app">
    <input type="number" v-model="operand1" />
    <input type="number" v-model="operand2" />

    <p>Результат: {{ result }}</p>

    <div v-if="error" class="error"> {{ error }}</div>

    <button v-for="item, index of operations" v-bind:key="index" v-on:click="doCalc(item)">{{ item }}</button> <br>

    <input type="checkbox" id="checkbox" v-model="showKeyboard">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br>

    <div v-show="showKeyboard" class="keyboard">
      <button v-for="n in 10" :key="n" @click="inputOperand(n - 1)">{{ n - 1 }}</button>
      <button @click="backspase">&larr;</button><br>

      <input type="radio" id="operand1" value="operand1" v-model="selectedOperand">
      <label for="operand1">Операнд 1</label>
      <input type="radio" id="operand2" value="operand2" v-model="selectedOperand">
      <label for="operand2">Операнд 2</label>
    </div>

  </div>
</template>


<script>
// import { operation } from 'retry'

export default {
  name: 'App',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      operations: ['+', '-', '*', '/', '^', '//'],
      logs: {},
      showKeyboard: false,
      selectedOperand: 'operand1'
    }
  },

  methods: {
    sum() {
      this.result = Number(this.operand1) + Number(this.operand2)
    },
    deduction() {
      this.result = this.operand1 - this.operand2
    },
    mult() {
      this.result = this.operand1 * this.operand2
    },
    divide() {
      if (this.operand2 == 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = this.operand1 / this.operand2
    },
    // Возведение в степень
    degree() {
      this.result = Math.pow(this.operand1, this.operand2)
    },
    // Выделение целой части
    whole() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },

    doCalc(operator) {
      this.error = ''
      switch (operator) {
        case "+":
          this.sum()
          break;
        case "-":
          this.deduction()
          break;
        case "*":
          this.mult()
          break;
        case "/":
          this.divide()
          break;
        case "^":
          this.degree();
          break;
        case "//":
          this.whole();
          break;
        default:
          break;
      }
    },

    inputOperand(value) {
      console.log(value)
      this[this.selectedOperand] = Number('' + this[this.selectedOperand] + value)
    },
    backspase() {
      this[this.selectedOperand] = Math.trunc(this[this.selectedOperand] / 10)
    },
    minus() {
      this[this.selectedOperand] = this[this.selectedOperand] * -1
    }
  }
}
</script>


<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}

button {
  margin: 10px 0;
}

.error {
  color: darkred;
  border: 1px solid darkred;
  padding: 10px;
  display: block;
  margin: 10px;
}
</style>