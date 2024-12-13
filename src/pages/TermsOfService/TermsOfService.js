import React from "react";
 /*terms of service page with text and demo contact info in bold */
const TermsOfService = () => {
  return (
    <div className="container my-5">
      <h1>Terms of Service</h1>
      <p>
        Welcome to Recipe Vault! By using this website, you agree to the following terms and conditions:
      </p>
      <ul>
        <li>This website is fictional and created for demonstration purposes only.</li>
        <li>All recipes on this site are sourced from Food.com and are not original works.</li>
        <li>This site does not claim ownership of the recipes listed and is not liable for inaccuracies or issues.</li>
        <li>All intellectual property related to the website design and development belongs to Michael Ferry.</li>
        <li>For inquiries, you can contact us at <strong>contact@recipevault.ie</strong> or call <strong>+353 87 123 4567</strong>.</li>
      </ul>
    </div>
  );
};

export default TermsOfService;
