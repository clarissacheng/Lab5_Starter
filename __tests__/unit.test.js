// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


// testing isDate
test('expect 12/12/2021 to be true', () => {
  expect(isDate("12/12/2021")).toBe(true);
});
test('expect 2/2/2021 to be true', () => {
  expect(isDate("2/2/2021")).toBe(true);
});
test('expect 2/2/201 to be false', () => {
  expect(isDate("2/2/201")).toBe(false);
});
test('expect 2/222/2022 to be false', () => {
  expect(isDate("2/222/2022")).toBe(false);
});


// testing hexcodes
test('expect #1F7 to be true', () => {
  expect(isHexColor("#1F7")).toBe(true);
});
test('expect #AAABBB to be true', () => {
  expect(isHexColor("#AAABBB")).toBe(true);
});
test('expect #AABBCG to be true', () => {
  expect(isHexColor("#AABBCG")).toBe(false);
});
test('expect AAFFFFF to be true', () => {
  expect(isHexColor("AAFFFFF")).toBe(false);
});


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
test('expect 123456789 to be false', ()=>{
  expect(isStrongPassword('123456789')).toBe(false);
});

test('expect "abcdedf12738294829482" to be false', ()=>{
  expect(isStrongPassword("abcdedf12738294829482")).toBe(false);
});


