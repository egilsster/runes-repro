function createFilter() {
  let filter = $state("");

  return {
    get filter() {
      return filter.toLocaleLowerCase();
    },
    set filter(newFilter: string) {
      filter = newFilter;
    },
  };
}

export const filterStore = createFilter();
