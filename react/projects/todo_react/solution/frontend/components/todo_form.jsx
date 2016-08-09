const React = require('react');
const TodoStore = require('../stores/todo_store');

const TodoForm = React.createClass({
  getInitialState() {
    return {title: "", body: "", done: false};
  },

  updateTitle(event) {
    this.setState({title: event.currentTarget.value});
  },

  updateBody(event) {
    this.setState({body: event.currentTarget.value});
  },

  handleSubmit(event) {
    event.preventDefault();
    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: ""});
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            ref="title"
            className="form-control"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.updateTitle}/>
        </div>
        <div className="form-group">
          <textarea
            ref="body"
            cols='20'
            className="form-control"
            value={this.state.body}
            rows='5'
            onChange={this.updateBody}></textarea>
        </div>
        <button className="submit-todo btn btn-primary">Create Todo!</button>
      </form>
    );
  }
});

module.exports = TodoForm;
