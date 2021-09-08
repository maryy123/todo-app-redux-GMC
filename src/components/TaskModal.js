import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit_task } from "../js/actions/task";

const TaskModal = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [desc, setDesc] = useState(el.description);
  const dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal
        show={show}
        onHide={() => {
          handleClose();
          setDesc(el.description);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ width: "70%", borderRadius: "10px" }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setDesc(el.description);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            style={{ background: "#851e3e", borderColor: "#851e3e" }}
            onClick={() => {
              if (desc) {
                dispatch(edit_task(el.id, desc));
                handleClose();
              } else alert("A task could not be empty");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskModal;
