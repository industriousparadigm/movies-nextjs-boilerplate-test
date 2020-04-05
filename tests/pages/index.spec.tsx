import { MockedProvider as ApolloMockedProvider } from '@apollo/react-testing';
import { render, cleanup, waitFor } from '@testing-library/react';

import Index from '../../src/pages/index';
import i18next from '../../src/lib/i18n';

afterEach(cleanup);

i18next.changeLanguage('pt');

it('Should render index page', async () => {
  const { getByText } = render(
    <ApolloMockedProvider>
      <Index />
    </ApolloMockedProvider>,
  );

  await waitFor(() => getByText(/Olá!/i));
});
