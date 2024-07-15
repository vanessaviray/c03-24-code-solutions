export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const docIndex = new Map<string, Set<Document>>();

  for (let i = 0; i < docs.length; i++) {
    const content = docs[i].content.match(/\b(\w+)\b/g);
    if (!content) {
      continue;
    }
    for (let j = 0; j < content.length; j++) {
      let docSet = docIndex.get(content[j].toLowerCase());
      if (!docSet) {
        docSet = new Set<Document>();
      }
      docSet.add(docs[i]);
      docIndex.set(content[j].toLowerCase(), docSet);
    }
  }
  return docIndex;
}
