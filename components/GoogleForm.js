'use client'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { BrowserView, MobileView } from 'react-device-detect'

const GoogleForm = ({ className }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <BrowserView>
        <a className={className} onClick={handleShow} type="button">
          Join waitlist for 2024
        </a>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Join us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeMAR2PkykRX4GMdQ9Td09MXI1257s330ukm_qp8WoOA6xx4w/viewform?embedded=true"
              width="800"
              height="600"
              className="mx-auto"
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
      </BrowserView>
      <MobileView>
        <a
          className={className}
          href="https://docs.google.com/forms/d/e/1FAIpQLSekyuZbJIOZukJc8rDCqH5oMxun3CJ7jfkTvOnxv1dXIaWD7Q/viewform?embedded=true"
          type="button"
          target="_blank"
        >
          Join waitlist for 2024
        </a>
      </MobileView>
    </>
  )
}

export default GoogleForm
