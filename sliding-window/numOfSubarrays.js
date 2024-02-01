/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
// [medium][sliding-window] 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

var numOfSubarrays = function (arr, k, threshold) {
  let answser = 0;
  let firstSum = 0;

  for (let i = 0; i < k; i++) {
    firstSum += arr[i];
  }
  if (firstSum / k >= threshold) {
    answser++;
  }

  let currentSum = firstSum;
  for (i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    const average = currentSum / k;
    if (average >= threshold) {
      answser++;
    }
  }

  return answser;
};

console.log("====================================");
console.log(
  numOfSubarrays(
    [
      8246, 1867, 193, 4539, 2650, 4721, 2944, 5777, 8055, 7502, 4334, 2137,
      3658, 4156, 4628, 1139, 7963, 8035, 6008, 8427, 1841, 9169, 1059, 6158,
      9116, 8052, 7074, 7866, 584, 666, 192, 8081, 8273, 2809, 3017, 7852, 1869,
      3395, 4649, 5366, 8834, 9100, 1643, 9511, 4136, 3897, 7193, 2500, 2721,
      8477, 2887, 8300, 3922, 579, 4228, 7983, 4247, 5362, 5581, 9270, 8602,
      1944, 240, 6044, 6036, 1219, 6901, 2007, 2123, 9699, 3388, 390, 9144,
      7697, 5160, 6442, 7078, 9758, 8841, 2064, 4096, 146, 7362, 3952, 2346,
      4171, 7598, 1201, 1860, 9101, 8979, 8437, 1989, 5349, 5148, 9422, 7217,
      1406, 8414, 3586, 5935, 7395, 2257, 7802, 9449, 3824, 6874, 3684, 4252,
      3947, 8985, 1052, 7295, 2976, 2045, 2315, 4887, 307, 8784, 988, 942, 7960,
      747, 1593, 1112, 7874,
    ],
    1,
    307
  )
);
console.log("====================================");
