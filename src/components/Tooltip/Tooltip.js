import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import PropTypes from "prop-types";
import "./Tooltip.scss";

class EllipisWithTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOverflowingChildren: false,
      text: undefined,
      prevPropsChildren: props.children,
    };
    this.updateOverflow = this.updateOverflow.bind(this);
  }

  updateOverflow(e) {
    const el = e.target;
    const { hasOverflowingChildren, text } = this.state;
    const { multiline } = this.props;

    if (multiline) {
      if (!hasOverflowingChildren && el.scrollHeight > el.clientHeight) {
        this.setState({ hasOverflowingChildren: true });
        if (el.textContent !== text) {
          this.setState({ text: el.textContent });
        }
      } else {
        this.setState({ hasOverflowingChildren: false });
      }
    } else {
      if (!hasOverflowingChildren && el.scrollWidth > el.clientWidth) {
        this.setState({ hasOverflowingChildren: true });
        if (el.textContent !== text) {
          this.setState({ text: el.textContent });
        }
      } else {
        this.setState({ hasOverflowingChildren: false });
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.children === state.prevPropsChildren) return null;
    return {
      hasOverflowingChildren: false,
      prevPropsChildren: props.children,
    };
  }

  render() {
    const { hasOverflowingChildren, text } = this.state;
    const {
      placement = "top",
      delayShow,
      delayHide,
      children,
      multiline,
    } = this.props;
    const tooltip = (
      <Tooltip id={`tooltip`} className="tooltipStyle">
        {text}
      </Tooltip>
    );
    let boxStyle;
    if (multiline) {
      boxStyle = "multiline";
    } else {
      boxStyle = "singleline";
    }

    return hasOverflowingChildren ? (
      <OverlayTrigger
        placement={placement}
        overlay={tooltip}
        delayShow={delayShow}
        delayHide={delayHide}
      >
        <div className={boxStyle}>{children}</div>
      </OverlayTrigger>
    ) : (
      <div className={boxStyle} onMouseEnter={this.updateOverflow}>
        {children}
      </div>
    );
  }
}

// EllipisWithTooltip.propTypes = {
//   placement: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   style: PropTypes.object,
//   delayShow: PropTypes.number,
//   delayHide: PropTypes.number,
// };

// EllipisWithTooltip.defaultProps = {
//   placement: undefined,
//   style: undefined,
//   delayHide: undefined,
//   delayShow: undefined,
// };

export default EllipisWithTooltip;
