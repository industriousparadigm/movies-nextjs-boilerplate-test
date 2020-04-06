import React from 'react'
import { AppProps } from 'next/app'
import './_app.scss'
import { withApollo } from '../lib/apollo'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default withApollo()(MyApp)
