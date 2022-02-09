<template>
  <!-- Main Area -->
  <main>
    <!-- Hero -->
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 95vh"
    >
      <div
        class="absolute top-0 w-full h-full bg-top bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
        "
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto" data-aos="fade-in">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 class="text-white font-semibold text-5xl">
                J <span class="text-teal-500">Parker</span></h1>
                <p class="text-xl text-gray-500">Fully responsive and extremely fast modern applications and web pages tailor made for each customers needs and wants</p>

              <a
                href="#"
                class="bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white p-4 border border-gray-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer active:translate-y-5"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px; transform: translateZ(0px)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="relative py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div
            class="w-full md:w-4/12 ml-auto mr-auto px-4"
            data-aos="fade-right"
          >
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg opacity-50"
              src="https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </div>
          <div
            class="w-full md:w-5/12 ml-auto mr-auto px-4"
            data-aos="fade-left"
          >
            <div class="md:pr-12">
              <small class="text-orange-500">About my work</small>
              <h3 class="text-4xl uppercase font-bold">Full Stack</h3>
            
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="font-semibold inline-block py-3 mr-3 text-orange-500"
                        ><i class="fas fa-dumbbell fa-2x"></i
                      ></span>
                    </div>
                    <div>
                      <h4 class="text-xl">
                      From custom tailored designs to full production deployment
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="font-semibold inline-block py-3 mr-3 text-orange-500"
                        ><i class="fas fa-hard-hat fa-2x"></i
                      ></span>
                    </div>
                    <div>
                      <h4 class="text-xl">
                        Vue/Vite applications and web sites that run extremely fast
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="font-semibold inline-block py-3 mr-3 text-orange-500"
                        ><i class="fas fa-users fa-2x"></i
                      ></span>
                    </div>
                    <div>
                      <h4 class="text-xl">Systems integrations including Crestron, Qsys, Dante, Control4, BrightSign</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trainers Section -->
    <section class="pt-20 pb-48">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold uppercase">Demo Projects</h2>
            <p class="text-lg leading-relaxed m-4">
             Some test projects to give some examples and ideas for customers
            </p>
          </div>
        </div>
        <!-- Trainer Card Wrapper -->
        <div class="flex flex-wrap">
          <!-- Card 1 -->
          <div
            class="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div class="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1589185810360-8ea760bb9836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                class="shadow-lg rounded max-w-full mx-auto"
                style="max-width: 250px"
              />
              <div class="pt-6 text-center">
                <a href="https://monsteria-vite.netlify.app/"><h5 class="text-xl font-bold">Monsteria</h5></a>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Mobile First Plant app
                </p>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div
            class="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div class="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                class="shadow-lg rounded max-w-full mx-auto"
                style="max-width: 250px"
              />
              <div class="pt-6 text-center">
                <a href="https://vue-grocery-f79c2.web.app/"><h5 class="text-xl font-bold">Grocery List App</h5></a>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Tied to a backend database to handle grocery items
                </p>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div
            class="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div class="px-6">
              <img
                alt="..."
                src="https://icon-library.com/images/github-icon-white/github-icon-white-2.jpg"
                class="shadow-lg rounded max-w-full mx-auto"
                style="max-width: 250px"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">GitHub Repos</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  lots of projects in my public repositories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Header Section -->
    <section class="pb-20 relative block bg-black text-white">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px; transform: translateZ(0px)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white uppercase">
              Contact Us
            </h2>
            <p class="text-lg leading-relaxed mt-4 mb-4">
              Contact us to ask any questions
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="relative block py-24 lg:pt-0 bg-black">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              data-aos="fade-up-right"
            >
              <div class="flex-auto p-5 lg:p-10 bg-teal-500 text-white">
                <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                <p class="leading-relaxed mt-1 mb-4">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <form netlify>
                  <input type="hidden" name="form-name" value="contact">
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-xs font-bold mb-2"
                    for="full-name"
                    >Full Name</label
                  ><input
                    type="text"
                    v-model="name"
                    class="px-3 py-3 placeholder-gray-800 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-xs font-bold mb-2"
                    for="email"
                    >Email</label
                  ><input
                    type="email"
                    v-model="email"
                    class="px-3 py-3 placeholder-gray-800 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-xs font-bold mb-2"
                    for="message"
                    >Message</label
                  ><textarea
                    v-model="text"
                    rows="4"
                    cols="80"
                    class="px-3 py-3 placeholder-gray-800 bg-white text-gray-500 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style="transition: all 0.15s ease 0s"
                  >
                    Send Message
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    // submit the form to our backend api
    async submitForm() {
      const res = await fetch('/backend-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        // pass in the information from our form
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
        }) 
      });
    } 
  }
}</script>

<style>
</style>