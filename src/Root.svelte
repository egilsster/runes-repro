<script lang="ts">
  import { stack } from "./stack.svelte";

  // Works fine if its local to the file
  // function create() {
  //   let stack = $state<number[]>([]);

  //   return {
  //     get isOpen() {
  //       return stack.length > 0;
  //     },
  //     open: () => {
  //       stack.push(stack.length);
  //     },
  //     close: () => {
  //       stack.pop();
  //     },
  //     closeAll: () => {
  //       stack = [];
  //     },
  //   };
  // }

  // const stack = create();
</script>

<div>{stack.isOpen}</div>

<button onclick={stack.open}>Open</button>
<button onclick={stack.closeAll}>Close</button>
