import fetch from 'cross-fetch';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
// eslint-disable-next-line no-restricted-imports
import { Readable } from 'stream';
import { DocumentCollatorFactory } from '@backstage/plugin-search-common';

import { FaqSnippetDocument } from './FaqSnippetDocument';


export type FaqCollatorFactoryOptions = {
  baseUrl?: string;
  logger: Logger;
}

export class FaqCollatorFactory implements DocumentCollatorFactory {
  private readonly baseUrl: string | undefined;
  private readonly logger: Logger;
  public readonly type: string = 'faq-snippets';

  private constructor(options: FaqCollatorFactoryOptions) {
    this.baseUrl = options.baseUrl;
    this.logger = options.logger;
  }

  static create() {
    return new FaqCollatorFactory({
      baseUrl: undefined,
      logger: new Logger(),
    });
  }

  static fromConfig(config: Config, options: FaqCollatorFactoryOptions) {
    const baseUrl = config.getOptionalString('faq.baseUrl') || 'https://backstage.example.biz/faq-snippets'
    return new FaqCollatorFactory({
      ...options,
      baseUrl
    })
  }

  async getCollator() {
    return Readable.from(this.execute());
  }

  async *execute(): AsyncGenerator<FaqSnippetDocument> {
    if (!this.baseUrl) {
      this.logger.error(`No faq.baseUrl configured in your app-config.yaml`);
      return;
    }

    const response = await fetch(this.baseUrl);
    const data = await response.json();

    for (const faq of data.items) {
      yield {
        title: faq.question,
        location: `/faq-snippets/${faq.id}`,
        text: faq.answear,
        answered_by: faq.user,
      }
    }
  }
}
