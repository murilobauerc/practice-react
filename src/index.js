import React, { Component } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

export default class App extends Component {
  state = {
    usuarios: [
      {
        author: "Veller",
        date: new Date().getDate(),
        text: "Delicious food.",
        src: faker.image.avatar(),
        age: faker.random.number(),
        id: 1
      },
      {
        author: "Murilo",
        date: new Date().getDate(),
        text: "Delicious food.",
        src: faker.image.avatar(),
        age: faker.random.number(),
        id: 2
      },
      {
        author: "Jean",
        date: new Date().getDate(),
        text: "Delicious food.",
        src: faker.image.avatar(),
        age: faker.random.number(),
        id: 3
      }
    ]
  };

  handleDelete = (event, userToBeDeleted) => {
    event.preventDefault();
    this.setState({
      usuarios: this.state.usuarios.filter(u => u.id !== userToBeDeleted)
    });
  };

  render() {
    return (
      <div className="ui container comments">
        {this.state.usuarios.map(usuario => (
          <CommentDetail
            author={usuario.author}
            date={usuario.date}
            text={usuario.text}
            src={usuario.src}
            age={usuario.age}
            id={usuario.id}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
