<template>
  <div>
    <!-- Menu toggle -->
    <a href="#menu" id="menuLink" class="menu-link">
      <!-- Hamburger icon -->
      <span></span>
    </a>

    <div id="menu">
      <div class="pure-menu">
        <a class="pure-menu-heading" href="#">JAMSTACK Test</a>

        <ul class="pure-menu-list">
          <li class="pure-menu-item"><nuxt-link :to="'/posts'" class="pure-menu-link">Posts</nuxt-link></li>
          <li class="pure-menu-item"><nuxt-link :to="'/about'" class="pure-menu-link">About</nuxt-link></li>
          <li class="pure-menu-item"><nuxt-link :to="'/team'" class="pure-menu-link">Team</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
