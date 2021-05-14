import {followTC, getUsersTC, searchTC} from "../actions/users";
import {usersAPI} from "../../api/api";
jest.mock("../../api/api");
const usersAPIMock = usersAPI;

// const dispatchMock = jest.fn();

usersAPIMock.follow.mockReturnValue('VALUE');
test('test follow ThunkCreator', async () => {
    const thunk = followTC('17110');
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
})


// usersAPIMock.getUsers.mockReturnValue('');

test('test getUsers ThunkCreator', async () => {
    const thunk = getUsersTC(1, 10);
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3);
})
// usersAPIMock.searchUser.mockReturnValue('');

test('test search ThunkCreator', async () => {
    const thunk = searchTC('Sam');
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
})
