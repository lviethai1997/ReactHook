import React from "react";
import { useEffect, useState } from "react";

class Countdown extends React.Component {
  state = {
    count: 60,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   console.log("me");
    // }, 1000);

    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prveProps, prveState) {
    if (prveState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
      </>
    );
  }
}

const NewCountdown = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (count === 0) {
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return async () => {
      await clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      <div>{count}</div>
    </>
  );
};

export { Countdown, NewCountdown };
