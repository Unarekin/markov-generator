import { assert, expect, should } from 'chai';
import * as path from 'path';
import { MarkovGenerator } from '../src';
let fs = require('fs').promises;

describe("Markov Generator Tests", () => {
  it("Lorem Ipsum", async () => {
    let data: string = (await fs.readFile(path.join(__dirname, "data/lorem-ipsum.txt"))).toString();

    let generator: MarkovGenerator = new MarkovGenerator(" ", data);
    let items: string[] = generator.generate(10) as string[];

    assert.isOk(items);
    assert.isArray(items);
    assert.property(items, "length");
    assert.isAtLeast(items.length, 1);
  })
})