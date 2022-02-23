import React from "react";
import "./Tooltip.scss";
import EllipsisWithTooltip from "../../components/Tooltip/Tooltip";

const Tooltips = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <h1>Tooltips on Ellipses</h1>
          <h2>In order:</h2>
          <h4>
            Not overflowing (multiline), Overflowing (multiline), Not
            overflowing (singleline), Overflowing(singleline)
          </h4>
          <br />
          <div className="wrapper">
            <div className="element-container">
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <a href="#">This is an anchor tag with tooltip</a>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <a href="#">
                    This is an anchor tag with tooltip being shown on ellipses
                    at 3 lines of text. These are some random words to work as
                    filler.
                  </a>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <a href="#">This is an anchor tag.</a>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <a href="#">
                    This is an anchor tag with tooltip being shown on ellipses
                    at 1 lines of text. These are some random words to work as
                    filler.
                  </a>
                </EllipsisWithTooltip>
              </div>
            </div>
            {/* //// */}
            <div className="element-container">
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <div href="#">This is a div with tooltip</div>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <div>
                    This is a div tag with tooltip being shown on ellipses at 3
                    lines of text. These are some random words to work as
                    filler.
                  </div>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <div>This is a div tag.</div>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <div>
                    This is a div tag with tooltip being shown on ellipses at 1
                    lines of text. These are some random words to work as
                    filler.
                  </div>
                </EllipsisWithTooltip>
              </div>
            </div>
            {/* /// */}
            <div className="element-container">
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <span>This is a span tag with tooltip</span>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <span>
                    This is a span tag with tooltip being shown on ellipses at 3
                    lines of text. These are some random words to work as
                    filler.
                  </span>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <span>This is a span tag.</span>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <span>
                    This is a span tag with tooltip being shown on ellipses at 1
                    lines of text. These are some random words to work as
                    filler.
                  </span>
                </EllipsisWithTooltip>
              </div>
            </div>
            {/* /// */}
            <div className="element-container">
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <h4>This is a h4 tag with tooltip</h4>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <h4>
                    This is a h4 tag with tooltip being shown on ellipses at 3
                    lines of text. These are some random words to work as
                    filler.
                  </h4>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <h4>This is a h4 tag.</h4>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <h4>
                    This is a h4 tag with tooltip being shown on ellipses at 1
                    lines of text. These are some random words to work as
                    filler.
                  </h4>
                </EllipsisWithTooltip>
              </div>
            </div>
            {/* /// */}
            <div className="element-container">
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <p>This is a p tag with tooltip</p>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip
                  placement="bottom"
                  effect="solid"
                  multiline
                >
                  <p>
                    This is a p tag with tooltip being shown on ellipses at 3
                    lines of text. These are some random words to work as
                    filler.
                  </p>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <p>This is a p tag.</p>
                </EllipsisWithTooltip>
              </div>
              <div className="test">
                <EllipsisWithTooltip placement="bottom" effect="solid">
                  <p>
                    This is a p tag with tooltip being shown on ellipses at 1
                    lines of text. These are some random words to work as
                    filler.
                  </p>
                </EllipsisWithTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tooltips;
