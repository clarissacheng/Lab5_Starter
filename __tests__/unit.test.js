// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber test
test('123-456-7890 is a valid phone number', ()=>{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('619-275-9587 is a valid phone number', ()=>{
  expect(isPhoneNumber('619-275-9587')).toBe(true);
});

test('348924 is not a valid phone number', ()=>{
  expect(isPhoneNumber('8')).toBe(false);
});

test('44-444-4444 is not a valid phone number', ()=>{
  expect(isPhoneNumber('44-44-444')).toBe(false);
});

// isEmail test
test('bob001@ucsd.edu is a valid email', () => {
  expect(isEmail('bob001@ucsd.edu')).toBe(true);
});
test('sally002@ucsd.edu is a valid email', () => {
  expect(isEmail('sally002@ucsd.edu')).toBe(true);
});
test('application.org is not a valid email', () => {
  expect(isEmail('application.org')).toBe(false);
});
test('3@bb is not a valid email', () => {
  expect(isEmail('3@bb')).toBe(false);
});

// isStrongPassword test
test('BestPassword1 is a valid password', () => {
  expect(isStrongPassword('BestPassword1')).toBe(true);
});
test('abcd is a valid password', () => {
    expect(isStrongPassword('abcd')).toBe(true);
});