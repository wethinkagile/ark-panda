import { css } from 'styled-system/css';
import { Heading } from '~/lib/components/ui/heading';
import { Text } from '~/lib/components/ui/text';

const SomeText = () => {
  return (
    <div className={css({ display: 'grid', gap: 2.5, textAlign: 'center' })}>
      <Heading
        color="teal.8"
        fontWeight="bold"
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        nextarter-park
      </Heading>
      <Text fontSize={{ base: 'xs', md: 'sm' }}>
        Next.js starter template with Park UI and TypeScript setup
      </Text>
    </div>
  );
};

export default SomeText;
