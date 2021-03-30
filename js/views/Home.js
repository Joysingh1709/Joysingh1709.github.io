import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home View");
    }

    async getHtml() {
        return `
            <h1> Welcome THis html is from Home.js file </h1>
            <p>We are trying to make a static website with routing</p>
            <a href="/projects" data-link>See projects</>
        `;
    }
}