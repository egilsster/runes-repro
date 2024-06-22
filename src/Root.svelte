<script lang="ts">
  import { filterStore } from "./filter-store.svelte";
  import { itemStore } from "./item-store.svelte";
</script>

<input type="search" bind:value={filterStore.filter} />

<p>Filter: {filterStore.filter}</p>

<section>
  {#each itemStore.filteredItems as item}
    <div>{item}</div>
  {/each}
</section>
