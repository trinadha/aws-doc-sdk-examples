/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide//sns-examples-sending-sms.html.

Purpose:
sns_checkphoneoptout.ts demonstrates how to determine whether a phone number has opted out of receiving AWS SMS messages.

Inputs (replace in code):
- REGION
- PHONE_NUMBER

Running the code:
ts-node sns_checkphoneoptout.ts
 */
// snippet-start:[sns.JavaScript.SMS.checkIfPhoneNumberIsOptedOutV3]
// Import required AWS SDK clients and commands for Node.js
const {
  SNSClient,
  CheckIfPhoneNumberIsOptedOutCommand
} = require("@aws-sdk/client-sns");

// Set the AWS Region
const REGION = "REGION"; //e.g. "us-east-1"

// Set the parameters
const params = { phoneNumber: "PHONE_NUMBER" }; //PHONE_NUMBER, in the E.164 phone number structure

// Create SNS service object
const sns = new SNSClient(REGION);

const run = async () => {
  try {
    const data = await sns.send(
      new CheckIfPhoneNumberIsOptedOutCommand(params)
    );
    console.log("Phone Opt Out is " + data.isOptedOut);
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();
// snippet-end:[sns.JavaScript.SMS.checkIfPhoneNumberIsOptedOutV3]

