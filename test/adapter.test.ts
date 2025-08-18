import { Source, Target, Adapter } from '../src/Adapter.class';

describe('Adapter', () => {
  test('An adapter adapts a valid Source object to a valid Target object', () => {
    const source = new Source();
    source.sourceData = 'source data';

    const target = new Target();
    Adapter.adapt(source, target);

    expect(target.targetData).toBe('source data');
  });

  test('An adapter adapts an invalid Source object to an empty Target object', () => {
    const source = {
      name: 'Test Object',
    };

    const target = new Target();
    Adapter.adapt(source, target);

    expect(target.targetData).toBeUndefined();
  });
});
