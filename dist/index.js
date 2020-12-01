Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkovGenerator = void 0;
/**
 * Generates data from a list
 */
var MarkovGenerator = /** @class */ (function () {
    function MarkovGenerator(corpus) {
        this.corpus = corpus;
        this.builtCorpus = null;
        this.generate = this.generate.bind(this);
        this.buildCorpus = this.buildCorpus.bind(this);
        if (corpus)
            this.builtCorpus = this.buildCorpus(corpus);
    }
    MarkovGenerator.prototype.generate = function (quantity, corpus) {
        if (quantity === void 0) { quantity = 1; }
        if (corpus === void 0) { corpus = null; }
        var actualCorpus = this.builtCorpus;
        if (corpus)
            actualCorpus = this.buildCorpus(corpus);
        var generatedPhrases = [];
        for (var i = 0; i < quantity; i++) {
            // Seed current phrase with a random originator
            var current = [
                actualCorpus.originators[Math.floor(Math.random() * actualCorpus.originators.length)]
            ];
            var terminate = false;
            do {
                var prev = current[current.length - 1];
                if (!actualCorpus[prev] || (Array.isArray(actualCorpus[prev]) && actualCorpus[prev].length == 0)) {
                    terminate = true;
                }
                else {
                    // current.push();
                    var next = actualCorpus[prev][Math.floor(Math.random() * actualCorpus[prev].length)];
                    if (!next) {
                        terminate = true;
                    }
                    else {
                        current.push(next);
                    }
                }
            } while (!terminate);
            generatedPhrases.push(current.join(" "));
        }
        if (generatedPhrases.length == 1)
            return generatedPhrases[0];
        return generatedPhrases;
    };
    MarkovGenerator.prototype.buildCorpus = function (phrases) {
        var corpus = {
            originators: []
        };
        phrases.forEach(function (phrase) {
            var words = phrase.split(" ");
            words.forEach(function (word, index) {
                var _a;
                if (index == 0)
                    corpus.originators.push(word);
                if (!corpus[word])
                    corpus[word] = [];
                var next = (_a = words[index + 1]) !== null && _a !== void 0 ? _a : null;
                if (!next)
                    corpus[word] = null;
                else
                    corpus[word].push(next);
            });
        });
        return corpus;
    };
    return MarkovGenerator;
}());
exports.MarkovGenerator = MarkovGenerator;
//# sourceMappingURL=index.js.map