
// this function is to repeat operations
export async function retryOperation(operation, maxAttempts, delayMs) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      try {
        await operation();
        return; // Operation succeeded, exit the loop
      } catch (error) {
        console.error(`Attempt ${attempts + 1} failed: ${error.message}`);
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      attempts++;
    }
    console.error(`Operation failed after ${attempts} attempts.`);
  }