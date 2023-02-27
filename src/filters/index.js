import Vue from 'vue'


Vue.filter('addCurrency', (value) => {
    return value + '$'
  })