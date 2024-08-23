import { css, cx } from 'styled-system/css';
import { ThemeToggle } from '~/lib/components/theme-toggle';
import { wrapperClassname } from '~/lib/layout/constants';

const Header = () => {
  return (
    <header
      className={css({
        position: 'sticky',
        top: 0,
        zIndex: 10,
        width: 'full',
        backdropBlur: 'md',
      })}
    >
      <section
        className={cx(
          wrapperClassname,
          css({
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: '2!',
          }),
        )}
      >
        <div className={css({ ml: 'auto' })}>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
