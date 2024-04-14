import { TestPipeline } from '@backstage/plugin-search-backend-node';
import { FaqCollatorFactory } from './FaqCollatorFactory';

it('provides expected documents', async () => {
  const faqCollatorFactory = FaqCollatorFactory.create();

  const testSubject = await faqCollatorFactory.getCollator();
  const pipeline = TestPipeline.fromCollator(testSubject);

  const { documents } = await pipeline.execute();

  expect(documents).toHaveLength(2);
})
