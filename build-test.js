import { build } from 'vite';

async function runBuild() {
  try {
    await build();
    console.log("Build successful!");
  } catch (error) {
    console.error("Caught error:");
    // Manually print out the error stack and properties
    if (error.errors && Array.isArray(error.errors)) {
      error.errors.forEach((err, idx) => {
        console.error(`Error ${idx}:`, err);
        console.error("Stack:", err.stack);
        console.error("Message:", err.message);
      });
    } else {
      console.error(error);
      console.error(error.stack);
    }
  }
}

runBuild();
