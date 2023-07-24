import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { ModalContainer, ModalContent, ButtonGroup as CustomButtonGroup } from './DeleteConfirmation.styled';
import { Button as MuiButton } from '@mui/material';

const ButtonGroup = styled(CustomButtonGroup)({
  justifyContent: 'flex-end',
});

const Button = styled(MuiButton)({
  marginLeft: '10px',
});

const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    if (deleteContact) {
      toast.success(`${contact.name} deleted`);
    }
    onCancel();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Typography variant="body1">Are you sure you want to delete this contact?</Typography>
        <ButtonGroup>
          <Button variant="contained" color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteConfirmation;



// // import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { deleteContact } from 'redux/contacts/operations';
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';

// // const DeleteConfirmation = ({ contact, onCancel }) => {
// //   const dispatch = useDispatch();

// //   const handleConfirmDelete = () => {
// //     dispatch(deleteContact(contact.id));
// //     console.log(`${contact.name} deleted`);
// //     onCancel();
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: '100%',
// //         position: 'absolute',
// //         top: '0',
// //         left: '50%',
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           backgroundColor: '#fff',
// //           padding: '20px',
// //           maxWidth: '400px',
// //           width: '100%',
// //           borderRadius: '4px',
// //           boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// //         }}
// //       >
// //         <Typography variant="body1">
// //           Are you sure you want to delete this contact?
// //         </Typography>
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             justifyContent: 'space-between',
// //             marginTop: '20px',
// //           }}
// //         >
// //           <Button variant="contained" color="error" onClick={handleConfirmDelete}>
// //             Delete
// //           </Button>
// //           <Button variant="contained" onClick={onCancel}>
// //             Cancel
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default DeleteConfirmation;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// // import { toast } from 'react-toastify';
// import { deleteContact } from 'redux/contacts/operations';
// import { ModalContainer, ModalContent, ButtonGroup, Button } from './DeleteConfirmation.styled';

// const DeleteConfirmation = ({ contact, onCancel }) => {
//   const dispatch = useDispatch();

//   const handleConfirmDelete = () => {
//     dispatch(deleteContact(contact.id));
//     if (deleteContact) {
//       // toast.success(`${contact.name} deleted`);
//       console.log(`${contact.name} deleted`);
//     }
//     onCancel();
//   };

//   return (
//     <ModalContainer>
//       <ModalContent>
//         <p>Are you sure you want to delete this contact?</p>
//         <ButtonGroup>
//           <Button onClick={handleConfirmDelete}>Delete</Button>
//           <Button onClick={onCancel}>Cancel</Button>
//         </ButtonGroup>
//       </ModalContent>
//     </ModalContainer>
//   );
// };

// export default DeleteConfirmation;
