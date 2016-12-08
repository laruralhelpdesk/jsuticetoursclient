import React, { PropTypes } from 'react';

const FlowQuestion = ({ renderChatButton, success, error, question, onNo, onYes, handleBack }) => (
  <div>
    <div className="row">
      {!error.length ?
        <div>
          <h3>{question.text}</h3>
          <button type="button" onClick={onYes}>Yes</button>
          <button type="button" onClick={onNo}>No</button>
        </div>
        :
        <h3>{error}</h3>
      }
    </div>
    <div>
      <button type="button" onClick={handleBack}>
        back
      </button>
      {success ? renderChatButton() : null}
    </div>
  </div>
);

FlowQuestion.propTypes = {
  question: PropTypes.object,
  onNo: PropTypes.func.isRequired,
  onYes: PropTypes.func.isRequired,
  renderChatButton: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default FlowQuestion;