import { useNavigate } from "react-router";
import { EditProfButton } from "./EditProfileButton.style";

function EditProfileButton(props) {
  const navigate = useNavigate();

  //navigate to edit profile page
  const handleEditClick = () => {
    navigate("/edit-profile");
  };

  return <EditProfButton onClick={handleEditClick}>EDIT PROFILE</EditProfButton>;
}

export default EditProfileButton;
