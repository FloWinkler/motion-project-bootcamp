import BackgroundImage from '../../../assets/images/profile_background.png'
import { BackgroundPicture } from './profileBackground.style';

function ProfileBackground() {
  return <BackgroundPicture src={BackgroundImage} alt="Background"></BackgroundPicture>;
}

export default ProfileBackground;
