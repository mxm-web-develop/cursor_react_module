Auto Generating Selectors
=========================

We recommend using selectors when using either the properties or actions from the store. You can access values from the store like so:

    const bears = useBearStore((state) => state.bears)
    

However, writing these could be tedious. If that is the case for you, you can auto-generate your selectors.

[

Create the following function: `createSelectors`
------------------------------------------------

](#create-the-following-function:-createselectors)

    import { StoreApi, UseBoundStore } from 'zustand'
    
    type WithSelectors<S> = S extends { getState: () => infer T }
      ? S & { use: { [K in keyof T]: () => T[K] } }
      : never
    
    const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
      _store: S,
    ) => {
      let store = _store as WithSelectors<typeof _store>
      store.use = {}
      for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
      }
    
      return store
    }
    

If you have a store like this:

    interface BearState {
      bears: number
      increase: (by: number) => void
      increment: () => void
    }
    
    const useBearStoreBase = create<BearState>()((set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
      increment: () => set((state) => ({ bears: state.bears + 1 })),
    }))
    

Apply that function to your store:

    const useBearStore = createSelectors(useBearStoreBase)
    

Now the selectors are auto generated and you can access them directly:

    // get the property
    const bears = useBearStore.use.bears()
    
    // get the action
    const increment = useBearStore.use.increment()
    

[

Vanilla Store
-------------

](#vanilla-store)

If you are using a vanilla store, use the following `createSelectors` function:

    import { StoreApi, useStore } from 'zustand'
    
    type WithSelectors<S> = S extends { getState: () => infer T }
      ? S & { use: { [K in keyof T]: () => T[K] } }
      : never
    
    const createSelectors = <S extends StoreApi<object>>(_store: S) => {
      const store = _store as WithSelectors<typeof _store>
      store.use = {}
      for (const k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () =>
          useStore(_store, (s) => s[k as keyof typeof s])
      }
    
      return store
    }
    

The usage is the same as a React store. If you have a store like this:

    import { createStore } from 'zustand'
    
    interface BearState {
      bears: number
      increase: (by: number) => void
      increment: () => void
    }
    
    const store = createStore<BearState>((set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
      increment: () => set((state) => ({ bears: state.bears + 1 })),
    }))
    

Apply that function to your store:

    const useBearStore = createSelectors(store)
    

Now the selectors are auto generated and you can access them directly:

    // get the property
    const bears = useBearStore.use.bears()
    
    // get the action
    const increment = useBearStore.use.increment()
    

[

Live Demo
---------

](#live-demo)

For a working example of this, see the [Code Sandbox](https://codesandbox.io/s/zustand-auto-generate-selectors-forked-rl8v5e?file=/src/selectors.ts).

[

Third-party Libraries
---------------------

](#third-party-libraries)

*   [auto-zustand-selectors-hook](https://github.com/Albert-Gao/auto-zustand-selectors-hook)
*   [react-hooks-global-state](https://github.com/dai-shi/react-hooks-global-state)
*   [zustood](https://github.com/udecode/zustood)
*   [@davstack/store](https://github.com/DawidWraga/davstack)

[Edit this page](https://github.com/pmndrs/zustand/edit/main/docs/guides/auto-generating-selectors.md)

Previous

[Flux inspired practice](/guides/flux-inspired-practice)

Next

[Practice with no store actions](/guides/practice-with-no-store-actions)