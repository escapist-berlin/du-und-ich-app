<template>
  <footer>
    <nav>
      <ul class="footer-links">
        <li><a href="#">Alle Anzeigen</a></li>
        <li><a href="#">1919-1933</a></li>
        <li><a href="#">1950's</a></li>
        <li><a href="#">1970's</a></li>
        <li><a href="#">1980's</a></li>
        <li><a href="#">1990's</a></li>
        <li><a href="#">Schlagwörter</a></li>
        <li><a href="#">Über Dieses Projekt</a></li>
      </ul>
    </nav>
    <button>Click Me</button>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" scoped>
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 0.5px solid #261824;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 10px;

      a {
        text-decoration: none;
      }
    }
  }
</style>