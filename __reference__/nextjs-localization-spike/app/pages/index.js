import * as React from 'react'
import Link from 'next/link'
import { i18n, withTranslation } from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const IndexPage = ({ t }) => (
  <React.Fragment>
    <main>
      <Header title={t('h1')} />
      <div>
        <button
          type="button"
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>
        <Link href="/second-page">
          <button type="button">{t('to-second-page')}</button>
        </Link>
      </div>
    </main>
    <Footer />
  </React.Fragment>
)

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

export default withTranslation('common')(IndexPage)
