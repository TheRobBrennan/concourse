import * as React from 'react'
import { TFunction } from 'next-i18next'
import { version } from 'next-i18next/package.json'
import { withTranslation } from '../i18n'

interface IFooterProps {
  t: TFunction
}

const Footer: React.FC<IFooterProps> = ({ t }) => (
  <footer>
    <p>{t('description')}</p>
    <p>next-i18next v{version}</p>
  </footer>
)

export default withTranslation('footer')(Footer)
