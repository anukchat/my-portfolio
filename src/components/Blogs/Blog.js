/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import PostCard from './PostCard';
// import ShowBlog from './ShowBlog';
// import Spinner from '../Spinner/Spinner';

export class Blog extends Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);

    this.state = { itemRows: [], avatar: '', profileLink: '' };
  }

  mediumURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chaturvedianukool';

  async componentDidMount() {
    await Axios
      .get(this.mediumURL)
      .then(async (res) => res.data)
      .then((data) => {
        // console.log(data.data)
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);
        // // const avatar = data.data.feed.image;
        // // const profileLink = data.data.feed.link;
        // // // eslint-disable-next-line max-len
        // // const res = data.data.items; // This is an array with the content. No feed, no info about author etc..
        // // const posts = res.filter((item) => item.categories.length > 0);

        // const { title } = data.data.feed;

        this.setState({ avatar, profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          // eslint-disable-next-line no-param-reassign
          item.avatar = this.state.avatar; // push avatar inside the json
          // eslint-disable-next-line no-param-reassign
          item.profilelink = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });

        // eslint-disable-next-line react/no-unused-state
        this.setState({ itemRows });
      });
  }

  render() {
    const { itemRows } = this.state;

    return (
      <Grid container spacing={1}>
        {itemRows.map((row) => row.map((item, key) => <PostCard {...item} key={key} />))}
      </Grid>
    );
  }
}

export default Blog;
