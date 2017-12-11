// New component. name followed by what you want it to do 
Vue.component('task', {
  template: '<li><slot></slot></li>' // slot is used to get user input
});

new Vue({
  el: '#root'
});