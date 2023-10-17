import "jsdom-global/register";
import { afterEach } from "bun:test";
import { cleanup } from '@testing-library/react';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});