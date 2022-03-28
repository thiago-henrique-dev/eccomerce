import React from "react";
import {Link} from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap"


export default function MenuTop() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Eccomerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link href="/sign-up">SignUp</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>


                    </Nav>
                </Container>
            </Navbar>
            

        </>
    )
}
