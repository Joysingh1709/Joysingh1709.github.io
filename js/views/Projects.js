import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects View");
    }

    async getHtml() {
        return `
            <h1> This is projects View </h1>
            <p>We are trying to make a static website with routing</p>
            <a href="/" data-link>Got to home</>
        `;
    }
}