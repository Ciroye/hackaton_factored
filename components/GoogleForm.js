'use client'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const GoogleForm = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <a
        className="px-8 py-3 text-xl font-semibold text-center no-underline transition duration-200 rounded-full shadow-md text-second bg-fourth"
        onClick={handleShow}
        type="button"
      >
        Register Now
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Join us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSekyuZbJIOZukJc8rDCqH5oMxun3CJ7jfkTvOnxv1dXIaWD7Q/viewform?embedded=true"
            width="640"
            height="600"
          >
            Loading…
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GoogleForm
