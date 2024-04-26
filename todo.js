class Todo {
    constructor()
    {
      this.todos = [];
    }
  
    clear()
    {
      this.todos = [];
    }
  
    get(idx)
    {
      if(idx >= 0 && idx < this.todos.length)
      {
          return this.todos[idx];
      }
  
      return null;
    }
  
    getAll()
    {
      return this.todos;
    }
  
    update(idx,updatedTodo)
    {
      if(idx >= 0 && idx < this.todos.length)
      {
        this.todos[idx]=updatedTodo;
      }
    }
    remove(idx)
    {
      if(idx >= 0 && idx < this.todos.length)
      {
         this.todos.splice(idx,1);
      }
      return null;
    }
  
    add(todo)
    {
      this.todos.push(todo);
    }
  
  }
  
  module.exports = Todo;