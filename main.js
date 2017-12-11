Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks"> {{ task.description}}</task>
    </div>
    `, // Note that this is in back ticks ```

  data(){
    return {
      tasks: [
        {description: "Do something", completed: true},
        {description: "Do something else", completed: false},
        {description: "Watch videos", completed: true},
        {description: "Read a book", completed: false},
        {description: "Go code", completed: false},
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>' 
});

new Vue({
  el: '#root'
});