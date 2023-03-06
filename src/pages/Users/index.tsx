import { useAsync } from 'react-use';

import { IUser } from '@types';
import { getAllUsers } from 'api/users';

import {
  UsersWrapper,
  UserDiv,
  UserTitle,
  UserContent,
  UserText,
} from './styled';
import Loader from '../../components/Loader';

function Users() {
  const asyncUsers = useAsync(async () => {
    const response = await getAllUsers().then((data: IUser[]) => data);
    return response;
  });

  return asyncUsers.loading ? (
    <Loader />
  ) : (
    <UsersWrapper>
      {asyncUsers.value
        ? asyncUsers.value.map((user: IUser) => (
            <UserDiv key={user.id}>
              <UserTitle>
                {user.name.firstname} {user.name.lastname}
              </UserTitle>
              <UserContent>
                <UserText>Username: {user.username}</UserText>
                <UserText>Email: {user.email}</UserText>
              </UserContent>
            </UserDiv>
          ))
        : null}
    </UsersWrapper>
  );
}

export default Users;
