import React from "react";
import "./Button.scss";
import CustomButton from "../../components/Button/Button";

const Buttons = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <h1>Buttons</h1>
          <br />
          <div className="row mb-4">
            <div className="col-6">
              <h5>Super Buttons - Default</h5>
              <CustomButton
                type="super"
                text="Super Button - with icon"
                size="large"
                hasIcon={true}
                icon="bi bi-plus-square"
              />
            </div>
            <div className="col-6">
              <h5>Super Buttons - Disabled</h5>
              <CustomButton
                type="super"
                text="Super Button - with icon"
                size="large"
                hasIcon={true}
                icon="bi bi-plus-square"
                isDisabled={true}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <h5>Primary Buttons Large - Default</h5>
              <CustomButton
                type="primary"
                text="Primary Button Large"
                size="large"
              />
            </div>
            <div className="col-6">
              <h5>Primary Buttons Large - Disabled</h5>
              <CustomButton
                type="primary"
                text="Primary Button Large"
                size="large"
                isDisabled={true}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <h5>Primary Buttons Small - Default</h5>
              <CustomButton
                type="primary"
                text="Primary Button Small"
                size="small"
              />
            </div>
            <div className="col-6">
              <h5>Primary Buttons Small - Disabled</h5>
              <CustomButton
                type="primary"
                text="Primary Button Small"
                size="small"
                isDisabled={true}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <h5>Secondary Buttons Large - Default</h5>
              <CustomButton
                type="secondary"
                text="Secondary Button Large"
                size="large"
              />
            </div>
            <div className="col-6">
              <h5>Secondary Buttons Large - Disabled</h5>
              <CustomButton
                type="secondary"
                text="Secondary Button Large"
                size="large"
                isDisabled={true}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <h5>Secondary Buttons Small - Default</h5>
              <CustomButton
                type="secondary"
                text="Secondary Button Small"
                size="small"
              />
            </div>
            <div className="col-6">
              <h5>Secondary Buttons Small - Disabled</h5>
              <CustomButton
                type="secondary"
                text="Secondary Button Small"
                size="small"
                isDisabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Buttons;
