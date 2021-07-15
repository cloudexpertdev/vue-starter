<template>
  <div>
    <main>
      <section class="absolute w-full h-full">
        <div class="container mx-auto px-4 h-full">
          <div class="flex items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  w-full
                  mb-6
                  shadow-lg
                  rounded-2xl
                  border-0
                  bg-white
                "
              >
                <div id="menu-button" class="flex grid justify-items-end">
                  <div
                    class="flex items-center"
                    style="position: absolute; top: -15px; right: -20px"
                  >
                    <button
                      class="
                        bg-blue-600
                        text-white
                        active:bg-purple-700
                        text-sm
                        font-semibold
                        uppercase
                        px-6
                        py-3
                        rounded-3xl
                        shadow
                        hover:shadow-lg
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                        w-full
                        h-20
                        w-8
                      "
                      v-on:click="toggleMenu"
                    >
                      <XIcon
                        v-if="newUser"
                        class="h-12 w-10 text-white"
                      ></XIcon>
                      <MenuIcon v-else class="h-12 w-10 text-white" />
                    </button>
                  </div>
                </div>

                <div
                  v-if="newUser"
                  id="signup-form"
                  class="flex-auto px-8 py-8 bg-blue-600 rounded-xl"
                >
                  <div class="grid grid-cols-2 gap-6">
                    <div class="flex">
                      <h4 class="font-bold text-white flex items-center">
                        <InformationCircleIcon class="h-5 w-5 text-white" />
                        <p>&nbsp; ocula</p>
                      </h4>
                    </div>
                  </div>
                  <div class="text-white text-3xl py-4 mb-3 font-bold">
                    <h2>Sign Up For Free, now</h2>
                  </div>
                  <form>
                    <div class="relative w-full mb-3">
                      <label
                        class="block text-white text-sm font-semibold mb-2"
                        for="grid-password"
                        >Username</label
                      ><input
                        type="text"
                        class="
                          border-1
                          px-3
                          py-3
                          outline-blue
                          focus:outline-blue
                          bg-transparent
                          placeholder-gray-400
                          text-white
                          rounded-md
                          text-sm
                          focus:outline-none focus:ring focus:border-white-500
                          w-full
                        "
                        placeholder="yourusername"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block text-white text-sm font-semibold mb-2"
                        for="grid-password"
                        >E-Mail</label
                      ><input
                        type="email"
                        class="
                          border-1 border-purple-500
                          px-3
                          py-3
                          outline-blue
                          focus:outline-blue
                          bg-transparent
                          placeholder-gray-400
                          text-white
                          rounded-md
                          text-sm
                          focus:outline-none focus:ring focus:border-purple-500
                          w-full
                        "
                        placeholder="youremail@gmail.com"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block text-white text-sm font-semibold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        class="
                          px-3
                          py-3
                          outline-blue
                          focus:outline-blue
                          bg-transparent
                          placeholder-gray-400
                          text-white
                          rounded-md
                          text-sm
                          focus:ring
                          w-full
                        "
                        placeholder="yourpassword"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="
                          bg-white
                          text-blue-600
                          active:bg-white
                          text-sm
                          font-semibold
                          uppercase
                          px-6
                          py-3
                          rounded-md
                          outline-none
                          focus:outline-none
                          mr-1
                          mb-1
                          w-full
                        "
                        type="button"
                        style="transition: all 0.15s ease 0s"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div class="text-center mt-3">
                    <a href="#" class="text-gray-300"
                      ><small>Forgot your password ?</small></a
                    >
                  </div>
                </div>

                <div
                  id="signin-form"
                  v-else
                  class="flex-auto px-8 pt-8 pb-20 rounded-xl"
                >
                  <div class="grid grid-cols-2 gap-6">
                    <div class="flex">
                      <h4 class="font-bold text-blue-600 flex items-center">
                        <InformationCircleIcon class="h-5 w-5 text-blue-600" />
                        <p>&nbsp; ocula</p>
                      </h4>
                    </div>
                  </div>
                  <div class="text-purple-900 text-3xl py-4 mb-3 font-bold">
                    <h2>Log In to Ocula</h2>
                  </div>
                  <form>
                    <div class="relative w-full mb-3">
                      <label
                        class="block text-purple-900 text-sm font-semibold mb-2"
                        for="grid-password"
                        >E-Mail</label
                      ><input
                        type="email"
                        class="
                          border-1 border-purple-500
                          px-3
                          py-3
                          placeholder-gray-400
                          text-purple-900
                          bg-white
                          rounded-md
                          text-sm
                          shadow
                          focus:outline-none focus:ring focus:border-purple-500
                          w-full
                        "
                        placeholder="youremail@gmail.com"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block text-purple-900 text-sm font-semibold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        class="
                          border-0
                          px-3
                          py-3
                          placeholder-gray-400
                          text-gray-700
                          bg-white
                          rounded-md
                          text-sm
                          shadow
                          focus:outline-none focus:ring
                          w-full
                        "
                        placeholder="yourpassword"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="
                          bg-purple-900
                          text-white
                          active:bg-purple-700
                          text-sm
                          font-semibold
                          uppercase
                          px-6
                          py-3
                          rounded-md
                          shadow
                          hover:shadow-lg
                          outline-none
                          focus:outline-none
                          mr-1
                          mb-1
                          w-full
                        "
                        type="button"
                        style="transition: all 0.15s ease 0s"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div class="text-center mt-3">
                    <a href="#" class="text-gray-300"
                      ><small>Forgot your password ?</small></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { MenuIcon } from "@heroicons/vue/outline";
import { XIcon } from "@heroicons/vue/outline";
import { InformationCircleIcon } from "@heroicons/vue/solid";

export default {
  name: "login-page",
  components: {
    MenuIcon,
    XIcon,
    InformationCircleIcon,
  },
  data() {
    return {
      newUser: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log(this.newUser);
      this.newUser = !this.newUser;
      console.log(this.newUser);
    },
  },
};
</script>
