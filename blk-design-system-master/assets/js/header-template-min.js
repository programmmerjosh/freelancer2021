class MyHeader extends HTMLElement{connectedCallback(){this.innerHTML='\n        \x3c!-- JOSH USING --\x3e\n        \x3c!-- Navbar => DONE --\x3e\n        <nav\n          class="navbar navbar-expand-lg fixed-top navbar-transparent bg-neutral"\n          color-on-scroll="100"\n        >\n          <div class="container">\n            <div id="scroll-navigate" class="navbar-translate">\n              <a\n                class="navbar-brand"\n                href="/"\n                rel="tooltip"\n                title="Typical stack: Bootstrap, HTML, CSS & jQuery"\n                data-placement="bottom"\n              >\n                <div\n                  id="joshua-van-niekerk"\n                  class="d-block d-sm-inline font-weight-bold"\n                  color-on-scroll="100"\n                >\n                  Joshua van Niekerk•\n                </div>\n                <div\n                  id="web-dev-freelancer"\n                  class="d-inline text-wrap"\n                  color-on-scroll="100"\n                >\n                  Web Developer Freelancer\n                </div>\n              </a>\n              <button\n                class="navbar-toggler navbar-toggler"\n                type="button"\n                data-toggle="collapse"\n                data-target="#navigation"\n                aria-controls="navigation-index"\n                aria-expanded="false"\n                aria-label="Toggle navigation"\n              >\n                <span class="navbar-toggler-bar bar1" color-on-scroll="100"></span>\n                <span class="navbar-toggler-bar bar2" color-on-scroll="100"></span>\n                <span class="navbar-toggler-bar bar3" color-on-scroll="100"></span>\n              </button>\n            </div>\n            <div\n              class="collapse navbar-collapse justify-content-end"\n              id="navigation"\n            >\n              <div class="navbar-collapse-header">\n                <div class="row">\n                  <div class="col-6 collapse-brand">\n                    <a id="navbar-collapse-heading" color-on-scroll="100"> Freelancer </a>\n                  </div>\n                  <div class="col-6 collapse-close text-right">\n                    <button\n                      type="button"\n                      class="navbar-toggler"\n                      data-toggle="collapse"\n                      data-target="#navigation"\n                      aria-controls="navigation-index"\n                      aria-expanded="false"\n                      aria-label="Toggle navigation"\n                    >\n                      <i id="navbar-collapse-heading" class="tim-icons icon-simple-remove" color-on-scroll="100"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <ul class="navbar-nav">\n                <li class="nav-item p-0">\n                  <a\n                    class="nav-link"\n                    rel="tooltip"\n                    title="View some of my projects"\n                    data-placement="bottom"\n                    href="https://github.com/programmmerjosh" \n                    target="_blank"\n                  >\n                    <i id="nav-link-social-media-icon" class="fab fa-github" color-on-scroll="100"></i>\n                    <p id="nav-link-social-media-text" class="d-lg-none d-xl-none" color-on-scroll="100">GitHub</p>\n                  </a>\n                </li>\n                <li class="nav-item p-0">\n                  <a\n                    class="nav-link"\n                    rel="tooltip"\n                    title="Follow me on Instagram"\n                    data-placement="bottom"\n                    href="https://www.instagram.com/josh_kenneth101/" target="_blank"\n                  >\n                    <i id="nav-link-social-media-icon" class="fab fa-instagram" color-on-scroll="100"></i>\n                    <p id="nav-link-social-media-text" class="d-lg-none d-xl-none" color-on-scroll="100">Instagram</p>\n                  </a>\n                </li>\n                <li class="dropdown nav-item">\n                  <a\n                    id="nav-link-getting-started"\n                    href="#"\n                    class="dropdown-toggle nav-link"\n                    data-toggle="dropdown"\n                    color-on-scroll="100"\n                  >\n                    <i class="fa fa-cogs d-lg-none d-xl-none"></i> Getting started\n                  </a>\n                  <div class="dropdown-menu dropdown-with-icons">\n                    <a href="pricing" class="dropdown-item">\n                      <i class="tim-icons icon-paper"></i>Pricing\n                    </a>\n                    <a href="collaborate" class="dropdown-item">\n                      <i class="tim-icons icon-bullet-list-67"></i>Collaborate\n                    </a>\n                    <a href="https://www.think-write-grow.com" class="dropdown-item">\n                      <i class="tim-icons icon-image-02"></i>Blog\n                    </a>\n                    <a href="about" class="dropdown-item">\n                      <i class="tim-icons icon-single-02"></i>About\n                    </a>\n                  </div>\n                </li>\n                <li class="nav-item">\n                  <a\n                    class="nav-link btn btn-default d-none d-lg-block"\n                    rel="tooltip"\n                    title="I\'m is also the creator of Goal Symmetry and Founder of Sagacious Apps"\n                    data-placement="bottom"\n                    href="https://www.sagaciousapps.com/apps" target="_blank"\n                  >\n                    <i class="tim-icons icon-mobile"></i> Goal Symmetry\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </nav>\n        \x3c!-- End Navbar --\x3e\n\n'}}customElements.define("my-header",MyHeader);