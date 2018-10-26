import AppDispatcher from '../src/AppDispatcher';
import ActionTypes from '../src/ActionTypes';
import CommentStore from '../src/stores/CommentStore';
jest.unmock('../src/stores/CommentStore');
jest.unmock('../src/ActionTypes');
jest.unmock('object-assign');



describe('CommentStore', () => {
  it('should propagate comments when loaded successfully', () => {
    const commentList = [{
      name: 'John',
      content: 'It looks good!'
    }, {
      name: 'Jane',
      content: 'Good job, dude!'
    }];
    const listener = AppDispatcher.register.mock.calls[0][0];

    listener({
      type: ActionTypes.LOAD_COMMENT_SUCCESS,
      payload: {
        comment: {
          commentList,
        }
      }
    });

    expect(CommentStore.getComment()).toEqual(commentList);
  });
});
