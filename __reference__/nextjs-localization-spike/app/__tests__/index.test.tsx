import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { IndexPage } from '../pages/index'

describe('The default page', () => {
  // Mock our i18n library (see __reference__/nextjs-localization-spike/app/jest.setup.js)
  jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    withTranslation: () => (Component) => {
      Component.defaultProps = { ...Component.defaultProps, t: () => '' }
      return Component
    },
  }))

  // Define a mock translation function
  const mockTFunction = (key: string): string => {
    return key
  }

  it(`should render`, () => {
    const subject = shallow(<IndexPage t={mockTFunction} />)
    expect(subject).toBeDefined()
  })

  it('should match the snapshot', () => {
    const tree = renderer.create(<IndexPage t={mockTFunction} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
