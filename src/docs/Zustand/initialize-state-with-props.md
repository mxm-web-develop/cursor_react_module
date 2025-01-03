Initialize state with props
===========================

In cases where [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) is needed, such as when a store should be initialized with props from a component, the recommended approach is to use a vanilla store with React.context.

[

Store creator with `createStore`
--------------------------------

](#store-creator-with-createstore)

    import { createStore } from 'zustand'
    
    interface BearProps {
      bears: number
    }
    
    interface BearState extends BearProps {
      addBear: () => void
    }
    
    type BearStore = ReturnType<typeof createBearStore>
    
    const createBearStore = (initProps?: Partial<BearProps>) => {
      const DEFAULT_PROPS: BearProps = {
        bears: 0,
      }
      return createStore<BearState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        addBear: () => set((state) => ({ bears: ++state.bears })),
      }))
    }
    

[

Creating a context with `React.createContext`
---------------------------------------------

](#creating-a-context-with-react.createcontext)

    import { createContext } from 'react'
    
    export const BearContext = createContext<BearStore | null>(null)
    

[

Basic component usage
---------------------

](#basic-component-usage)

    // Provider implementation
    import { useRef } from 'react'
    
    function App() {
      const store = useRef(createBearStore()).current
      return (
        <BearContext.Provider value={store}>
          <BasicConsumer />
        </BearContext.Provider>
      )
    }
    

    // Consumer component
    import { useContext } from 'react'
    import { useStore } from 'zustand'
    
    function BasicConsumer() {
      const store = useContext(BearContext)
      if (!store) throw new Error('Missing BearContext.Provider in the tree')
      const bears = useStore(store, (s) => s.bears)
      const addBear = useStore(store, (s) => s.addBear)
      return (
        <>
          <div>{bears} Bears.</div>
          <button onClick={addBear}>Add bear</button>
        </>
      )
    }
    

[

Common patterns
---------------

](#common-patterns)[

### Wrapping the context provider

](#wrapping-the-context-provider)

    // Provider wrapper
    import { useRef } from 'react'
    
    type BearProviderProps = React.PropsWithChildren<BearProps>
    
    function BearProvider({ children, ...props }: BearProviderProps) {
      const storeRef = useRef<BearStore>()
      if (!storeRef.current) {
        storeRef.current = createBearStore(props)
      }
      return (
        <BearContext.Provider value={storeRef.current}>
          {children}
        </BearContext.Provider>
      )
    }
    

[

### Extracting context logic into a custom hook

](#extracting-context-logic-into-a-custom-hook)

    // Mimic the hook returned by `create`
    import { useContext } from 'react'
    import { useStore } from 'zustand'
    
    function useBearContext<T>(selector: (state: BearState) => T): T {
      const store = useContext(BearContext)
      if (!store) throw new Error('Missing BearContext.Provider in the tree')
      return useStore(store, selector)
    }
    

    // Consumer usage of the custom hook
    function CommonConsumer() {
      const bears = useBearContext((s) => s.bears)
      const addBear = useBearContext((s) => s.addBear)
      return (
        <>
          <div>{bears} Bears.</div>
          <button onClick={addBear}>Add bear</button>
        </>
      )
    }
    

[

### Optionally allow using a custom equality function

](#optionally-allow-using-a-custom-equality-function)

    // Allow custom equality function by using useStoreWithEqualityFn instead of useStore
    import { useContext } from 'react'
    import { useStoreWithEqualityFn } from 'zustand/traditional'
    
    function useBearContext<T>(
      selector: (state: BearState) => T,
      equalityFn?: (left: T, right: T) => boolean,
    ): T {
      const store = useContext(BearContext)
      if (!store) throw new Error('Missing BearContext.Provider in the tree')
      return useStoreWithEqualityFn(store, selector, equalityFn)
    }
    

[

### Complete example

](#complete-example)

    // Provider wrapper & custom hook consumer
    function App2() {
      return (
        <BearProvider bears={2}>
          <HookConsumer />
        </BearProvider>
      )
    }
    

[Edit this page](https://github.com/pmndrs/zustand/edit/main/docs/guides/initialize-state-with-props.md)

Previous

[How to reset state](/guides/how-to-reset-state)

Next

[Slices Pattern](/guides/slices-pattern)