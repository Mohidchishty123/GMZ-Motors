// src/components/FAQ.js
import React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';

function FAQ() {
  const faqs = [
    {
      q: "How can I book a car?",
      a: "Visit our website, select your vehicle, and contact us via WhatsApp or phone."
    },
    {
      q: "What documents are required?",
      a: "A valid national ID or passport and location are typically required."
    },
    {
      q: "Is there an age requirement?",
      a: "Yes, drivers must be above 18 years old."
    }
  ];

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Frequently Asked Questions</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion>
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>{faq.q}</Accordion.Header>
                <Accordion.Body>{faq.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;