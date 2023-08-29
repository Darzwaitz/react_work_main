import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Dublin" };
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
          />
        </div>
        <button>Get Weather</button>
      </div>
    );
  }
}

export default App;
