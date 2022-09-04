import { Container, Button } from "./EditPopup.styled";

interface EditPopupProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const EditPopup = ({ onEditClick, onDeleteClick }: EditPopupProps) => {
  return (
    <Container>
      <Button onClick={onEditClick} sx={{ color: "#637083" }}>
        Edit
      </Button>
      <Button onClick={onDeleteClick} sx={{ color: "red" }}>
        Delete
      </Button>
    </Container>
  );
};

export default EditPopup;
