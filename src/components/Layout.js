import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Layaut = ({ children }) => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <Container className="h-100" variant='dark'>
                <Row className="justify-content-md-center align-items-center">
                    {children}
                </Row>
            </Container>
        </ThemeProvider>
    )
}

export default Layaut