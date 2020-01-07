// ES6
import { Datatable } from "@o2xp/react-datatable";
import React, { Component } from "react";

// Basic Example
let options = {
  keyColumn: "id",
  features: {
    rowsPerPage: {
      available: ["10", "20"],
      selected: 10
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Datatable
        options={{ ...options, data: this.props.data }}
        // dimensions={{ datatable: { height: "600px" } }}
      />
    );
  }
}

export default App;
