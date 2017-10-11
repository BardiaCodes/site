import React from 'react'
import {
  Provider,
  Flex,
  Box,
  Column,
  Heading,
  Subhead,
  Text,
  Lead,
  Avatar,
  Link,
  BlockLink,
  Image
} from 'rebass'
import { fontSize, responsiveStyle } from 'styled-system'
import { map, merge, lowerCase, kebabCase } from 'lodash'
import theme, { colors, mx } from '../style'
import {
  Meta,
  SectionHeading,
  Float,
  FloatLink,
  ProjectGrid,
  Project,
  Icon,
  Service,
  Footer
} from '../components'
import { main, oss, prev } from '../data'

const sections = [
  ['Projects', 'layers', main],
  ['Open Source', 'open_in_browser', oss],
  ['Previously', 'access_time', prev]
]

const Masthead = Flex.extend.attrs({
  direction: ['column', 'row'],
  minHeight: [null, '100vh'],
  textAlign: ['center', 'left'],
  px: 3
})`
  ${responsiveStyle('min-height', 'minHeight')}
  ${responsiveStyle('text-align', 'textAlign')}
`
const Name = Heading.extend.attrs({ f: 6, m: 0 })`
  font-weight: 900;
  line-height: 1;
`
const Bio = Subhead.extend.attrs({ is: 'h2', color: 'grey', mt: 1, mb: 3 })`
  font-weight: 400;
  line-height: 1.5;
`
const Status = Text.extend.attrs({ f: 3, color: 'slate', mt: 0, mb: 4 })`
  display: inline-block;
  background-color: #f6bbc2;
  background-image: linear-gradient(-100deg, #fcebed, #f9d5d9 95%, #f6bbc2);
  border-radius: 999px;
  padding: 0 .5em;
  margin-left: -0.5em;
  line-height: 1.5;
`

const PortraitBox = props => (
  <Flex column justify="center" align={['center', 'flex-end']} flex="1 1 auto" p={[3, 4]} {...props} />
)
const Portrait = FloatLink.withComponent(Image).extend.attrs({ maxHeight: ['40vh', '80vh'], r: [12, 16, 24] })`
  max-width: 50vw;
  ${responsiveStyle('max-height', 'maxHeight')}
  ${responsiveStyle('border-radius', 'r')}
`

const NameBox = Column.extend.attrs({ py: 2 })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export default () => (
  <Provider theme={theme}>
    <Meta title="Lachlan Campbell – @lachlanjc" />
    <Masthead>
      <PortraitBox>
        <Portrait src="https://cdn.glitch.com/3ddbd40d-f89f-488c-a0eb-0dc4aa1ebc80%2Fstatic%2Fportrait.jpg?1500175195551" />
      </PortraitBox>
      <NameBox>
        <Name>Lachlan Campbell</Name>
        <Bio>Web designer-developer and high schooler.</Bio>
        <Box>
          <Status>web @ <Link href="https://hackclub.com" color="#e42d40">hack club</Link></Status>
        </Box>
        <Flex align="center" justify={['center', 'flex-start']}>
          <Avatar
            src="https://cdn.glitch.com/3ddbd40d-f89f-488c-a0eb-0dc4aa1ebc80%2Favatar-pride.png?1500175240431"
            mr={2}
            size={36}
            style={{
              boxShadow: `0 0 0 2px ${colors.white}, 0 0 0 4px ${colors.blue}`
            }}
          />
          <Service href="https://twitter.com/lachlanjc" icon="twitter" />
          <Service href="https://github.com/lachlanjc" icon="github" />
          <Service href="https://instagram.com/lachlan.jc" icon="instagram" />
          <Service
            href="mailto:lachlan.campbell@icloud.com"
            icon="mail_outline"
          />
        </Flex>
      </NameBox>
    </Masthead>
    {sections.map(section => (
      <Box id={kebabCase(section[0])} key={lowerCase(section[0])} py={2}>
        <SectionHeading icon={section[1]} children={section[0]} />
        <ProjectGrid>
          {section[2].map(item => (
            <Project
              name={item.name}
              url={item.url}
              description={item.description}
              color={item.color}
              key={item.url}
            />
          ))}
        </ProjectGrid>
      </Box>
    ))}
    <Footer file="index" />
  </Provider>
)
