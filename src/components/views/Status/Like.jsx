import React, { Fragment } from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, isILike: false };
    this.likeThisNews = this.likeThisNews.bind(this);
  }
  likeThisNews() {
    if (this.state.isILike)
      this.setState({ num: this.state.num - 1, isILike: !this.state.isILike });
    if (!this.state.isILike)
      this.setState({ num: this.state.num + 1, isILike: !this.state.isILike });
  }

  render() {
    let status;
    if (this.state.isILike) status = 'active';
    else status = 'unactive';

    return (
      <span onClick={this.likeThisNews} className={'status-like ' + status}>
        {this.state.num}
      </span>
    );
  }
}

export default Like;
