import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  contactId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name } = this.state;
    e.preventDefault();

    this.props.onSubmit(name);
    this.reset();
  };

  onSubmit = data => {
    console.log(data);
  };

  reset() {
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div className={css.main}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="type here"
              required
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default App;
