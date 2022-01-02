class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <!-- JOSH USING -->
        <!-- Navbar => DONE -->
        <nav
          class="navbar navbar-expand-lg fixed-top navbar-transparent bg-neutral"
          color-on-scroll="100">
          <div class="container">
            <div id="scroll-navigate" class="navbar-translate">
              <a
                class="navbar-brand"
                href="/"
                rel="tooltip"
                title="Typical stack: Bootstrap, HTML, CSS & jQuery"
                data-placement="bottom"
              >
                <div
                  id="joshua-van-niekerk"
                  class="d-block d-sm-inline font-weight-bold"
                  color-on-scroll="100"
                >
                  Joshua van Niekerk•
                </div>
                <div
                  id="web-dev-freelancer"
                  class="d-inline text-wrap"
                  color-on-scroll="100"
                >
                  Web Developer Freelancer
                </div>
              </a>
              <button
                class="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-bar bar1" color-on-scroll="100"></span>
                <span class="navbar-toggler-bar bar2" color-on-scroll="100"></span>
                <span class="navbar-toggler-bar bar3" color-on-scroll="100"></span>
              </button>
            </div>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <div class="navbar-collapse-header">
                <div class="row">
                  <div class="col-6 collapse-brand">
                    <a id="navbar-collapse-heading" color-on-scroll="100"> Freelancer </a>
                  </div>
                  <div class="col-6 collapse-close text-right">
                    <button
                      type="button"
                      class="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navigation"
                      aria-controls="navigation-index"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i id="navbar-collapse-heading" class="tim-icons icon-simple-remove" color-on-scroll="100"></i>
                    </button>
                  </div>
                </div>
              </div>
              <ul class="navbar-nav">
                <li class="nav-item p-0">
                  <a
                    class="nav-link"
                    rel="tooltip"
                    title="View some of my projects"
                    data-placement="bottom"
                    href="https://www.joshua-resume.com/#projects" 
                    target="_blank"
                  >
                    <i id="nav-link-social-media-icon" class="fas fa-tasks" color-on-scroll="100"></i>
                    <p id="nav-link-social-media-text" class="d-lg-none d-xl-none" color-on-scroll="100">GitHub</p>
                  </a>
                </li>
                <li class="nav-item p-0">
                  <a
                    class="nav-link"
                    rel="tooltip"
                    title="Follow me on Instagram"
                    data-placement="bottom"
                    href="https://www.instagram.com/josh_kenneth101/" target="_blank"
                  >
                    <i id="nav-link-social-media-icon" class="fab fa-instagram" color-on-scroll="100"></i>
                    <p id="nav-link-social-media-text" class="d-lg-none d-xl-none" color-on-scroll="100">Instagram</p>
                  </a>
                </li>
                <li class="dropdown nav-item">
                  <a
                    id="nav-link-getting-started"
                    href="#"
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    color-on-scroll="100"
                  >
                    <i class="fa fa-cogs d-lg-none d-xl-none"></i> Getting started
                  </a>
                  <div class="dropdown-menu dropdown-with-icons">
                    <a href="pricing" class="dropdown-item">
                      <i class="tim-icons icon-paper"></i>Pricing
                    </a>
                    <a href="collaborate" class="dropdown-item">
                      <i class="tim-icons icon-bullet-list-67"></i>Collaborate
                    </a>
                    <a href="https://www.think-write-grow.com" class="dropdown-item">
                      <i class="tim-icons icon-image-02"></i>Truth & Critical Thinking
                    </a>
                    <a href="about" class="dropdown-item">
                      <i class="tim-icons icon-single-02"></i>About
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    id="gs" 
                    class="nav-link btn btn-default d-none d-lg-block"
                    rel="tooltip"
                    title="I'm is also the creator of Goal Symmetry and Founder of Sagacious Apps"
                    data-placement="bottom"
                    href="https://www.sagaciousapps.com/apps" target="_blank"
                  >
                    <i class="tim-icons icon-mobile"></i> Goal Symmetry
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->

`
    }
}

customElements.define('my-header', MyHeader);