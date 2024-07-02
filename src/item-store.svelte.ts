import { filterStore } from "./filter-store.svelte";
import { localStore } from "./localStore.svelte";

const initialState = [
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
];

function createItemStore() {
  const items = $state(initialState);
  const filteredItems = $derived.by(() => {
    const { filter } = filterStore;
    const { items } = itemStore;

    return filter.length === 0
      ? items
      : items.filter((item) =>
          item.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
  });

  return {
    get items() {
      return items;
    },
    get filteredItems() {
      return filteredItems;
    },
  };
}

export const itemStore = createItemStore();
