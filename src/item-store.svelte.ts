import { filterStore } from "./filter-store.svelte";

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
  let items = $state(initialState);

  return {
    get items() {
      return items;
    },
  };
}

export const itemStore = createItemStore();

function createFilteredItemStore() {
  const { filter } = filterStore;
  const { items } = itemStore;

  const filteredItems = $derived.by(() => {
    if (filter.length === 0) {
      return items;
    }
    return items.filter((item) =>
      item.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  });
  return filteredItems;
}

export const filteredItems = createFilteredItemStore();
