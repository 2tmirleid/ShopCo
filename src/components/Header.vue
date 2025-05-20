<template>
  <header>
    <div class="header__laptop">
      <div class="header__logo">
        <h1><a href="/">shop.co</a></h1>
      </div>

      <div class="header__navbar">
        <ul>
          <li
              class="navbar-item"
              v-for="(item, index) in navbarItems"
              :key="index"
          >
            <a :href="item.link">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>

      <div class="header__search">
        <div class="search-wrapper">
          <img src="@/public/header/searchLoupe.svg" alt="Search">
          <input type="text" placeholder="Search for products...">
        </div>
      </div>

      <div class="header__personal">
        <a :href="cartLink">
          <img src="@/public/header/cart.svg" alt="">
        </a>

        <a :href="userLink">
          <img src="@/public/header/user.svg" alt="">
        </a>
      </div>
    </div>

    <div class="header__mobile">
      <div class="header__mobile-search" v-if="searchVisible && !menuVisible">
        <div class="search-wrapper">
          <img id="loupe" src="@/public/header/searchLoupe.svg" alt="Search">
          <input type="text" placeholder="Search for products...">
          <img id="close" src="@/public/header/closeSearch.svg" alt="Close search" @click="hideSearch">
        </div>
      </div>

      <div class="left-side" v-if="!searchVisible && !menuVisible">
        <div class="navbar">
          <div class="burger__menu" @click="showMenu">
            <div class="burger__menu-item"></div>
            <div class="burger__menu-item"></div>
            <div class="burger__menu-item"></div>
          </div>
        </div>

        <div class="header__mobile-logo">
          <h1><a href="/">shop.co</a></h1>
        </div>
      </div>

      <div class="accordion_menu" v-if="menuVisible">
        <ul>
          <li
              class="navbar-item__mobile"
              v-for="(item, index) in navbarItems"
              :key="index"
          >
            <a :href="item.link">
              {{ item.title }}
            </a>
          </li>
        </ul>

        <img id="close" src="@/public/header/closeSearch.svg" alt="Close search" @click="hideMenu">
      </div>

      <div class="right-side" v-if="!searchVisible && !menuVisible">
        <img src="@/public/header/searchLoupeMobile.svg" alt="" @click="showSearch">
        <a :href="cartLink"><img src="@/public/header/cart.svg" alt=""></a>
        <a :href="userLink"><img src="@/public/header/user.svg" alt=""></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  'name': 'Header',
  data() {
    return {
      navbarItems: [
        {
          link: '#',
          title: 'Shop'
        },
        {
          link: '#',
          title: 'On Sale'
        },
        {
          link: '#',
          title: 'New Arrivals'
        },
        {
          link: '#',
          title: 'Brands'
        },
      ],
      cartLink: '#',
      userLink: '#',

      searchVisible: false,
      menuVisible: false,
    }
  },
  methods: {
    showSearch() {
      this.searchVisible = true;
    },
    hideSearch() {
      this.searchVisible = false;
    },

    showMenu() {
      this.menuVisible = true;
    },
    hideMenu() {
      this.menuVisible = false;
    }
  }
}
</script>

<style scoped>
header {
  --searchInputBgColor: #F0F0F0;
}

@media screen and (min-width: 1440px) {
  .header__mobile {
    display: none;
  }

  .header__laptop {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    .header__logo h1 {
      font-family: Integral CF, sans-serif;
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 1000;

      a {
        text-decoration: none;
        color: #000000;
      }
    }

    .header__navbar {
      ul {
        list-style: none;

        display: flex;
        gap: 24px;

        a {
          text-decoration: none;
          color: #000000;

          font-family: Satoshi, sans-serif;
          font-size: 16px;
        }
      }
    }

    .header__search {
      position: relative;

      .search-wrapper {
        position: relative;

        img {
          position: absolute;
          top: 13px;
          left: 20px;
        }

        input {
          width: 580px;
          height: 50px;
          border-radius: 62px;
          background-color: var(--searchInputBgColor);
          border: none;
          outline: none;
          padding-left: 52px;
          font-size: 16px;
          font-family: Satoshi, sans-serif;
        }
      }
    }

    .header__personal {
      display: flex;
      gap: 15px;
    }
  }
}

@media screen and (max-width: 420px) {
  .header__laptop {
    display: none;
  }

  .header__mobile {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 18px;
    padding-right: 18px;

    .header__mobile-search {
      position: relative;
      padding-left: 15px;

      .search-wrapper {
        position: relative;

        #loupe {
          position: absolute;
          top: 13px;
          left: 20px;
        }

        #close {
          position: absolute;
          top: 17px;
          right: 20px;
        }

        input {
          width: 300px;
          height: 50px;
          border-radius: 62px;
          background-color: var(--searchInputBgColor);
          border: none;
          outline: none;
          padding-left: 52px;
          font-size: 16px;
          font-family: Satoshi, sans-serif;
        }
      }
    }

    .left-side {
      display: flex;
      align-items: center;

      gap: 16px;
    }

    .header__mobile-logo {
      h1 {
        font-family: "Integral CF", sans-serif;
        font-size: 25px;
        text-transform: uppercase;
        font-weight: 1000;

        a {
          text-decoration: none;
          color: #000000;
        }
      }
    }

    .navbar {
      .burger__menu {
        width: 24px;
        height: 24px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;

        .burger__menu-item {
          width: 20px;
          height: 3px;
          background-color: #000000;
          border-radius: 2px !important;
        }
      }
    }

    .right-side {
      display: flex;
      gap: 14px;
    }
  }

  .accordion_menu {
    display: flex;
    gap: 25px;
    margin: 0 auto;

    ul {
      width: 100%;
      list-style: none;
      display: flex;
      gap: 25px;

      .navbar-item__mobile {
        a {
          text-decoration: none;
          color: #000000;
          font-family: Satoshi, sans-serif;
        }
      }
    }
  }
}
</style>