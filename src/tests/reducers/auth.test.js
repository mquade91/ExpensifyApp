import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123',
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toEqual(action.uid)
})

test('should clear auth state', () => {
  const action = {type: 'LOGOUT'};
  const state = authReducer({uid: '123'}, action);
  expect(state).toEqual({});
})