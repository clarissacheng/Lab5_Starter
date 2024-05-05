// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//testing strong password
test('expect 123456789 to be false', ()=>{
  expect(isStrongPassword('123456789')).toBe(false);
});

test('expect "abcdedf12738294829482" to be false', ()=>{
  expect(isStrongPassword("abcdedf12738294829482")).toBe(false);
});


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




