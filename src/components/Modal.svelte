<script lang="ts">
  export let dismiss: (() => void) | undefined = undefined;

  function preventCardDismiss(ev: Event) {
    ev.preventDefault();
  }
</script>

<div class="modal">
  <div class="modal--backdrop" on:click={dismiss} />
  <div class="modal--card-container">
    <div class="modal--card">
      <button class="modal-close ui-button" on:click={dismiss}>x</button>
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
    z-index: 104;
  }
  .modal--backdrop {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #4448;
    z-index: 104;
    cursor: pointer;
  }
  .modal--card-container {
    position: absolute;
    top: 44px;
    width: 500px;
    max-width: calc(100% - 32px);
    height: max-content;
    max-height: calc(100% - 88px);
    z-index: 105;
    display: flex;
    justify-content: center;
    padding: 0 16px;
  }
  @media screen and (min-width: 500px) {
    .modal--card-container {
      left: calc(50% - 266px);
    }
  }
  .modal--card {
    position: relative;
    width: 500px;
    background-color: #eee;
    border-radius: 16px;
    padding: 42px;
    overflow: auto;
    cursor: initial;
  }

  .modal-close {
    position: absolute;
    right: 42px;
    width: 34px;
  }
</style>
