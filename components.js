class NavLinks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class=row-links>
            <div><a href="https://ring.liampas.ca/left">\<\<</a></div>
            <div><a href="index.html">home</a></div>
            <div><a href="https://github.com/liamvdvyver">github</a></div>
            <div><a href="https://linkedin.com/in/liam-van-der-vyver-2b21b5274">linkedin</a></div>
            <div><a href="https://instagram.com/_lvdv">'gram</a></div>
            <div><a href="https://ring.liampas.ca/right">\>\></a></div>
        </div>
        `;
    }
}
customElements.define("nav-links", NavLinks);

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class=col>
            <div class="site-title"><h2>Liam van der Vyver</h2></div>
            <nav-links></nav-links>
        </div>
        <hr></hr>
        `;
    }
}
customElements.define("main-header", Header);

class BigHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class=col>
            <div class="site-title"><h1>Liam van der Vyver</h1></div>
            <div class="tagline"><p>liamvdvyver@gmail.com | CS/Econ @ ANU</p></div>
            <nav-links></nav-links>
        </div>
        <hr></hr>
        `;
    }
}
customElements.define("big-header", BigHeader);
