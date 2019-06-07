import { add } from "./math";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

it("should return 3 for 1 and 2", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
