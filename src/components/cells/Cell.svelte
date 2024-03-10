<script lang="ts">
  export let className: string | undefined = undefined;
</script>

<g class={`cell${className ? ` ${className}` : ""}`}>
  <slot />
</g>
