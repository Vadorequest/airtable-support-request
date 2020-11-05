import * as React from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Ma super app">
    <Button
      handleOnClick={() => {
        console.log('click meeee');
      }}
    >
      Envoyer
    </Button>
  </Layout>
)

export default IndexPage
