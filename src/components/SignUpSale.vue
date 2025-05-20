<template>
  <div
      class="signup-sale"
      v-if="isOn"
  >
    <div class="signup-sale__text">
      Sign up and get 20% off to your first order. <a href="">Sign Up Now</a>
    </div>

    <div class="signup-sale__close">
      <img src="@/public/signUpSale/close.svg" alt="Close sale banner">
    </div>
  </div>
</template>

<script>
export default {
  'name': 'SignUpSale',
  props: {
    isOn: {
      type: Boolean,
      require: true
    }
  }
}
</script>

<style scoped>
.signup-sale {
  --textColor: #FFFFFF;

  height: 40px;
  background-color: #000000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .signup-sale__text {
    margin: 0 auto;
    color: var(--textColor);
    font-family: 'Satoshi', sans-serif;
    font-size: 14px;

    a {
      text-decoration: none;
      color: var(--textColor);
      font-weight: normal;
      border-bottom: 2px solid var(--textColor);
    }
  }

  .signup-sale__close {
    cursor: pointer;
    padding-right: 100px;
  }
}

@media screen and (max-width: 420px) {
  .signup-sale {
    display: flex;
  }

  .signup-sale__close {
    display: none;
  }

  .signup-sale__text {
    font-size: 12px !important;
  }
}
</style>