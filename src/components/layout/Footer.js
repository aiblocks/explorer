import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
// import LumensRates from '../shared/LumensRates'

class Footer extends React.PureComponent {
  render() {
    return (
      <Grid id="footer">
        <Row>
          <Col md={3}>
            {
              // Disable rates for now, it doesn't refresh correctly: <LumensRates/>
            }
          </Col>
          <Col mdOffset={7} md={2}>
            <a href="https://github.com/aiblocks/explorer">
              <img
                src={`${process.env.PUBLIC_URL}/img/gh.svg`}
                alt="github"
                height={20}
                width={20}
              />
              Source Code
            </a>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={10} md={2}>
            <a href="https://github.com/aiblocks/explorer/issues">
              <img
                src={`${process.env.PUBLIC_URL}/img/support.svg`}
                alt="support"
                height={20}
                width={20}
              />
              Support
            </a>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={10} md={2}>
            <a href="https://aiblocks.io">
              <img
                src={`${process.env.PUBLIC_URL}/aiblocks.ico`}
                alt="aiblocks"
                height={20}
                width={20}
              />
              AiBlocks.io
            </a>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Footer
