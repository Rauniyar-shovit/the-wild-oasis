import React from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const closeModalHandler = () => {
//     setIsOpenModal(false);
//   };
//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal closeModalHandler={closeModalHandler}>
//           <CreateCabinForm closeModalHandler={closeModalHandler} />
//         </Modal>
//       )}
//       ;
//     </>
//   );
// };

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
