<script lang="ts">
  import { filterStore } from "./filter-store.svelte";
  import { filteredItems } from "./item-store.svelte";

  // import { itemStore } from "./item-store.svelte";
  // Works here but not in another store
  // const filteredItems = $derived.by(() => {
  //   const { filter } = filterStore;
  //   const { items } = itemStore;

  //   if (filter.length === 0) {
  //     return items;
  //   }
  //   return items.filter((item) =>
  //     item.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  //   );
  // });
</script>

<input type="search" bind:value={filterStore.filter} />

<p>Filter: {filterStore.filter}</p>

<section>
  {#each filteredItems as item}
    <div>{item}</div>
  {/each}
</section>
