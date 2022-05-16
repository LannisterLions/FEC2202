import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import Reviews from '../component/Reviews/Reviews.jsx';
import Feed from '../component/Reviews/Feed.jsx';


const data = [{
  "body": "Pretty Meh",
  "date": "2022-04-01T00:00:00.000Z",
  "helpfulness": "0",
  "photos": "[]",
  "rating": "4",
  "recommend": "true",
  "response": "null",
  "review_id": "1175602",
  "reviewer_name": "Bob Bloblaw",
  "summary": "was meh"
}];


it('renders Reviews component', () => {
  shallow(<Reviews />);
});

describe('Reviews tests', () => {
  const ratings = "50";

  it('Feed component accepts current style prop', () => {
    const wrapper = mount(<Feed reviewData={data} totalRatings={ratings} />);
    expect(JSON.stringify(wrapper.props().reviewData)).to.equal(JSON.stringify(data))
  });
});