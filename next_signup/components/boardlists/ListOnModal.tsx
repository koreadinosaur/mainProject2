import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
const ToDoLi = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 2rem;
`;
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ListOnModal = ({ handleClick, displayList, buttonName }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ fontSize: 13, backgroundColor: "#21b6ae" }}
      >
        {" "}
        <Fragment>
          <AddIcon />
          {buttonName}
        </Fragment>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ul onClick={handleClick}>
            {displayList?.map((item) => (
              <ToDoLi key={item && item?.cardId} id={item && item?.cardId}>
                <span>{item && item.todo}</span>
                <button id={item && item?.cardId}>이동하기</button>
              </ToDoLi>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
};

export default ListOnModal;
