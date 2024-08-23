import { css } from 'styled-system/css';

import CTASection from './components/CTASection';
import SomeText from './components/SomeText';

const HomePage = () => {
  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '70vh',
        flexDir: 'column',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      })}
    >
      <SomeText />
      <CTASection />
    </div>
  );
};

export default HomePage;
