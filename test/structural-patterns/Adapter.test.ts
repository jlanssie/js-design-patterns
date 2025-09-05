import {
  Source,
  Target,
  Adapter,
} from '../../src/structural-patterns/Adapter.class';

describe('Adapter', () => {
  test('An adapter adapts a valid Source object to a valid Target object', () => {
    const source = new Source();
    source.sourceData = 'source data';

    const target = new Target();
    Adapter.adapt(source, target);

    expect(target.targetData).toBe('source data');
  });

  test('An adapter adapts an invalid Source object to a Target object with empty values', () => {
    const source = {
      name: 'Test Object',
    };

    const target = new Target();
    Adapter.adapt(source, target);

    expect(target.targetData).toBeUndefined();
  });

  test('An adapter adapts an empty Source object to a Target object with empty values', () => {
    const target = new Target();

    Adapter.adapt(null, null);

    expect(target.targetData).toBeUndefined();
  });
});
