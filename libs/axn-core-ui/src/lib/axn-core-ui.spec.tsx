import { render } from '@testing-library/react';

import AxnCoreUi from './axn-core-ui';

describe('AxnCoreUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AxnCoreUi />);
    expect(baseElement).toBeTruthy();
  });
});
