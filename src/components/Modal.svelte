<script lang="ts">
  export let dismiss: (() => void) | undefined = undefined;
</script>

<div class="modal">
  <div class="modal--backdrop" />
  <div class="modal--card-container">
    <div class="modal--card">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 4;
  }
  .modal--backdrop {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #4448;
    z-index: 4;
  }
  .modal--card-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: max-content;
    z-index: 5;
    display: flex;
    justify-content: center;
  }
  .modal--card {
    width: 500px;
    background-color: #eeed;
    border-radius: 16px;
    z-index: 5;
    margin-bottom: 42px;
    padding: 42px;
  }
</style>
