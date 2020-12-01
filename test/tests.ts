import { assert, expect, should } from 'chai';
import * as path from 'path';
import { MarkovGenerator } from '../src';
let fs = require('fs').promises;

describe("Markov Generator Tests", async () => {

  function generateTest(file: string): () => Promise<void> {
    return async function (): Promise<void> {
      return new Promise(async (resolve, reject) => {
        try {
          let data: string = (await fs.readFile(path.join(__dirname, "data", file))).toString();

          let generator: MarkovGenerator = new MarkovGenerator(data.split(/\r?\n/).filter((phrase: string) => phrase.length));
          let items: string[] = generator.generate(10) as string[];
          assert.isOk(items);
          assert.isArray(items);
          assert.property(items, "length");
          assert.equal(items.length, 10);

          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  };


  it("Lorem Ipsum", generateTest("lorem-ipsum.txt"));
  it("Bacon Ipsum", generateTest("bacon-ipsum.txt"));
  it("Trump Ipsum", generateTest("trump-ipsum.txt"));
  it("Cupcake Ipsum", generateTest("cupcake-ipsum.txt"));
});