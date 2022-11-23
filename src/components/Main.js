import Animation from './Animation/Animation';
import { StrictMode, useState } from 'react';
function Main() {
  return (
    <main>
      <div>
        <StrictMode>
          <Animation />
        </StrictMode>
      </div>
      <div>Testing</div>
    </main>
  );
}

export default Main;
