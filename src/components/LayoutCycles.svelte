<script lang="ts">
  import { cycles } from "../stores/cycles.store";
  import { passTurn } from "../use-cases/pass-turn/pass-turn";
</script>

<div id="cycles">
  <h2>Cycle actuel</h2>
  <p>{$cycles}</p>
  <button on:click={() => passTurn()} on:keydown={() => passTurn()}
    >Prochain tour</button
  >
</div>

<style lang="scss">
  #cycles {
    position: fixed;
    z-index: 16;
    bottom: 0;
    right: 0;
    background-color: #eee6;
    border-top-left-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    color: white;
  }
  h2 {
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 0;
    order: 1;
  }
  p {
    order: 2;
  }
  button {
    order: 3;
  }
</style>
