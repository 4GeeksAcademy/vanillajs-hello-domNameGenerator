let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let domainNames = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let y = 0; y < noun.length; y++) {
      let domain = pronoun[i] + adj[j] + noun[i] + ".com";
      domainNames.push(domain);
    }
  }
}
for (let f = 0; f < domainNames.length; f++) {
  console.log(domainNames[f]);
}
