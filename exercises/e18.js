/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let asteroidCountByYear = data.asteroids.reduce((accumulator, asteroid) => {
    const year = asteroid.discoveryYear;
    accumulator[year] = (accumulator[year] || 0) + 1;
    return accumulator;
  }, {});
  const maxAsteroidDiscoveryYear = maxBy(
    Object.keys(asteroidCountByYear),
    (year) => {
      return asteroidCountByYear[year];
    }
  );
  return Number(maxAsteroidDiscoveryYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
