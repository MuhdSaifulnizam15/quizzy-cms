// hooks
import useAuth from '../hooks/useAuth';
//
import { MAvatar } from './@material-extend';
import createAvatar from '../utils/createAvatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();

  return (
    <MAvatar
      src={user.src}
      alt={user.first_name + ' ' + user.last_name}
      color={user.src ? 'default' : createAvatar(user.first_name + ' ' + user.last_name).color}
      {...other}
    >
      {createAvatar(user.first_name + ' ' + user.last_name).name}
    </MAvatar>
  );
}
