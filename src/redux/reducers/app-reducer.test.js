import {initializeApp} from "../actions/app";
jest.mock('')

const dispatchMock = jest.fn();

test('app must be initialized', async () => {
    const thunk = initializeApp();
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(2);
})