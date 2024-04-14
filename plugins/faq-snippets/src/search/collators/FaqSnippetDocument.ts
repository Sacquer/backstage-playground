import { IndexableDocument } from "@backstage/plugin-search-common";

export interface FaqSnippetDocument extends IndexableDocument {
  answered_by: string;
}
