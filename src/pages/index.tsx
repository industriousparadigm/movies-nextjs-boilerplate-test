import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { useApolloClient } from '@apollo/react-hooks'
import { NameSpace } from '../lib/i18n'
import MovieCollection from '../components/MovieCollection'

const IndexPage: NextPage = () => {
  const { t } = useTranslation(NameSpace.COMMON)
  const apolloClient = useApolloClient()

  return (
    <div>
      {t('greetings', { version: apolloClient.version })}
      <h1>See a movie card below?</h1>
      <MovieCollection />
    </div>
  )
}

export default IndexPage
