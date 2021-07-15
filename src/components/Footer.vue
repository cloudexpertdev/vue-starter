<template>
  <footer class="absolute w-full bottom-0 pb-6">
    <div class="container mx-auto px-4">
      <div
        class="
          flex flex-wrap
          items-center
          md:justify-between
          justify-center
          text-gray-400
        "
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm py-1">
            <a href="https://www.linkedin.com/in/ksck23/" class="text-sm py-1"
              >&nbsp; Shiva Kaithalapuram - {{ year }}</a
            >
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://www.linkedin.com/in/ksck23/"
                class="text-sm block py-1 px-3"
                target="_blank"
                >LinkedIN</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
