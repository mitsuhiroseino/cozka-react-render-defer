import ensureComponent from '@cozka/react-utils/ensureComponent';
import { ElementType, forwardRef } from 'react';
import { WidthDeferOptions } from './types';

/**
 * エレメントの描画を遅延させる機能を追加するHOC
 * @param Component コンポーネント
 * @param options オプション
 * @returns
 */
export default function widthDefer<P = {}, T = unknown>(
  Component: ElementType<P>,
  options: WidthDeferOptions = {},
) {
  const Comp = ensureComponent(Component);
  const name = Comp.displayName ?? 'unknown';
  const { displayName = `widthDefer(${name})`, ...opts } = options;

  const DeferedComponent = forwardRef<T, P>((props, ref) => {
    return <Comp ref={ref} {...(props as P)} />;
  });
  DeferedComponent.displayName = displayName;
  return DeferedComponent;
}
