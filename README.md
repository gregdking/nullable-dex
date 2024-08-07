# Nullables with Lit

Trying to use James Shore's Nullables approach when writing LitElement components.

- Want to break out properties into their own constructors. That will allow composing properties into
    larger structures. By default Lit relies too much on inheritance and mixins.
- If properties are pulled out of the custom element into their own class (property bag), they become a form of state
    management.
- Larger elements can be broken up into smaller classes that depend on the property bag instead of the
    element itself.
- We get our constructors and dependency injection back.
- With dependency injection back we could use an IOC framework like Tsyringe OR use plain old 
dependency injection and Nullables.

## Steps

1. Create a Property class that can do change detection.
2. Hook the Property class into Lit's render cycle.
3. Create a bundle of properties (property bag), delegate a Lit custom element properties to these.
4. Break up the internals of a custom element into multiple classes uses SOLID principles.
5. Use propery dependency injection for the relationships between the implementation classes.
6. Use Nullable to isolate the unit tests from the outside world (like the DOM internaction with the custom element).


