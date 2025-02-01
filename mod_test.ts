import { assertEquals, assertGreater, assertThrows } from "@std/assert";
import { calculate, ensure } from "./mod.ts";

Deno.test(function calculateTest() {
  assertEquals(calculate("aaaaaaaa"), 0);
  assertGreater(calculate('M)M&_i5!@9ENp?+"*pmU\'T\'[.-g};^9#'), 3.5);
});

Deno.test(function ensureTest() {
  assertThrows(() => ensure("aaaaaaaa"), "token is too short");
  assertThrows(() => ensure("aaaaaaaa", 8), "entropy is too low");
  ensure('M)M&_i5!@9ENp?+"*pmU\'T\'[.-g};^9#');
});
