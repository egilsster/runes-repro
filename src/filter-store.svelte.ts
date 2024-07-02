import { localStore } from "./localStore.svelte";

function createFilter() {
  let filter = localStore("repro-test-filter", "");

  return {
    get filter() {
      return filter.value.toLocaleLowerCase();
    },
    set filter(newFilter: string) {
      filter.value = newFilter;
    },
  };
}

export const filterStore = createFilter();
