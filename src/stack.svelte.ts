function create() {
  let stack = $state<number[]>([]);

  return {
    get isOpen() {
      return stack.length > 0;
    },
    open: () => {
      stack.push(stack.length);
    },
    close: () => {
      stack.pop();
    },
    closeAll: () => {
      stack = [];
    },
  };
}

export const stack = create();
