import React from "react";

const widthHasMounted = (Component) => {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    };

    render() {
      const { hasMounted } = this.state;

      return <Component {...this.props} hasMounted={hasMounted} />;
    }

    componentDidMount() {
      this.setState({ hasMounted: true });
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`;

  return NewComponent;
};

export default widthHasMounted;
