import React from "react";
import termsData from "/terms.json";

function TermsTable() {
  const rows = [];

  // Loop through each term/definition pair in the data
  for (const term in termsData) {
    if (termsData.hasOwnProperty(term)) {
      const definition = termsData[term];

      // Add a row to the table for the current term/definition pair
      rows.push(
        <tr key={term}>
          <td>{capitalizeWords(term)}</td>
          <td>{definition}</td>
        </tr>
      );
    }
  }

  // Render the table with the term/definition rows
  return (
    <table>
      <thead>
        <tr>
          <th>Term</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default TermsTable;

function capitalizeWords(inputString) {
  const words = inputString.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // If the word is already capitalized, skip it
    if (word === word.toUpperCase()) {
      continue;
    }

    // Capitalize the first letter of the word
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

    // Replace the original word with the capitalized word
    words[i] = capitalizedWord;
  }

  // Join the words back into a single string and return it
  return words.join(" ");
}
