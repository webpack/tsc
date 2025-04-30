// This script is originally based on ESLint's Transcript Generator script.
// @see https://github.com/eslint/tsc-meetings/blob/32b2c32ba5804e616470ac988cb553334a61a06f/scripts/generate-transcript.js

'use strict';

import moment from 'moment';
import fs from 'node:fs/promises';
import path from 'node:path';
import generateTranscript from 'discord-transcript-generator';

const { TOKEN, ID, ISSUE_TITLE } = process.env;

/**
 * Extract a date string from an automatically generated TSC Meeting issue title.
 * Issue title is formatted as "TSC meeting DD-MMMM-YYYY".
 * https://github.com/eslint/eslint-github-bot/blob/460d2653de44eafa0c15c361a294f5ecf5d05840/src/plugins/recurring-issues/index.js#L235
 * @param {string} issueTitle The issue title from which to extract the date string.
 * @returns {string} The extracted date string.
 */
const extractDateString = issueTitle => {
  const [, dateString = null] = /(\d\d-.+-\d\d\d\d)$/u.exec(issueTitle) || [];

  if (!dateString) {
    throw new Error(
      'Can\'t extract date from issue title. Expecting format "TSC meeting DD-MMMM-YYYY".'
    );
  }

  return dateString;
};

/**
 * Formats a date string to MM/DD/YYYY.
 * @param {string} dateString The date string to format.
 * @returns {string} The formatted date string.
 */
const formatDate = dateString =>
  moment(dateString, 'DD-MMMM-YYYY').format('MM/DD/YYYY');

/**
 * Generates the transcript file output path.
 * @param {string} dateString The date string representing the date of the transcript.
 * @returns {string} The path in which to output the transcript.
 */
const generateOutputPath = dateString => {
  const date = moment(dateString, 'MM/DD/YYYY');

  return `./notes/${date.year()}/${date.format('YYYY-MM-DD')}-transcript.md`;
};

const date = formatDate(extractDateString(ISSUE_TITLE));

const output = generateOutputPath(date);

await fs.mkdir(path.dirname(output), {
  recursive: true,
});

await generateTranscript({
  token: TOKEN,
  id: ID,
  date,
  output,
  name: 'Webpack TSC Meeting',
});
