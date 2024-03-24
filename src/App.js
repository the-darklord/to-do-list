import "./App.css";
import React, { Component } from "react";
import Elements from "./components/elements";

class App extends Component {
    state = {
        elements: [],
    };

    componentDidMount() {
        const elements = localStorage.getItem("elements");
        if (elements) {
            this.setState({ elements: JSON.parse(elements) });
        }
    }

    componentDidUpdate() {
        localStorage.setItem("elements", JSON.stringify(this.state.elements));
    }

    handleDelete = (element) => {
        const elements = this.state.elements.filter((e) => e.id !== element.id);
        this.setState({ elements });
    };

    handleCreate = () => {
        const message = document.getElementById("message").value;
        const id = this.state.elements.length + 1;
        const elements = this.state.elements;
        elements.push({ id, message });
        this.setState({ elements });
        document.getElementById("message").value = "";
    };

    render() {
        return (
            <React.Fragment className="container-fluid d-flex flex-column ms-5 justify-content-center align-items-center">
                <main className="container-fluid">
                    <Elements
                        elements={this.state.elements}
                        onDelete={this.handleDelete}
                        onCreate={this.handleCreate}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
