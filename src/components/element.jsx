import React, { Component } from "react";

class Element extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="border border-3 border-white rounded-3 col-10 m-4">
                    <h1 className="form-text text-wrap fw-bolder fs-6 mt-3">
                        {this.props.element.message}
                    </h1>
                </div>
                <div className="col-1 m-4">
                    <button
                        className="btn btn-danger fs-3 rounded-3"
                        onClick={() => this.props.onDelete(this.props.element)}
                    >
                        Delete
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
export default Element;
