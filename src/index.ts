

/**
 * Generates data from a list
 */
export class MarkovGenerator {

  private builtCorpus: any = null;

  constructor(private corpus: string[]) {
    this.generate = this.generate.bind(this);
    this.buildCorpus = this.buildCorpus.bind(this);

    if (corpus)
      this.builtCorpus = this.buildCorpus(corpus);
  }

  generate(quantity: number = 1, corpus: string[] = null): string | string[] {
    let actualCorpus = this.builtCorpus;
    if (corpus)
      actualCorpus = this.buildCorpus(corpus);


    let generatedPhrases: string[] = [];
    for (let i = 0; i < quantity; i++) {
      // Seed current phrase with a random originator
      let current: string[] = [
        actualCorpus.originators[Math.floor(Math.random() * actualCorpus.originators.length)]
      ];


      let terminate: boolean = false;
      do {
        let prev: string = current[current.length - 1];
        if (!actualCorpus[prev] || (Array.isArray(actualCorpus[prev]) && actualCorpus[prev].length == 0)) {
          terminate = true;
        } else {
          // current.push();
          let next: string | null = actualCorpus[prev][Math.floor(Math.random() * actualCorpus[prev].length)];
          if (!next) {
            terminate = true;
          } else {
            current.push(next);
          }
        }
      } while (!terminate);

      generatedPhrases.push(current.join(" "));
    }

    if (generatedPhrases.length == 1)
      return generatedPhrases[0];

    return generatedPhrases;
  }

  private buildCorpus(phrases: string[]): any {
    let corpus: any = {
      originators: []
    };

    phrases.forEach((phrase: string) => {
      let words: string[] = phrase.split(" ");
      words.forEach((word: string, index: number) => {

        if (index == 0)
          corpus.originators.push(word);

        if (!corpus[word])
          corpus[word] = [];

        let next: string | null = words[index + 1] ?? null;
        if (!next)
          corpus[word] = null;
        else
          corpus[word].push(next);
      });
    });
    return corpus;
  }

}