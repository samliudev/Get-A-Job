import Todo from "./models/Todo.js";

const resolvers = {
  Query: {
    welcome: () => {
      return "Let's get a job";
    },
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },
  Mutation: {
    addTodo: async (root, args) => {
      const newTodo = new Todo({
        title: args.title,
        detail: args.detail,
        date: args.date,
      });
      await newTodo.save();
      return newTodo;
    },
    deleteTodo: async (root, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "The todo was deleted successfully";
    },
    updateTodo: async (root, args) => {
      const { id, title, detail, date } = args;
      const updateTodo = {};
      if (title !== undefined) {
        updateTodo.title = title;
      }
      if (detail !== undefined) {
        updateTodo.detail = detail;
      }
      if (date !== undefined) {
        updateTodo.date = date;
      }
      const todo = await Todo.findByIdAndUpdate(id, updateTodo, { new: true });
      return todo;
    },
  },
};

export default resolvers;
