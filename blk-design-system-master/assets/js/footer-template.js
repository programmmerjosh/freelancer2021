class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <!-- Form Modal -->
        <div
          class="modal fade modal-black"
          id="myModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  <i class="tim-icons icon-simple-remove text-white"></i>
                </button>
                <div class="text-muted text-center ml-auto mr-auto">
                  <h3 class="mb-0">Contact</h3>
                </div>
              </div>

              <div class="modal-body">
                <div class="btn-wrapper text-center">
                  <!-- could put something here -->
                </div>
                <div class="text-left text-muted mb-4 mt-3">
                  <small class="text-white-50">Feel free to:
                    <ul>
                      <li>Ask any questions about my services</li>
                      <li>Share an app or business idea</li>
                      <li>Ask for some advice</li>
                    </ul>
                  </small>
                </div>
                
                <form class="the-modal-form" role="form">
                  <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                      <div class="my-input-item">
  
                        <span class="input-group-text pr-3">
                          Name
                        </span>
  
                      </div>
  
                      <input
                        class="form-control"
                        placeholder="Name"
                        type="name"
                      />
  
                    </div>
                  </div>
  
                  <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                      <div class="">
  
                        <span class="input-group-text pr-3">
                          Email
                        </span>
  
                      </div>
  
                      <input
                        class="form-control"
                        placeholder="Email address"
                        type="email"
                      />
  
                    </div>
                  </div>
  
                  <div class="form-group mb-3">
                    <div class="input-group input-group-alternative">
                      <div class="">
  
                        <span class="input-group-text pr-3 my-aqua-color">
                          Message
                        </span>
  
                      </div>
  
                      <textarea class="form-control" rows="5" cols="60" name="message" placeholder="Message"></textarea><br>
  
                    </div>
                  </div>
                  <div class="form-check mt-3">
                    
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary my-4">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--  End Modal -->

    </div>
    <!--  End Of Main Section -->

    <!-- JOSH USING -->
    <!-- FOOTER SECTION => DONE -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- <div class="col-md-3">
            <h1 class="title">Services•</h1>
          </div> -->
          <div class="col-md-3">
            <ul class="nav">
              <li id="scroll-navigate" class="nav-item">
                <a href="#page-top" class="nav-link"> Home </a>
              </li>
              <li class="nav-item">
                <a href="pricing" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="collaborate" class="nav-link">
                  Collaborate
                </a>
              </li>
              <li class="nav-item">
                <a href="resume" class="nav-link">
                  ResumÉ
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="nav">
              <li class="nav-item">
                <a data-toggle="modal" data-target="#myModal2" href="" class="nav-link">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a href="about" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="blog" class="nav-link">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a href="disclaimer" class="nav-link">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3 class="title">Connect with me:</h3>
            <div class="btn-wrapper profile">
              <a
                target="_blank"
                href="https://github.com/programmmerjosh"
                class="btn btn-icon btn-neutral btn-round btn-simple"
                data-toggle="tooltip"
                data-original-title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/josh_kenneth101/"
                class="btn btn-icon btn-neutral btn-round btn-simple"
                data-toggle="tooltip"
                data-original-title="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- </div> -->

`
    }
}

customElements.define('my-footer', MyFooter);



