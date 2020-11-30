

/**
 * Generates data from a list
 */
export class MarkovGenerator {

  constructor(private separator: string | null = " ", private data: string | null = null) { }

  generate(quantity: number = 1, data: string | null = null, separator: string | null = null): string | string[] {
    let actualData: string = data ?? this.data;
    let actualSeparator: string = separator ?? this.separator;

    if (!actualData)
      throw new Error("Sample data not provided.");
    if (!actualSeparator)
      throw new Error("Separator not provided.");

    let splitData: string[] = actualData.split(actualSeparator);

    let generated: string[] = [];

    for (let i = 0; i < quantity; i++) {

    }

    if (quantity == 1)
      return generated[0];

    return generated;
  }
}