import React, { Component } from "react";
import Element from "./element";

class Elements extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center m-5">To-Do List</h1>
                <div className="row m-4 border border-5 border-white rounded-3">
                    <div className="form-floating col-10 m-4">
                        <input
                            type="text"
                            id="message"
                            className="form-control fw-bold fs-4 border-3"
                            placeholder="Do Something"
                        />
                        <label for="message" className="ms-2 fw-bold fs-6">
                            &nbsp; Task
                        </label>
                    </div>
                    <div className="col-1 m-4">
                        <button
                            className="btn btn-primary fs-3 rounded-3"
                            onClick={this.props.onCreate}
                        >
                            Create
                        </button>
                    </div>
                </div>
                <div className="row m-4 border border-5 border-white rounded-3">
                    <br />
                    {this.props.elements.map((element) => (
                        <Element
                            key={element.id}
                            element={element}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Elements;
