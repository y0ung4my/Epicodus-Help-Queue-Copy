import * as actions from './../../actions';

//note: we aren't creating a ticket to be deleted. Well, we've already tested that the 'DELETE_TICKET' action properly deletes tickets. In this test, we just need to make sure that our action creator creates the right action - the action itself doesn't need to be executed.
describe('help queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({ names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working!', id: 1 })).toEqual({
      type: 'ADD_TICKET',
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      id: 1
    })
  })

});