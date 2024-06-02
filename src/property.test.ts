import { expect, test } from 'vitest';
import { Property } from './property.js';

test('valueOf returns the property value', () => {
    const property = Property.number(5, 0);
    expect(property.valueOf()).toBe(5);
});

test('set changes the value', () => {
    const property = Property.string('text', '');
    property.set('number');
    expect(property.valueOf()).toBe('number');
});

test('set return true if the value actually changes', () => {
    const property = Property.number(100, 0);
    const changed = property.set(25);
    expect(changed).toBe(true);
});

test('set return false if the value did not change', () => {
    const property = Property.number(100, 0);
    const changed = property.set(100);
    expect(changed).toBe(false);
});

test('setting to undefined does not change the value', () => {
    const property = Property.number(10, 0);
    const changed = property.set(undefined);
    expect(changed).toBe(false);
    expect(property.valueOf()).toBe(10);
});

test('nullable string Property', () => {
    const property = Property.stringOrNull('text');
    property.set(null);
    expect(property.valueOf()).toBe(null);
});

test('nullable number Property', () => {
    const property = Property.numberOrNull(11);
    property.set(null);
    expect(property.valueOf()).toBe(null);
});

test('default value of non-nullable property', () => {
    const property = Property.string('text', 'none');
    property.set(null);
    expect(property.valueOf()).toBe('none');
});

test('changing from value to default value indicates changed', () => {
    const property = Property.string('text', 'none');
    const changed = property.set(null);
    expect(changed).toBe(true);
});

test('changing from default value to default value does not indicate change', () => {
    const property = Property.string('none', 'none');
    const changed = property.set(null);
    expect(property.valueOf()).toBe('none');
    expect(changed).toBe(false);
});

test('boolean Property', () => {
    const property = Property.boolean(false);
    expect(property.valueOf()).toBe(false);
    const changedToTrue = property.set(true);
    expect(property.valueOf()).toBe(true);
    expect(changedToTrue).toBe(true);
    const changedToNull = property.set(null);
    expect(changedToNull).toBe(true);
});

test('empty boolean Property', () => {
    const property = Property.boolean();
    expect(property.valueOf()).toBe(false);
});

test('number property omitting default', () => {
    const property = Property.number(15);
    expect(property.valueOf()).toBe(15);
    property.set(null);
    expect(property.valueOf()).toBe(0);
});

test('number property without arguments', () => {
    const property = Property.number();
    expect(property.valueOf()).toBe(0);
    property.set(15);
    property.set(null);
    expect(property.valueOf()).toBe(0);
});

test('string property omitting default', () => {
    const property = Property.string('first');
    expect(property.valueOf()).toBe('first');
    property.set(null);
    expect(property.valueOf()).toBe('');
});

test('string property without arguments', () => {
    const property = Property.string();
    expect(property.valueOf()).toBe('');
    property.set('second');
    property.set(null);
    expect(property.valueOf()).toBe('');
});
