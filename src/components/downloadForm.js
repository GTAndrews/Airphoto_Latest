import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-v3';

class DownloadForm extends Component {

  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= 6Lc6280ZAAAAALusZZhv5GH1BkAMqU18IwshInda")
  }

  updateToken = () => {
    // you will get a new token in verifyCallback
    this.recaptcha.execute();
  }

  render() {
    return (
      <div>
        <ReCaptcha
            ref={ref => this.recaptcha = ref}
            sitekey="6Lcg4s4ZAAAAAB-TWHuox2PbiRAdV-ynnZLXyq4l"
            action='homepage'
            verifyCallback={this.verifyCallback}
        />

        <h2>Google ReCaptcha with React </h2>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  };
};

export default DownloadForm;